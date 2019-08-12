import React from 'react';

const AdvisorRow = () => {
    return (
        <tbody>
            <tr>
              <td>35545</td>
              <td>
                <ul className="list-unstyled">
                  <li>
                    <time dateTime="2019-04-04T13:00:00-04:00" className="book-time">4/4/2019 1:00 pm</time>
                    <button className="book btn-small btn-primary">Book</button>
                  </li>
                  <li>
                    <time dateTime="2019-04-05T10:00:00-04:00" className="book-time">4/5/2019 10:00 am</time>
                    <button className="book btn-small btn-primary">Book</button>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>36232</td>
              <td>
                <ul className="list-unstyled">
                  <li>
                    <time dateTime="2019-04-02T13:00:00-04:00" className="book-time">4/2/2019 1:00 pm</time>
                    <button className="book btn-small btn-primary">Book</button>
                  </li>
                  <li>
                    <time dateTime="2019-04-03T11:00:00-04:00" className="book-time">4/3/2019 11:00 am</time>
                    <button className="book btn-small btn-primary">Book</button>
                  </li>
                </ul>
              </td>
            </tr>
        </tbody>
    )
};

export default AdvisorRow;