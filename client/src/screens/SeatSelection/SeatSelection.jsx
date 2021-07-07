import React, { useState, useEffect } from "react";
import "./SeatSelection.css";
import { Link } from "react-router-dom";

// import SolveProblem from "../../components/SolveProblem/SolveProblem";
import Table from "../../components/Table/Table";

export default function SeatSelection(props) {
  // console.log("ONE", props.tableOneArr.length);
  // console.log("TWO", props.tableTwoArr);
  // console.log("Three", props.tableThreeArr);
  // console.log("Four", props.tableFourArr);
  // console.log("Five", props.tableFiveArr);

  // const [showButton, setShowButton] = useState(true);

  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabledTwo, setIsDisabledTwo] = useState("two");

  // useEffect(() => {
  //   console.log("firstArr", props.tableOneArr.length);

  //   setTimeout(() => {
  //     if (props.tableOneArr.length > 1) {
  //       setShowButton(false);
  //     }
  //     console.log("SecondArr", props.tableOneArr.length);
  //     console.log("First Show Button", showButton);
  //   }, 2000);
  // }, []);

  // if (props.tableOneArr.length > 1) {
  //   setShowButton(false);
  // }

  // console.log(props.tableOneArr.length);

  // <a href="javascript: void(0)">I am a useless link</a>

  // style={{ pointerEvents: "none" }}
  // pointerEvents: all;

  // console.log(props.tables[0]);

  // console.log(props.tableOneArr);

  console.log("first", props.showButton);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Selection</h1>

      {props.tables.map((table) => (
        <>
          <Table
            // isDisabled={`isDisabled${table.id}`}
            tableNumber={table.table_number}
            showButton1={props.showButton1}
            showButton2={props.showButton2}
            showButton3={props.showButton3}
            showButton4={props.showButton4}
            showButton5={props.showButton5}
            tableID={table.id}
            // tableID={props.tables[0].id}
            table={table}
            guests={props.guests}
          />
        </>
      ))}
    </div>
  );
}

// <Table
// isDisabled={isDisabledOne}
// tableNumber={1}
// showButton={showButton}
// tableID="1"
// // tableID={props.tables[0].id}
// table={props.tables[0]}
// guests={props.guests}
// />

// {guest.name && (
//   <>
//     <h3 style={{ textAlign: "center" }}>
//       Seat: {guest.seat_number}
//     </h3>
//     <p style={{ textAlign: "center", color: "black" }}>
//       {guest.name}
//     </p>
//   </>
// )}
