const axios = require('axios');
const moment = require('moment');

const booked = [];
let availabilityData = {};
let id = 1;

class SchedulingService {
    async getAvailability(req, res) {
        try {
            if (Object.keys(availabilityData).length === 0) {
                const data = await axios('https://www.thinkful.com/api/advisors/availability');
                availabilityData = data.data;
                availabilityData = this._formatAvailability(availabilityData);
            }
            availabilityData = this._updateAvailableTimes(booked, availabilityData);
            return res.status(200).json(availabilityData);
        } catch (error) {
            console.log(error);
            return res.status('404');
        }
    }

    bookMeeting(req, res) {
        const addBookingId = {b_id: id++ ,...req.body}
        booked.push(addBookingId);
        return res.status(200).json(booked);
    }

    async getBookedTimes(req, res) {
        return res.status(200).json(booked);
    }

    _updateAvailableTimes(bookedTimes, availableTimes) {
        if (bookedTimes.length === 0) return availableTimes;
        for (let i =0; i < bookedTimes.length; i++) {
            availableTimes[bookedTimes[i].id] = availableTimes[bookedTimes[i].id].filter((date) => {
                return date !== bookedTimes[i].dateTime;
            });
        }
        return availableTimes;
    }

    _formatAvailability(data) {
        let formattedData = {};
        for (let date in data) {
            let dateTime = data[date];
            for (let time in dateTime) {
                let id = dateTime[time];
                if (!formattedData.hasOwnProperty(id)) {
                    formattedData[id] = [];
                }
                formattedData[id].push(moment(time).format("L LTS"));
                
            }
        }
        return formattedData;
    }
}

module.exports = new SchedulingService();