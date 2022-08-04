import {Student} from '../models/student.js'
export function checkUserService(phoneNumber) {
    return new Promise((resolve, reject) => {
        Student.findOne({ phoneNumber: phoneNumber }, function (err, user) {
            if (user != null) {
                resolve(user);
            }
            reject("user not found")
        });
    })

}


export function signUpService(phoneNumber) {

    return new Promise((resolve, reject) => {
        const newStudent = new Student({
            phoneNumber: phoneNumber,
            videoURL:""
        });

        newStudent.save((err, user) => {
            console.log('saving user in database')
            if (err) {
                reject("user cannot be created")
                console.log('we have and eror')
            }
            else{
                resolve('we have created user')
                console.log('we have resolved')
            }
            
        })
    })

}


export async function addUrlToDatabase(url,topic,phoneNumber){
    return new Promise((resolve,reject)=>{
        Student.findOne({phoneNumber:phoneNumber}, (err,student)=>{
            if(err) reject("user not found");
            student.videoURL=url;
            student.topicChoosen=topic;
            student.save(async (err,user)=>{
                if(err) reject("Video Cannot be saved in database");
                resolve('uploaded Successfully');
            })
        })
    })
}