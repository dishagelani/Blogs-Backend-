const express = require("express");
const path = require("path");
require("dotenv").config();
var cors = require("cors");
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

require("./routes/blogs")(app);

app.listen(PORT, () => console.log("App is listening to port", PORT));
