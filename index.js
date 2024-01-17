const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const userRoutes = require("./routes/user.routes")
const Connection = require("./db")
dotenv.config()
port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is started ${port}`);
})
app.use(cors());
app.use(express.json());
Connection();
app.use("/api/v1/user",userRoutes);