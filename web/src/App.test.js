import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import AdvisorTable from './components/AdvisorTable';
import AdvisorRow from './components/AdvisorRow';
import BookedTable from './components/BookedTable';
import BookedRow from './components/BookedRow';
import Header from './components/Header';
import StudentForm from './components/StudentForm';

configure({ adapter: new Adapter() });
const mockAvailability = {'31872': ["8/13/19 1:30:00 PM"]};
const mockJustBooked = [{
  b_id: 1,
  id: "31872",
  dateTime: "8/13/19 1:30:00 pm",
  name: "morty"
}];
const bookMeeting = () => {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App has 4 sub components', () => {
  const app = shallow(<App />);
  expect(app.find(Header).length).toBe(1);
  expect(app.find(StudentForm).length).toBe(1);
  expect(app.find(AdvisorTable).length).toBe(1);
  expect(app.find(BookedTable).length).toBe(1);
});

it('check booked row', () => {
  const bookedTime = mockJustBooked[0];
  const wrapper = shallow(<BookedRow booking={bookedTime} />);
  expect(wrapper.find('.booked-name').text()).toBe('morty');
  expect(wrapper.find('.booked-advisor-id').text()).toBe('31872');
  // expect(wrapper.find('.booked-id').text()).toBe('1');
  
});

it('check advisor row', () => {
  const keyId = Object.keys(mockAvailability)[0];
  const wrapper = shallow(<AdvisorRow bookMeeting={bookMeeting} id={keyId} dateTime={mockAvailability[keyId]} />);
  expect(wrapper.find('.advisor-id').text()).toBe("31872");
  expect(wrapper.find('.book-time').text()).toBe("8/13/19 1:30:00 PM");
});






