import React, { useState } from "react";

function UseForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log(firstName);
  console.log(useState());
  console.log(setFirstName);
  const sumbithandler = (e) => {
    e.preventDefault();
    alert(`first name:${firstName}   Lastname:${lastName}`);
  };
  return (
    <div>
      <form onSubmit={sumbithandler}>
        <div>
          <label>First Name:</label>
          <input
            value={firstName}
            type="text"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            value={lastName}
            type="text"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <button>Sumbit</button>
      </form>
    </div>
  );
}

export default UseForm;
