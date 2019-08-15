import React, { useState } from 'react';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import AdvisorTable from './components/AdvisorTable';
import BookedTable from './components/BookedTable';

const App = (props) => {
  const [name, setName] = useState(null);
  const [justBooked, setJustBooked] = useState([]);

  async function bookMeeting(advisor, dateTime, e) {
    if (!name) {
      alert('Please enter a name before booking with an advisor');
    } else {
      const details = {
        id: advisor,
        dateTime,
        name
      };

      let booked = await fetch('/bookMeeting', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(details),
      });
      booked = await booked.json();
      setJustBooked(booked);
    }
  }

  function onNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="App container">
      <Header/>
      <StudentForm onNameChange={onNameChange}/>
      <AdvisorTable justBooked={justBooked} bookMeeting={bookMeeting}/>
      <BookedTable justBooked={justBooked}/>
    </div>
  )
}

export default App;
