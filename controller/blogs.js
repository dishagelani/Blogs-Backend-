exports.UploadBlogImages = async (req, res) => {
    try {
        let generatedImageLinks = [];
        req.files.length &&
            req.files.map((file) =>
                generatedImageLinks.push(
                    `http://localhost:8000/${file.originalname}`
                )
            );
        res.status(200).json({generatedImageLinks});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "something went wrong !"});
    }
};

exports.PostBlog = async (req, res) => {
    try {
        res.status(200).json({message: "Blog added successfully ! "});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "something went wrong !"});
    }
};

exports.GetBlogDetails = async (req, res) => {
    try {
        res.status(200).json({message: "Course added successfully ! "});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "something went wrong !"});
    }
};

exports.GetAllBlogs = async (req, res) => {
    try {
        res.status(200).json({message: "Course added successfully ! "});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "something went wrong !"});
    }
};
