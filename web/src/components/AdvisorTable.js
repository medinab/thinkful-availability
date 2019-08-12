import React from 'react';
import AdvisorRow from './AdvisorRow';

const AdvisorTable = () => {
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
          <AdvisorRow/>
        </table>
        </>
    )
}

export default AdvisorTable;