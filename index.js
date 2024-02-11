const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

// import multer and configer a file where we shall upload files
const multer = require('multer');
// Create Storage Content 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    }, 
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage });




app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.json({
        success: true
    })
})

app.post('/api/upload',upload.single('file'), (req, res)=>{
    res.json(req.file);
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () => {
    console.log(`Server Up and running at http://localhost:${port}`);
})