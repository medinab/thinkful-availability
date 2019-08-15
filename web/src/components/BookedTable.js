import React, {useState, useEffect} from 'react';
import BookedRow from './BookedRow';

const BookedTable = (props) => {
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/booked');
        const data = await response.json();
        setBooked(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const updatedBookings = [...booked, ...props.justBooked];

  return (
      <>
      <h2>Booked Times</h2>
      <table className="bookings table">
        <thead>
          <tr>
            <th>Advisor ID</th>
            <th>Student Name</th>
            <th>Date/Time</th>
          </tr>
        </thead>
        {updatedBookings.map((booking) => { 
          return <BookedRow key={booking.b_id} booking={booking} />
        })}
      </table>
      </>
  )
}

export default BookedTable;