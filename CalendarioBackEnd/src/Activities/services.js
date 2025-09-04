const { ObejctId } = require("mongodb");
const { database } = require("../database/index");

const COLLECTION = "Activities";

const Getall = async () => {
  const collection = await database(COLLECTION);
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await database(COLLECTION);
  return await collection.findOne({ _id: ObejctId(id) });
};

const create = async (activity) => {
  const collection = await database(COLLECTION);
  let result = collection.insertOne(activity);
  return result.insetedId;
};

module.exports.activitiesService = {
  Getall,
  getById,
  create,
};
