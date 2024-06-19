const mongoose = require('mongoose')
// const mongoURI = `${process.env.MONGO_URI}/${process.env.MONGODB_NAME}`;
const mongoURI = "mongodb://mongo:27017/mern-db"
console.log(mongoURI);
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
