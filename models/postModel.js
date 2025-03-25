
// posts Schema
const postsSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  content: {
    type: String,
    required: true,
  },
});

//  Middlewear to generate postid automatically
// us e'validaate to make sure the middle wear runs before validation
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

// create an instance of the post model

const newpost = new Post({
  content: "Hello welcome to my blog space!",
});

newpost
  .save()
  .then((doc) => {
    console.log(`${doc}, succesfully saved to db`);
  })
  .catch((err) => {
    console.log(err);
  });
