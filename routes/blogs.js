const Blogs = require("../controller/blogs");
const upload = require("../middleware/uploadImage");

module.exports = (app) => {
    app.get("/", (req, res) => res.status(200).send("Blog APIs !"));
    app.get("/getAllBlogs", Blogs.GetAllBlogs);
    app.get("/getBlogDetails", Blogs.GetBlogDetails);
    app.post("/postBlog", upload.array("demo_images"), Blogs.PostBlog);
    app.post(
        "/uploadBlogImages",
        upload.single("blog_images"),
        Blogs.UploadBlogImages
    );
};
