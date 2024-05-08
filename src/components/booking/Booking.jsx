import React, { useState, useEffect } from "react";
import "./Booking.css"
import "/src/components/css/Fonts.css";
import "/src/scss/coffee.scss";
import smallBg from "/src/components/home/images/sm-bg.jpg";
import mediumBg from "/src/components/home//images/md-bg.jpg";
import largeBg from "/src/components/home//images/bg.jpg";
function Booking() {
  const [roomNumber, setRoomNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setBackgroundImage(smallBg);
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        setBackgroundImage(mediumBg);
      } else {
        setBackgroundImage(largeBg);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="main-page">
    <div className="reservation-form-container bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="reservation-form shadow-lg">
      <h1 className="text-center coffee">Reserve a table now</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2 ">
          <label htmlFor="roomNumber">Table Number:</label>
          <input
            type="number"
            className="form-control"
            id="roomNumber"
            name="roomNumber"
            min="1"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control mt-2"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            className="form-control mt-2"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="numberOfPersons">Number of Persons:</label>
          <input
            type="number"
            className="form-control"
            id="numberOfPersons"
            name="numberOfPersons"
            min="1"
            value={numberOfPersons}
            onChange={(e) => setNumberOfPersons(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary btn-block mt-2 ">
          Submit
        </button>
      </form>
    </div>
    </div>
    </section>
  );
}

export default Booking;
