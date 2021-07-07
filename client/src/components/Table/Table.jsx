// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import SolveProblem from "../SolveProblem/SolveProblem";
// import "./Table.css";

// export default function Table(props) {
//   // console.log("TABLE", props.isDisabled);
//   // console.log(`show${props.tableNumber}`);

//   const showTableID = "show" + props.tableID;
//   const hideTableID = "hide" + props.tableID;

//   const [show1, setShow1] = useState(showTableID);
//   const [show2, setShow2] = useState(showTableID);
//   const [show3, setShow3] = useState(showTableID);
//   const [show4, setShow4] = useState(showTableID);
//   const [show5, setShow5] = useState(showTableID);

//   let theShow = `show${props.tableNumber}`;

//   // setInterval(() => {
//   //   if (props.showButton === false) {
//   //     setShow1(hideTableID);
//   //   }
//   //   console.log("second", props.showButton);
//   //   clearInterval(setInterval);
//   // }, 10000);

//   useEffect(() => {
//     // setTimeout(() => {
//     if (props.showButton1 === false) {
//       setShow1(hideTableID);
//     }
//     // console.log("second", props.showButton1);
//     if (props.showButton2 === false) {
//       setShow2(hideTableID);
//     }
//     if (props.showButton3 === false) {
//       setShow3(hideTableID);
//     }
//     if (props.showButton4 === false) {
//       setShow4(hideTableID);
//     }
//     if (props.showButton5 === false) {
//       setShow5(hideTableID);
//     }
//     // console.log("second", props.showButton);
//     // console.log("show", show1);
//     // }, 2000);
//   }, []);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     if (props.showButton === false) {
//   //       setShow1(hideTableID);
//   //     }
//   //     // console.log("SECOND Show Button", props.showButton);
//   //   }, 2500);
//   // }, []);

//   // setTimeout(() => {
//   //   console.log("second", props.isDisabled);
//   //   if (props.showButton === true) {
//   //     setShow1(hideTableID);
//   //   }
//   //   console.log("SECOND Show Button", props.showButton);
//   // }, 3500);

//   // console.log("show", `show${props.tableNumber}`);

//   return (
//     <div>
//       <Link to={`/register/${props.tableNumber}`}>
//         <h1 style={{ textAlign: "center" }}>Table {props.tableNumber}</h1>
//       </Link>

//       {props.table && (
//         <>
//           {props.table.seats.map((seat) => (
//             <>
//               {props.guests.map((guest) => (
//                 <>
//                   {guest.seat_id === seat.id && (
//                     <div className="theThing">
//                       <SolveProblem seatNum={seat.seat_number} guest={guest} />
//                     </div>
//                   )}
//                 </>
//               ))}
//             </>
//           ))}
//         </>
//       )}
//       {props.tableNumber === "1" && (
//         <>
//           {show1 === "show1" ? (
//             <button className={show1}>Join table: {props.tableNumber}</button>
//           ) : (
//             <p>TABLE IS FULL</p>
//           )}
//         </>
//       )}

//       {props.tableNumber === "2" && (
//         <>
//           {show2 === "show2" ? (
//             <button className={show2}>Join table: {props.tableNumber}</button>
//           ) : (
//             <p>TABLE IS FULL</p>
//           )}
//         </>
//       )}

//       {props.tableNumber === "3" && (
//         <>
//           {show3 === "show3" ? (
//             <button className={show3}>Join table: {props.tableNumber}</button>
//           ) : (
//             <p>TABLE IS FULL</p>
//           )}
//         </>
//       )}

//       {props.tableNumber === "4" && (
//         <>
//           {show4 === "show4" ? (
//             <button className={show4}>Join table: {props.tableNumber}</button>
//           ) : (
//             <p>TABLE IS FULL</p>
//           )}
//         </>
//       )}

//       {props.tableNumber === "5" && (
//         <>
//           {show5 === "show5" ? (
//             <button className={show5}>Join table: {props.tableNumber}</button>
//           ) : (
//             <p>TABLE IS FULL</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
