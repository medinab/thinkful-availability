import React from 'react';

const AdvisorRow = (props) => {
    return (
        <tbody>
            <tr>
              <td>{props.id}</td>
              <td>
                <ul className="list-unstyled">
                    {props.dateTime.map((date) => {
                       return <li key={date}>
                            <time dateTime={date} className="book-time">{date}</time>
                            <button onClick={()=> props.bookMeeting(props.id, date)}className="book btn-small btn-primary">Book</button>
                        </li>
                    })}
                </ul>
              </td>
            </tr>
        </tbody>
    )
};

export default AdvisorRow;