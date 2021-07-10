import React from "react";
import "./GuestList.css";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(50),
      // height: theme.spacing(36),
      height: "fit-content",
    },
  },
}));

export default function GuestList(props) {
  // console.log("tables", props.tables);
  // console.log("guests", props.guests);
  // console.log("withGuest", props.tablesWithGuests);
  let history = useHistory();
  const classes = useStyles();

  return (
    <div className="guest-list__container">
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.goBack()}
      >
        BACK
      </Button>
      <div className={classes.root}>
        <Paper elevation={3}>
          {props.tablesWithGuests.map((table) => (
            <>
              <div className="list-table__container">
                <h1
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "0px",
                    backgroundColor: "black",
                    color: "white",
                    opacity: "90%",
                    marginTop: "-0px",
                    zIndex: "999",
                  }}
                >
                  Table: {table.table_number}
                </h1>
                <p style={{ textAlign: "center" }}>
                  Seats Left:{" "}
                  <span style={{ color: "red" }}>
                    {table.seat_count - table.guests.length}
                  </span>{" "}
                </p>
                <Paper style={{ padding: "20px" }} elevation={3}>
                  {table.guests.map((guest) => (
                    <>
                      {props.tables.map((table) => (
                        <>
                          {table.seats.map((seat) => (
                            <>
                              {seat.id === guest.seat_id && (
                                <p>Seat {seat.seat_number}</p>
                              )}
                            </>
                          ))}
                        </>
                      ))}

                      <p>{guest.name}</p>
                      <p>{guest.email}</p>
                      <p>{guest.phone}</p>
                      <Button
                        onClick={() => props.handleDelete(guest.id)}
                        variant="contained"
                        color="secondary"
                      >
                        DELETE GUEST
                      </Button>
                    </>
                  ))}
                </Paper>
              </div>
            </>
          ))}
        </Paper>
      </div>
    </div>
  );
}

// <div style={{ textAlign: "center" }}>
//       <h1>Guest List</h1>
// <button className="btn primary" onClick={() => history.goBack()}>
//   BACK
// </button>

//       <div className="list-holder">
// {props.tablesWithGuests.map((table) => (
//   <>
//     <div className="list-table__container">
//       <h1>Table: {table.table_number}</h1>
//       <p>
//         Seats Left:{" "}
//         <span style={{ color: "red" }}>
//           {table.seat_count - table.guests.length}
//         </span>{" "}
//       </p>

//       {table.guests.map((guest) => (
//         <>
//           {props.tables.map((table) => (
//             <>
//               {table.seats.map((seat) => (
//                 <>
//                   {seat.id === guest.seat_id && (
//                     <p>Seat {seat.seat_number}</p>
//                   )}
//                 </>
//               ))}
//             </>
//           ))}
//           <p>{guest.name}</p>
//           <p>{guest.email}</p>
//           <p>{guest.phone}</p>
//           <button
//             onClick={() => props.handleDelete(guest.id)}
//             className="btn warning"
//           >
//             DELETE
//           </button>
//           <hr />
//         </>
//       ))}
//     </div>
//   </>
// ))}
//       </div>
//     </div>
