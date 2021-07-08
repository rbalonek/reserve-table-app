import React, { useState, useEffect } from "react";
import "./RegisterGuest.css";
import { useParams, useHistory } from "react-router-dom";

import { getAllSeatsAtTable } from "../../services/seats.js";

export default function RegisterGuest(props) {
  const { id } = useParams();

  let history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seat_id: "",
  });

  const goBack = () => {
    history.goBack();
  };

  const { name, email, phone, seat_id } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { [name]: value };
    setFormData((formData) => {
      console.log(formData);
      return { ...formData, ...newData };
    });
  };

  const [seats, setSeats] = useState([]);

  let seatsForTable = [];
  let takenSeats = [];

  useEffect(() => {
    const fetchSeatsAtTable = async (id) => {
      const seatArray = await getAllSeatsAtTable(id);
      setSeats(seatArray);
    };

    fetchSeatsAtTable(id);
  }, [id]);

  const getSeatIDs = () => {
    for (let i = 0; i < seats.length; i++) {
      seatsForTable.push(seats[i].id);
    }
  };
  getSeatIDs();

  const takenSeatIDs = () => {
    for (let i = 0; i < props.guests.length; i++) {
      takenSeats.push(props.guests[i].seat_id);
    }
  };
  takenSeatIDs();

  const filteredArray = takenSeats.filter((value) =>
    seatsForTable.includes(value)
  );

  let SeatsAvailable = seatsForTable.filter(
    (el) => !filteredArray.includes(el)
  );

  return (
    <div className="register-guest__container">
      <form
        className="add-guest__form"
        onSubmit={(e) => {
          e.preventDefault();
          props.createSubmit(formData);
          history.push("/");
          window.location.reload();
        }}
      >
        <h1>Register</h1>

        <label>
          name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          phone:
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </label>

        <label>Seat: </label>
        <select
          // className="add-student__sensei-dropdown"
          name="seat_id"
          type="number"
          value={seat_id}
          onChange={handleChange}
        >
          <option selected="selected">--</option>

          {SeatsAvailable.map((seat) => (
            <>
              <option
                onChange={handleChange}
                name="seat_id"
                value={seat}
                type="number"
              >
                {seat}
              </option>
            </>
          ))}
        </select>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "50px",
          }}
        >
          <button className="btn secondary" onClick={goBack}>
            BACK
          </button>
          <button className="btn primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
