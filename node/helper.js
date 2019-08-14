const moment = require('moment');

class Helper {
    formatAdvisorData(data) {
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

module.exports = new Helper();