const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middlewares/error');
const app = express();
const connectDB = require('./config/db');
const cors = require("cors");
const port = process.env.PORT || 3000;
connectDB();
// to use body data, we need to use middle ware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.send('Hello World!');
  });
app.use("/api/getAllData", require('./routes/getData'))
app.use("/api/forms", require('./routes/forms'))
app.use("/api/reviews", require('./routes/reviews'))
app.use("/api/users", require('./routes/users'))
app.use(errorHandler);
app.listen(port
    //     , () => {
    //     console.log(`Example app listening on port ${port}`)
    // }
)