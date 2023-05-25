import React from "react";
import CardElement from "./CardElement";

const WaiterFormData = (props) => {
  const { tableData, setTableData } = props;

  const handleDeleteChange = (orderId) => {
    const updatedTableData = tableData.filter((tableData) => tableData.OrderId !== orderId);
    localStorage.setItem(tableData.dish, JSON.stringify(updatedTableData));
    setTableData(updatedTableData);
  };

  const renderTableData = (table) => {
    return tableData
      .filter((tableData) => tableData.table === table)
      .map((tableData) => (<div className="card text-dark" style={{backgroundColor:"gold",fontFamily:"intial"}}>
        <ul key={tableData.OrderId} type="none" style={{textAlign:"start",marginTop:"15px"}}>
          <li>Order Id: {tableData.OrderId}</li>
          <li>Price: {tableData.price}</li>
          <li>Dish: {tableData.dish}</li>
          <li>Table: {tableData.table}</li>
          <br/>
          <button
            className="btn btn-dark text-light"
            onClick={() => handleDeleteChange(tableData.OrderId)}
          style={{textAlign:"center"}}>
            Delete Order
          </button>
        </ul>
        </div>
      ));
  };

  return (
    <CardElement>
      <div className="card" style={{backgroundColor:"gold",fontFamily:"fantasy"}}>
        <h2 style={{textAlign:"center"}}>Table-1</h2>
        {renderTableData("Table-1")}
      </div>
      <div className="card" style={{backgroundColor:"gold",fontFamily:"fantasy"}}>
        <h2 style={{textAlign:"center"}}>Table-2</h2>
        {renderTableData("Table-2")}
      </div>
      <div className="card" style={{backgroundColor:"gold",fontFamily:"fantasy"}}>
        <h2 style={{textAlign:"center"}}>Table-3</h2>
        {renderTableData("Table-3")}
      </div>
    </CardElement>
  );
};

export default WaiterFormData;
