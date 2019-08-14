import React, { useState } from 'react';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import AdvisorTable from './components/AdvisorTable';
import BookedTable from './components/BookedTable';

const App = (props) => {
  const [name, setName] = useState(null);

  function bookMeeting(advisor, dateTime) {
    if (!name) {
      alert('Please enter a name before booking with an advisor');
    } else {
      const details = {
        id: advisor,
        dateTime,
        name
      };

      fetch('/bookMeeting', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(details),
      });
    }
  }

  function onNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="App container">
      <Header/>
      <StudentForm onNameChange={onNameChange}/>
      <AdvisorTable bookMeeting={bookMeeting}/>
      <BookedTable />
    </div>
  )
}

export default App;
