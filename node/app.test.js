const SchedulingService = require('./SchedulingService');
let req;
let res;

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockRequest = (bookingData = {}) => {
    return {
      body: bookingData,
    };
  };

describe("test scheduling api", () => {
    beforeEach(() => {
        req = mockRequest();
        res = mockResponse(); 
    })
    describe("GET /availability", () => {
        it("returns availability data from thinkful api", async () => {
            await SchedulingService.getAvailability(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).not.toHaveBeenCalledWith({});
        });
    });

    describe("POST /bookMeeting and GET /booked", () => {
        it("returns empty booked data from /booked endpoint",async () => {
            await SchedulingService.getBookedTimes(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith([]);
        });
    
        it("returns a booked meeting from /bookedMeeting endpoint", () => {
            const testDate = new Date().toLocaleDateString();
            req = mockRequest({id: 1, name: 'morty', date: testDate })
            SchedulingService.bookMeeting(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith([{b_id: 1, id:1, name: 'morty', date: testDate}]);
        });
    });
});
