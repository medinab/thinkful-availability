import React from 'react';
import BookedRow from './BookedRow';

const BookedTable = () => {
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
          <BookedRow/>
        </table>
        </>
    )
}

export default BookedTable;