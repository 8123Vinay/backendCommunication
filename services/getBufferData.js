import { createReadStream, writeFile } from 'fs';
export default function getBufferData(inputfolder, inputfileName) {
    console.log('we are getting buffer data')
    return new Promise((resolve, reject)=>{
      let buffer;
      let data = [];
      let readerStream = createReadStream(`${inputfolder}/${inputfileName}`, { highWaterMark: 16 }); //Create a readable stream
  
      readerStream.on('data', function (chunk) {
          data.push(chunk)
  
  
      });
  
      readerStream.once('end', function () {
          buffer = Buffer.concat(data)
          resolve(buffer)
  
      });
  
      readerStream.on('error', function (err) {
          console.log(err)
          reject(err)
      });
    })
}