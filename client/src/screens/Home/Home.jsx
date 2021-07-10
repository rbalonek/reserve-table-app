import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import SimpleCard from "../../components/SimpleCard/SimpleCard";

export default function Home(props) {
  let history = useHistory();

  const goToGuestList = () => {
    history.push("/guestlist");
  };

  return (
    <div
      style={{
        textAlign: "center",
        // backgroundColor: "grey",
        minHeight: "100vh",
      }}
    >
      {props.tablesWithGuests.length ? (
        <>
          <div>
            <Button
              variant="contained"
              color="primary"
              // className="guest-list-button"
              onClick={goToGuestList}
            >
              Guest List Info
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              position: "relative",
              // top: "50px",
            }}
          >
            {props.tablesWithGuests.map((table) => (
              <SimpleCard
                table={table}
                tables={props.tables}
                tablesWithGuests={props.tablesWithGuests}
                guests={props.guests}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>LOADING...</h1>
          <p>Waking up database (30-45 seconds)</p>
        </>
      )}
    </div>
  );
}
