const mongoose = require('mongoose');

const connectDB = async () => {
  try {
     // Here mongoose.conect() will connect out app with mongoDB

    await mongoose.connect(process.env.MONGO_URI, { 

        //  ' process.env.MONGO_URI ' it is path of env File where Our MongoURi securly store.


    // here configure setting which implement that how mongoose interects with mongoDb driver

    // useNewUrlParser : use to tell mongoose to use New Mongodb's URL 

      useNewUrlParser: true,

      // useUnifiedTopology : is use to monitor and manage mongodb Connection

      useUnifiedTopology: true,
      
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    process.exit(1); // Stops the server if DB fails to connect.
  }
};

module.exports = connectDB;
