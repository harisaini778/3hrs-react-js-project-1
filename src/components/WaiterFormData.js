import React, { useState } from "react";
import CardElement from "./CardElement";

const WaiterFormData = (props) => {
  const { data } = props;
  const [updatedData, setUpdatedData] = useState(data);
  const [timerId, setTimerId] = useState(null);

  const handleInputChange = (event) => {
    clearTimeout(timerId);
    const { name, value } = event.target;
    const updatedValue = { ...updatedData, [name]: value };
    const newTimerId = setTimeout(() => {
      setUpdatedData(updatedValue);
    }, 500); // Adjust the delay duration as needed (in milliseconds)
    setTimerId(newTimerId);
  };

  const handleDeleteChange = () => {
    // Handle delete logic here
  };

  return (
    <CardElement>
      <div>
        <h1>Table-1</h1>
        {updatedData &&
          updatedData
            .filter((tableData) => tableData.table === "Table-1")
            .map((tableData) => (
              <ul key={tableData.OrderId} type="none">
                <li>Order Id: {tableData.OrderId}</li>
                <li>Price: {tableData.price}</li>
                <li>Dish: {tableData.dish}</li>
                <li>Table: {tableData.table}</li>
                <button
                  className="btn btn-danger"
                  onClick={handleDeleteChange}
                >
                  Delete Order
                </button>
              </ul>
            ))}
      </div>
      <div>
        <h1>Table-2</h1>
        {updatedData &&
          updatedData
            .filter((tableData) => tableData.table === "Table-2")
            .map((tableData) => (
              <ul key={tableData.OrderId} type="none">
                <li>Order Id: {tableData.OrderId}</li>
                <li>Price: {tableData.price}</li>
                <li>Dish: {tableData.dish}</li>
                <li>Table: {tableData.table}</li>
                <button
                  className="btn btn-danger"
                  onClick={handleDeleteChange}
                >
                  Delete Order
                </button>
              </ul>
            ))}
      </div>
      <div>
        <h1>Table-3</h1>
        {updatedData &&
          updatedData
            .filter((tableData) => tableData.table === "Table-3")
            .map((tableData) => (
              <ul key={tableData.OrderId} type="none">
                <li>Order Id: {tableData.OrderId}</li>
                <li>Price: {tableData.price}</li>
                <li>Dish: {tableData.dish}</li>
                <li>Table: {tableData.table}</li>
                <button
                  className="btn btn-danger"
                  onClick={handleDeleteChange}
                >
                  Delete Order
                </button>
              </ul>
            ))}
      </div>
      <input
        type="text"
        name="exampleField"
        value={updatedData.exampleField || ""}
        onChange={handleInputChange}
      />
    </CardElement>
  );
};

export default WaiterFormData;
