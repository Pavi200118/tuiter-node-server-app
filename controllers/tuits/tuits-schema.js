import mongoose from 'mongoose';
const schema = mongoose.Schema({
  title: String,
  likes: String,
  liked: String,
}, {collection: 'tuits'});
export default schema;

