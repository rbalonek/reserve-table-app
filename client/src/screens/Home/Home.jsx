import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  console.log("tables", props.tables);
  console.log("guests", props.guests);
  console.log("withGuest", props.tablesWithGuests);

  let history = useHistory();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tables</h1>
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
// <div className="home__table-holder">
// {props.tables.map((table) => (
//   <div className="table__container">
//     <h1>Table: {table.table_number}</h1>
//     <p>
//       Seats Left:{" "}
//       <span style={{ color: "red" }}>{5 - table.guests.length}</span>
//     </p>
// {table.guests.map((guest) => (
//   <>
//     {props.seats}
//     <p>{guest.name}</p>
//   </>
// ))}

//     {table.guests.length < 5 ? (
//       <button
//         onClick={() => history.push(`/register/${table.table_number}`)}
//         className="register__btn"
//       >
//         Register
//       </button>
//     ) : (
//       <p className="register__full">Table is full</p>
//     )}
//   </div>
// ))}
// </div>
