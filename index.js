const express = require('express');
const pool = require('./database.js');
const BooksRoute = require('./routes.js')
const multer  = require('multer')
const { v4: uuidv4 } = require('uuid');


let avatarName = uuidv4();
const fileStorageEngine = multer.diskStorage({
    destination :(req, file, cb) =>{
        cb(null, './avatar');
    },
    filename: (req,file,cb) =>{
        cb(null, avatarName + "--" + file.originalname)
    },
})
const upload = multer({storage: fileStorageEngine })


const app = express();
  
app.use(express.json())

const port = process.env.port||4000
app.post('/', upload.single('avatar'), (req,res)=>{
    console.log('image uploading...');
    console.log(req.file)
    res.send('success')
})

app.get('/', (req,res)=>{
    res.status(200).send({
        status: " success",
        message: "you have been able to get this"
    })

})

// app.post('/record/Books/avatar', BooksRoute)
app.use('/store/books',bookRoute);
// app.post('/', (req,res)=>{
//     res.status(200).send({
//         status: " success",
//         message: "you have been able to create this"
//     })

// })
 








pool.connect()
.then(()=>{
 console.log(`database awaiting`)
})


// app.get('/', (req,res)=>{
//     res.status(200).send({
//         status: " success",
//         message: "you have been able to get this"
//     })

// })

// app.patch('/', (req,res)=>{
//     res.status(200).send({
//         status: " success",
//         message: "you have been able to update this"
//     })

// })



app.listen(port,()=>{
    console.log(`server connected at ${port}`)
})