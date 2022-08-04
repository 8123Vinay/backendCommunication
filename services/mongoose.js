import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://8123Vinay:8123660160@cluster0.37w3k.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log('connected successfully')
}).catch(() => {
  console.log('connection error in here')
})


// first check whether user exist if exist then do nothing or else create new user and store the user database;
