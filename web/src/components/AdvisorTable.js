import React, { useState, useEffect } from 'react';
import AdvisorRow from './AdvisorRow';

const AdvisorTable = (props) => {
    const [availability, setAvailability] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/availability');
                const data = await response.json();
                setAvailability(data);
            } catch (error) {
                console.log(error)
            }
        })();
        
    }, [])

    return (
        <>
        <h2>Available Times</h2>
        <table className="advisors table">
          <thead>
            <tr>
              <th>Advisor ID</th>
              <th>Available Times</th>
            </tr>
          </thead>
          {Object.keys(availability).map((id) => {
            return <AdvisorRow key={id} id={id} bookMeeting={props.bookMeeting} dateTime={availability[id]} />
          })}
        </table>
        </>
    )
}

export default AdvisorTable;