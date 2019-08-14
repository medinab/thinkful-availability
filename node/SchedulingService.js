const axios = require('axios');
const Helper = require('./helper');

const booked = [];

class SchedulingService {
    async getAvailability(req, res) {
        try {
            const data = await axios('https://www.thinkful.com/api/advisors/availability');
            const formatedData = Helper.formatAdvisorData(data.data);
            res.status(200).json(formatedData);
        } catch (error) {
            console.log(error);
            res.send('404');
        }
    }

    async bookMeeting(req, res) {
        console.log(req.body);
        booked.push(req.body);
        res.status(200).json(booked);
    }

    _updateAvailableTimes(bookedTimes, availableTimes) {
        //after getting available time data remove booked times
    }
}

module.exports = new SchedulingService();