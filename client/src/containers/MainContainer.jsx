import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { getAllTables, getAllTablesWithGuests } from "../services/tables.js";
import { getAllGuests, postGuest, deleteGuest } from "../services/guests.js";

import Home from "../screens/Home/Home";
import RegisterGuest from "../screens/RegisterGuest/RegisterGuest.jsx";
import GuestList from "../screens/GuestList/GuestList.jsx";

export default function MainContainer() {
  const [tables, setTables] = useState([]);
  const [tablesWithGuests, setTableWithGuests] = useState([]);
  const [guests, setGuests] = useState([]);

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
  };

  const handleDelete = async (id) => {
    await deleteGuest(id);
    setGuests((prevState) => prevState.filter((guest) => guest.ed !== id));
    window.location.reload();
  };

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

      <Route path="/guestlist">
        <GuestList
          tables={tables}
          guests={guests}
          tablesWithGuests={tablesWithGuests}
          handleDelete={handleDelete}
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
