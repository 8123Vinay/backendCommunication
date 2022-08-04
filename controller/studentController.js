import { signUpService, checkUserService,addUrlToDatabase } from '../services/studentService.js'
import getBufferData from '../services/getBufferData.js'
import {uploadToFirebase} from '../services/firebase.js';

 
export async function handleVideoUpload(req, res) {
    let {phoneNumber, topic}=req.body;
   try{
       let filename=req.file.originalname
       let foldername='videos'
       let bufferData=await getBufferData(foldername,req.file.originalname);
       let firebaseFloder=`communication/${filename}`
       let url=await uploadToFirebase(bufferData,"mp4",filename,firebaseFloder);
       let message=addUrlToDatabase(url,topic,phoneNumber);
       res.send(url);
     
   }  
   catch(err){
     res.send("error in here")
   }

}

// I have to update the topic choosen

export async function handleSignup(req, res) {
    // if user doesnot exist in data baser create a new user;
    let { phoneNumber } = req.body;
    try{
       let response=await signUpService(phoneNumber);
       res.send(response);
    }
    catch(err){
       res.send(err);
    }
    // send the user the error message;

   


}


