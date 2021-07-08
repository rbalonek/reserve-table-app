import React from "react";
import "./GuestList.css";
import { useHistory } from "react-router-dom";

export default function GuestList(props) {
  console.log("tables", props.tables);
  console.log("guests", props.guests);
  console.log("withGuest", props.tablesWithGuests);
  let history = useHistory();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Guest List</h1>
      <button onClick={() => history.goBack()}>BACK</button>

      <div className="list-holder">
        {props.tablesWithGuests.map((table) => (
          <>
            <div className="list-table__container">
              <h1>Table: {table.table_number}</h1>
              <p>
                Seats Left:{" "}
                <span style={{ color: "red" }}>
                  {table.seat_count - table.guests.length}
                </span>{" "}
              </p>

              {table.guests.map((guest) => (
                <>
                  <p>{guest.name}</p>
                  <p>{guest.email}</p>
                  <p>{guest.phone}</p>
                  <button
                    onClick={() => props.handleDelete(guest.id)}
                    className="btn warning"
                  >
                    DELETE
                  </button>
                  <hr />
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
