// require dependecies
const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config()
// create port connection
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
//connect mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
// require in express routes
app.use(require("./routes/api-route"));
app.use(require("./routes/html-route"));
// listen on port
app.listen(PORT, () => {
    console.log(`App is now running on port ${PORT}!`);
});
