import React from 'react';

const BookedRow = (props) => {
    return (
        <tbody>
            <tr key={props.booking.b_id}>
                <td className='booked-advisor-id'>{props.booking.id}</td>
                <td className='booked-name'>{props.booking.name}</td>
                <td>
                <time className='booked-date-time' dateTime={props.booking.dateTime}>{props.booking.dateTime}</time>
                </td>
            </tr>
        </tbody>
    )
}

export default BookedRow;