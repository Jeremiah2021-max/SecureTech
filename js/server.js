const { Result } = require("postcss");

const express= required('express');
const multer= required('multer');
const upload= multer();
const mysql= required("mysql");
const bodyParser= required("body-parser");
const cors= required("cors");
const app=express();
const PORT=3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//MySQL connection

const db = mysql.createConnect({
    host: "localhost",
    user: "root",
    password: "054Jer_!",
    database: "securetechL"
});

db.connect((err)=>{
    if (err){
        console.log("MySQL connectionerror:",err);
    }else{
        console.log("Connected to MySQL");
    }
});


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.post('/submit-form',upload.none(),(req, res)=>{
    const {first_name,last_name,email,phone,message}=req.body;
    const sql = "INSERT INTO contact_form(first_name,last_name,phone,email,message) VALUES (?,?,?,?,?)";
    db.query(sql,[first_name,last_name,phone,email,message], (err, result)=>{
        if(err){
            console.log("Error inserting data:",err);
            res.status(500).send("Database error");
        }else{
            res.send("Form submitted successfully");
        }
    });
    console.log('Form data received:',first_name,last_name,email,phone,message);
    res.send('Thank you, ${name}!We received your message.');
})
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});

db.query("SELECT * FROM contact_form", (err,results)=>{
    if (err) throw err;
    console.log(results);
});