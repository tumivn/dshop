import * as mongoose from "mongoose";

const dbConnect = () => {
  const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/express-mongoose-demo';
  if (mongoose.connection.readyState === 1) {
    return;
  }
  mongoose.connect(DB_URI);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
}

export default dbConnect;
