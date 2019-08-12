import React from 'react';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import AdvisorTable from './components/AdvisorTable';
import BookedTable from './components/BookedTable';

const App = () => {

  return (
    <div className="App container">
      <Header/>
      <StudentForm/>
      <AdvisorTable/>
      <BookedTable/>
    </div>
  )
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.fetchToday();
//   }

//   async fetchToday() {
//     try {
//       const res = await fetch("/today");
//       const json = await res.json();
//       this.setState({today: json.today});
//     } catch (e) {
//       console.error("Failed to fetch 'today' data", e);
//     }
//   }

//   render() {
//     return (
//       <div className="App container">
//         <h1>Book Time with an Advisor</h1>
//         {<span id="today">Today is {this.state.today}.</span>}
//         <StudentForm/>
//         <h2>Available Times</h2>
//         <AdvisorTable/>
//         <h2>Booked Times</h2>
//         <BookedTable/>
//       </div>
//     );
//   }
// }

export default App;
