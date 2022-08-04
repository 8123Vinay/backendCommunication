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

