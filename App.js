import express from 'express';
import multer from 'multer';
import cors from "cors";
import {handleVideoUpload,handleSignup} from './controller/studentController.js'
import './services/mongoose.js'



const app=express();

app.use(express.urlencoded( {extended:true} ));
app.use(express.json());
app.use(cors())



const videoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'videos')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const videoUpload = multer({ storage: videoStorage })





app.post("/upload",  videoUpload.single('recordedVideo'), handleVideoUpload);



app.post("/signup", handleSignup);




app.listen(4000, ()=>{
    console.log("we are listening on 4000")
})


