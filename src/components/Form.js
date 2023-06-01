import React from "react";

import { useState } from "react";


const labelStyles = {
  fontWeight: 'bold',
  marginLeft:'10px',
};

const Form = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [tableData, setTableData] = useState([]);
  const [viewTable, setViewTable] = useState(false);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTableData((prevData) => [...prevData, inputData]);
    setInputData({ name: "", email: "", number: "" });
  };
  const handleViewClick = () => {
    setViewTable(true);
  };
  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
        
        <h1>Form</h1>
        <label style={labelStyles}>User Name:</label>
        <input
          type="text"
          value={inputData.name}
          name="name"
          placeholder="Name"
          onChange={handleOnChange}
          className="input-field"
        />
        <br />
        <br />
        <label >Email:</label>
        <input
          type="text"
          value={inputData.email}
          name="email"
          placeholder="Email"
          onChange={handleOnChange}
          className="input-field"
        />
        <br />
        <br />
        <label style={labelStyles}>Contact Number:</label>
        <input
          type="number"
          value={inputData.number}
          name="number"
          placeholder="Number"
          onChange={handleOnChange}
          className="input-field"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleViewClick}>View</button>
</div>
<div className="container1">
{viewTable && (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
)}
    </div>
    </>
  );
};

export default Form;
