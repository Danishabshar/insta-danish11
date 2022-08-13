// const express = require("express")
// const postController = require("./post")
// const mongoose = require("mongoose")
// const cors = require("cors")

// const app = express()

// app.listen(5000,()=>{
//     console.log("server started at post:5000")
// })

// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
// app.use(cors())

// mongoose.connect("mongodb+srv://Danish1:Danish1@cluster0.ab76dtz.mongodb.net/insta?retryWrites=true&w=majority",()=>{
//     console.log("connected to database")
// })

// app.get("/",(req,res)=>{
//     console.log("welcome to instaclone") 
// })

const express = require("express")
const postController = require("./post")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.listen(process.env.PORT || 5000,()=>{
    console.log("server started at post:5000")
})

app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({extended:false}));
app.use(cors())

mongoose.connect("mongodb+srv://Danish12:Danish12@cluster0.ilcksdy.mongodb.net/instaclonenew?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("connected to database")
})

app.get("/",(req,res)=>{
    console.log("welcome to instaclone");
    res.send("welcome to instaclone") 
})

// middleware
app.use("/post",postController)

// middleware
