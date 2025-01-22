import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // The backend URL
  const API_URL = "https://eventease-mifi.onrender.com/api/events";

  useEffect(() => {
    // Fetch events data from the backend using axios
    axios.get(API_URL)
      .then((response) => {
        setEvents(response.data); // Update state with the response data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError("Failed to fetch events!"); // Handle errors if any
        setLoading(false); // Set loading to false if there’s an error
      });
  }, []); // Empty dependency array to run only once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if something goes wrong
  }

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>{event.name}</li> // Render events from the response
        ))}
      </ul>
    </div>
  );
};

export default EventList;
