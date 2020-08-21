const tesseract = require("node-tesseract-ocr")
const express = require('express')
const app = express()
const port = 4000




fs = require('fs');

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

const fileName = './receipts/r3.jpeg'
 
tesseract.recognize(fileName, config)
  .then(text => {
    // console.log("Result2", text)
    // fs.writeFile('result',text , [encoding], [callback])
    fs.writeFile('./text/result.txt', text, function (err) {
        if (err) return console.log(err);
        console.log('finished');
      });

  })
  .catch(error => {
    console.log(error.message)
    
  })
 
  fs.readFile('./text/result.txt', 'utf8', function(err, contents) {
      console.log('reading file: ',contents);
  });
   
  app.get('/', (req, res) => {
    res.send('Hello World! 1234')
    
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  