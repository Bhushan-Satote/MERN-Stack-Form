

const mongoose = require('mongoose');

// we are creating a Schema which define structure of document in MongoDb Collection.

// here schema will specifies all field which will use in form with there data type for storing purpose

const formSchema = mongoose.Schema({
  name: { type: String, required: true },
  // name: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  message: { type: String, required: true },
}, { timestamps: true }); // here timeStamps is optional which '


module.exports = mongoose.model('Form', formSchema);
