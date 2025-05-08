const mongoose = require("mongoose");
require("dotenv").config()
const express = require("express");
const colors = require("colors");
const backend = express();
const http = require("http").Server(backend);
const cors = require("cors")
const routes = require("./Routes")

backend.use(express.json());
 
backend.use(cors({
    origin: "*",
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"]

})
);

backend.use(routes)
backend.use("/uploads", express.static("uploads"));


mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {
    console.log(colors.green("✓ DB is connected with Backend"));
    const PORT = 5000;
    http.listen(PORT, () => {
        console.log(colors.cyan(`Server is listen on port : ${PORT}`));
        
    });
})
.catch((error) => {
    console.error(colors.red("Error connecting to DB:", error));
});

backend.get("/", (req, res) => {
    res.send("Welcome to the Backend Server!");
});

backend.get("/login",(req,res)=>{
    res.send("welcome to login page");
});
