exports.UploadBlogImages = async (req, res) => {
    try {
        console.log(req.file);
        let generatedImageLink = "";
        if (req.file)
            generatedImageLink = `http://localhost:8000/${req.file.originalname}`;

        res.status(200).json({generatedImageLink});
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
