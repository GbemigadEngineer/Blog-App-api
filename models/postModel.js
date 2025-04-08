// posts Schema
const postsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author, //Author would be the username of the blogger creating the post
  date: { type: Date, default: Date.now },
  content: {
    type: String,
    required: true,
  },
});

// Psot methods 

postsSchema.statics.getAllPosts()={
  
}
//  Middlewear to generate postid automatically
// use'validaate to make sure the middle wear runs before validation
// postsSchema.pre("validate", async function (next) {
//   if (!this.postid) {
//     try {
//       const count = await mongoose.model("Post").countDocuments(); // Count number of existing posts in db
//       this.postid = String(count + 1).padStart(3, "0"); //convert newly generated post id to 001, 002, 004 etc
//       next();
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     next();
//   }
// }); //.pre() a middlewear function in mongoose that runs before any of the CRUD actions is executed on the databse. in other words before your.save() or any other CRUD function works any .pre() middlewear is exxecuted first.

// Create the post model
const Post = mongoose.model("Post", postsSchema);

module.exports = Post;
