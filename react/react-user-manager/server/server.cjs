const jsonServer = require('json-server')
const path = require('path')
const CONFIG = require('@user-manager/config')
const express = require('express')
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.get('/storybook', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/storybook-static/index.html"))
})

server.use(fileUpload({ 
  createParentPath: true, 
  limits: { 
    fileSize: 10 * 1024 * 1024 * 1024 //10MB max file(s) size
  } 
}));

server.use(express.static(path.join(__dirname, "../client/dist")))
server.use(express.static(path.join(__dirname, "../client/storybook-static")))
server.use(express.static(path.join(__dirname, "./uploads")))

server.use(middlewares)
server.use('/api', router)

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(morgan('dev'));


server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"))
})

server.post('/upload-documents', async (req, res) => {
  try {
    if(!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded'
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let document = req.files.document;
      
      //Use the mv() method to place the file in the upload directory (i.e. "uploads")
      document.mv('./uploads/' + document.name);

      //send response
      res.send({
        status: true,
        message: 'File is uploaded',
        data: {
          name: document.name,
          mimetype: document.mimetype,
          size: document.size
        }
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

server.listen(CONFIG.PORT, () => {
  console.log('JSON Server is running')
})

