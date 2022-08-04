import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyDJPuYTNfkAOL0xJXEMKCGeq6nWcBqGwvE",

    authDomain: "videoupload-1d486.firebaseapp.com",

    databaseURL: "https://videoupload-1d486-default-rtdb.firebaseio.com",

    projectId: "videoupload-1d486",

    storageBucket: "videoupload-1d486.appspot.com",

    messagingSenderId: "708055631884",

    appId: "1:708055631884:web:b8e0a5c70f8662089e8629",

    measurementId: "G-YTBLSE6ZTL"

};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);












export function uploadToFirebase(bufferData,contentType,outputFileName,outputFilepath) {
//    send the outputFilepath that is to uploaded to the firebase
// images/store it as the phoneNumber.jpg
// while creating the user upload the image to the firebase

    return new Promise((resolve, reject) => {
        const fileRef = ref(storage, `${outputFilepath}`);
        const metatype = { contentType: contentType, name: outputFileName };
        const uploadTask = uploadBytesResumable(fileRef, bufferData, metatype);
        console.log('we are in uploading')
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error)
            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );

    });

 
}
       




