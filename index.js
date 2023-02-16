const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./routes/blogs")(app);

app.listen(PORT, () => console.log("App is listening to port", PORT));
