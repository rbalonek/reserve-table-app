import React from "react";
import "./SimpleCard.css";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    margin: 20,
    // boxShadow: 3,
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  let history = useHistory();

  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      // style={{
      //   borderStyle: "solid",
      //   borderWidth: "6px",
      //   borderColor: "rgb(69,150,243)",
      // }}
      className={classes.root}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Seats Available:
          <span style={{ color: "red" }}>
            {props.table.seat_count - props.table.guests.length}
          </span>
        </Typography>
        <Typography variant="h5" component="h2">
          Table:{props.table.table_number}
        </Typography>

        {props.table.guests.map((guest) => (
          <>
            <Typography className={classes.pos} color="textSecondary">
              {guest.name}
            </Typography>
          </>
        ))}
        {props.table.guests.length < props.table.seat_count ? (
          <CardActions>
            <Button
              onClick={() =>
                history.push(`/register/${props.table.table_number}`)
              }
              size="large"
            >
              <span style={{ color: "blue" }}>Reserve</span>
            </Button>
          </CardActions>
        ) : (
          <div>
            <CardActions style={{ justifyContent: "center" }}>
              <Button size="large">
                <span style={{ color: "red" }}>Table Full</span>
              </Button>
            </CardActions>
          </div>
        )}
      </CardContent>
      <div style={{ display: "flex" }}></div>
    </Card>
  );
}

// <div className="home__table-holder">

// {props.tablesWithGuests.map((table) => (
//         <div>
//           <h1>Table: {table.table_number}</h1>
//           <p>
//             Seats Left:{" "}
//             <span style={{ color: "red" }}>
//               {table.seat_count - table.guests.length}
//             </span>{" "}
//           </p>
//           {table.guests.map((guest) => (
//             <>
//               <p>{guest.name}</p>
//             </>
//           ))}
//           {table.guests.length < table.seat_count ? (
//             <button
//               onClick={() => history.push(`/register/${table.table_number}`)}
//               className="register__btn"
//             >
//               Register
//             </button>
//           ) : (
//             <p className="register__full">Table is full</p>
//           )}
//         </div>
// ))}

//     </div>
