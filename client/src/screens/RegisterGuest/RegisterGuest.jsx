import React, { useState, useEffect } from "react";
import "./RegisterGuest.css";
import { useParams, useHistory } from "react-router-dom";

import { getAllSeatsAtTable } from "../../services/seats.js";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function RegisterGuest(props) {
  const classes = useStyles();
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

  // console.log(seats[0].table.table_number);

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
      <div
        style={
          {
            // display: "flex",
            // justifyContent: "space-around",
            // marginBottom: "10px",
          }
        }
      >
        <Button variant="contained" color="secondary" onClick={goBack}>
          BACK
        </Button>
      </div>

      <form
        className="add-guest__form "
        // className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          props.createSubmit(formData);
          history.push("/");
          window.location.reload();
        }}
      >
        {seats.length && (
          <h1 className="table__number">Table {seats[0].table.table_number}</h1>
        )}
        <TextField
          value={name}
          onChange={handleChange}
          type="text"
          id="standard-basic"
          label="Name"
          variant="outlined"
          name="name"
        />

        <TextField
          type="text"
          value={email}
          onChange={handleChange}
          id="filled-basic"
          label="Email"
          // variant="filled"
          variant="outlined"
          name="email"
        />

        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          type="text"
          value={phone}
          onChange={handleChange}
          name="phone"
        />

        <label>Seat: </label>

        <TextField
          id="standard-select-currency"
          select
          label="Select"
          name="seat_id"
          type="number"
          value={seat_id}
          onChange={handleChange}
          // helperText="Please select your currency"
        >
          {SeatsAvailable.map((seat) => (
            <MenuItem
              onChange={handleChange}
              name="seat_id"
              value={seat}
              type="number"
              key={seat}
            >
              {seat}
            </MenuItem>
          ))}
        </TextField>
        <div style={{ position: "relative", top: "10px" }}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
