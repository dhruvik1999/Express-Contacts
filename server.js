const express = require('express');
const dotrnv = require('dotenv').config();
const router = express.Router();
const errorHdlr = require('./middleware/errorHdlr');
const connectDB = require('./config/dbConnection');

connectDB();

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use("/api/contacts", require('./routes/contactRouter'));
app.use("/api/user", require('./routes/userRouter'));


app.use(errorHdlr);

app.listen(port , ()=>{
    console.log('server running on port : ' , port)
})
