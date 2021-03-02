import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const uri = process.env.MONGODB_URL;
    const options = {
      socketTimeoutMS: 30000,
      keepAlive: true,
      poolSize: 10,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };
    mongoose.Promise = global.Promise;

    await mongoose.connect(uri, options);

    const db = mongoose.connection;

    db.on('error', (err) => {
      console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
    });
  } catch (err) {
    console.error(`Error connectDb: ${err}`);
  }
};
