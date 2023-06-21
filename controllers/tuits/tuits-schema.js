import mongoose from 'mongoose';
const schema = mongoose.Schema({
  likes: Number,
  liked: Boolean,
  dislikes: Number,
      topic: String,
      username: String,
      handle: String,
      time: String,
      image: String,
      title: String,
      replies: String,
      retuits: String,
}, {collection: 'tuits'});
export default schema;

