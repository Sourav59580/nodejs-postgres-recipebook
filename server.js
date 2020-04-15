const express = require('express')
const app = express();


//Connection established
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running at port ${PORT}`))