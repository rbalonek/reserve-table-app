import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { getAllTables, getAllTablesWithGuests } from "../services/tables.js";
import { getAllGuests, postGuest } from "../services/guests.js";

import { getAllSeatsAtTable, getOneSeatAtTable } from "../services/seats.js";

import Home from "../screens/Home/Home";
import RegistarTest from "../screens/RegistarTest/RegistarTest.jsx";
import RegisterGuest from "../screens/RegisterGuest/RegisterGuest.jsx";
// import SeatSelection from "../screens/SeatSelection/SeatSelection.jsx";

export default function MainContainer() {
  const [tables, setTables] = useState([]);
  const [tablesWithGuests, setTableWithGuests] = useState([]);
  const [guests, setGuests] = useState([]);
  // const [takenSeats, setTakenSeats] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const fetchTables = async () => {
      const tableArray = await getAllTables();
      setTables(tableArray);
    };
    const fetchGuests = async () => {
      const guestArray = await getAllGuests();
      setGuests(guestArray);
    };
    const fetchTablesWithGuests = async () => {
      const tableArray = await getAllTablesWithGuests();
      setTableWithGuests(tableArray);
    };
    fetchTablesWithGuests();
    fetchTables();
    fetchGuests();
  }, []);

  const createSubmit = async (formData) => {
    const newGuest = await postGuest(formData);
    setGuests((prevState) => [...prevState, newGuest]);
    alert("Thanks, you've been added!");
    history.push("/");
    // window.location.reload();
  };

  // console.log("tables", tables);
  // console.log("guests", guests);

  return (
    <Switch>
      <Route path="/register/:id">
        <RegisterGuest
          createSubmit={createSubmit}
          tables={tables}
          guests={guests}
          tablesWithGuests={tablesWithGuests}
        />
      </Route>
      <Route path="/">
        <Home
          tablesWithGuests={tablesWithGuests}
          tables={tables}
          guests={guests}
        />
      </Route>
    </Switch>
  );
}
