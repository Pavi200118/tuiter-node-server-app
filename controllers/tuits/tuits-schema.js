import mongoose from 'mongoose';
const schema = mongoose.Schema({
  likes: String,
  liked: String,
  dislikes: Int32,
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

