import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    phoneNumber: { type: Number, required: true },
    videoURL:{type:String},
    topicChoosen:{type:String}
})





// it is not required;



export const Student = mongoose.model('Student', studentSchema);