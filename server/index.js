const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
require("dotenv").config();


const app = express()

mongoose.connect('mongodb://localhost/BMS')
    .then(() => console.log('Connection is Successful'))
    .catch(err => console.error('Couldnt Connect to mongodb', err))


app.use(cors());
app.use(express.json());


const userRoute = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const theatreRoutes = require('./routes/theatreRoutes');
const bookingRoutes = require('./routes/bookingRoutes');





app.use("/api/user", userRoute);
app.use("/api/movie", movieRoutes);
app.use("/api/theatre", theatreRoutes);
app.use("/api/bookings", bookingRoutes);






const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Port Connected. You can access it on  http://localhost:${port}`))


