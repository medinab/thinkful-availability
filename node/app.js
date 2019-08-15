const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3001;
const SchedulingService = require('./SchedulingService');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/availability', (req, res) => SchedulingService.getAvailability(req, res));

app.post('/bookMeeting', (req, res) => SchedulingService.bookMeeting(req, res));

app.get('/booked', (req, res) => SchedulingService.getBookedTimes(req, res));


app.listen(PORT, (error) => {
    if(error) console.log(error);
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app;