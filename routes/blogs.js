module.exports = (app) => {
    app.get("/", (req, res) => res.status(200).send("Blog APIs !"));
    app.get("/getAllBlogs", (req, res) => {
        res.status(200).send("Get all blogs API");
    });
    app.get("/getBlogDetails", (req, res) => {
        res.status(200).send("Get blog API");
    });
    app.post("/postBlog", (req, res) => {
        console.log("req.body", req.body);
        res.status(200).send("Post blog API");
    });
};
