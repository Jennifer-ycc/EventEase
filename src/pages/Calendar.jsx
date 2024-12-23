import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Header } from '../components';

const localizer = momentLocalizer(moment); // Use moment for date handling

const scheduleData = [
  {
    id: 0,
    title: "Meeting with John",
    start: new Date(2024, 11, 22, 10, 0),
    end: new Date(2024, 11, 22, 11, 0),
  },
  {
    id: 1,
    title: "Team Stand-up",
    start: new Date(2024, 11, 22, 14, 0),
    end: new Date(2024, 11, 22, 14, 30),
  },
];

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 0, 10));
  const [events, setEvents] = useState(scheduleData);

  const change = (date) => {
    setSelectedDate(date);
  };

  const onEventDrop = (e) => {
    const updatedEvents = events.map((event) => {
      if (event.id === e.event.id) {
        return { ...event, start: e.start, end: e.end };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 650 }}
          selectable
          onSelectEvent={(event) => console.log(event)}
          onSelectSlot={(slotInfo) => console.log(slotInfo)}
          onDrop={onEventDrop} // Handle drag and drop
        />
      </div>
      <div className="mt-5">
        <table style={{ width: '100%', background: 'white' }}>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePicker
                  selected={selectedDate}
                  onChange={change}
                  showClearButton={false}
                  placeholderText="Select a date"
                  dateFormat="MMMM d, yyyy"
                  popperPlacement="bottom"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scheduler;
