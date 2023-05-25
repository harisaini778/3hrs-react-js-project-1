import CardElement from "./CardElement";
import React, { useState, useEffect } from "react";
import WaiterFormData from "./WaiterFormData";

const WaiterForm = () => {
  const [formData, setFormData] = useState({
    OrderId: "0",
    price: "0",
    dish: "0",
    table: "Table-1",
  });

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedTableData = localStorage.getItem(tableData.dish);
    if (storedTableData) {
      setTableData(JSON.parse(storedTableData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form is submitted");
    console.log(formData);
    const updatedTableData = [...tableData, formData];
    localStorage.setItem(tableData.dish, JSON.stringify(updatedTableData));
    setTableData(updatedTableData);
    setFormData({
      OrderId: "",
      price: "",
      dish: "",
      table: "Table-1",
    });
  };

  return (
    <>
      <CardElement>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="OrderId">Order Id : </label>
            <input
              id="OrderId"
              type="number"
              className="form-control"
              name="OrderId"
              value={formData.OrderId}
              onChange={handleChange}
            />

            <label htmlFor="price">Choose Price : </label>
            <input
              id="price"
              type="number"
              className="form-control"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />

            <label htmlFor="dish">Choose Dish : </label>
            <input
              id="dish"
              type="text"
              className="form-control"
              name="dish"
              value={formData.dish}
              onChange={handleChange}
            />

            <label htmlFor="table">Choose a table : </label>
            <input
              id="table"
              type="text"
              className="form-control"
              name="table"
              value={formData.table}
              onChange={handleChange}
            />

            <button className="btn btn-primary" type="submit">
              Add to the list
            </button>
          </div>
        </form>
      </CardElement>
      <WaiterFormData tableData={tableData} setTableData={setTableData} />
    </>
  );
};

export default WaiterForm;
