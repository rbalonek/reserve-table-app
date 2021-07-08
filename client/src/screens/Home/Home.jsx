import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  let history = useHistory();

  const goToGuestList = () => {
    history.push("/guestlist");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Reserve a Table App</h1>

      <div>
        <button className="guest-list-button" onClick={goToGuestList}>
          Guest List Info
        </button>
      </div>

      <div className="home__table-holder">
        {props.tablesWithGuests.map((table) => (
          <div className="table__container">
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
              </>
            ))}

            {table.guests.length < table.seat_count ? (
              <button
                onClick={() => history.push(`/register/${table.table_number}`)}
                className="register__btn"
              >
                Register
              </button>
            ) : (
              <p className="register__full">Table is full</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
