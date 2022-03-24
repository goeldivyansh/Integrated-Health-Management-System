// new
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/Users");
dotenv.config();

//Connect to DB
mongoose.connect(
        process.env.DB_CONNECT,
        { useUnifiedTopology: true, useNewUrlParser: true},
        () => {console.log("Connected to DB")}
)

//Import routes 
const userRoutes = require("./routes/user");

//MiddleWares
app.use(express.json());
app.use(cors());

//route middleware 
app.use("/",userRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("Server Has Started!");
});
