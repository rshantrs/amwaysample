const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_CON;
db.product = require("./product.model.js")(mongoose);

console.log(db.product)
module.exports = db;