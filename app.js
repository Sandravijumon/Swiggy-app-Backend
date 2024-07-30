const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
const loginModel = require("./models/admin")

mongoose.connect("mongodb+srv://sandramern23:Sandra_23@cluster0.jp0su3x.mongodb.net/SwiggyAppDb?retryWrites=true&w=majority&appName=Cluster0");


const app=express()
app.use(cors())
app.use(express.json())

//Admin SignUp

app.post("/adminSignIn", (req, res) => {
    let input = req.body;
    let hashedpassword = bcrypt.hashSync(input.password, 10);
    input.password = hashedpassword;
    console.log(input);
    let result = new loginModel(input);
    result.save();
    res.json({ "status": "success" });
});

app.listen(8080, () => {
    console.log("Server started");
});
