import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function RegistarTest(props) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seat_id: "",
  });

  const { name, email, phone, seat_id } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { [name]: value };
    setFormData((formData) => {
      console.log(formData);
      return { ...formData, ...newData };
    });
  };

  return (
    <div>
      <form
        // className="add-student__form"
        onSubmit={(e) => {
          e.preventDefault();
          props.createSubmit(formData);
          history.push("/");
          // alert("registered!");
        }}
      >
        <h1>Register</h1>

        <label>
          name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          phone:
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Seat:
          <select
            // className="add-student__sensei-dropdown"
            name="seat_id"
            type="number"
            value={seat_id}
            onChange={handleChange}
          >
            <option selected="selected">--</option>
            <option type="number" value="8">
              8
            </option>
            <option type="number" value="9">
              9
            </option>
            <option type="number" value="10">
              10
            </option>
          </select>
        </label>

        <button className="btn primary">Submit</button>
      </form>
    </div>
  );
}

// <select
//           // className="add-student__sensei-dropdown"
// name="seat_id"
// type="number"
// value={seat_id}
// onChange={handleChange}
//         >
//           <option selected="selected">--</option>
//           <option type="number" value="8">
//             8
//           </option>
//           <option type="number" value="9">
//             9
//           </option>
//           <option type="number" value="10">
//             10
//           </option>
//         </select>
