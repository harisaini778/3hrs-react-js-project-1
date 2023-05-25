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
      .map((tableData) => (<CardElement>
        <ul key={tableData.OrderId} type="none">
          <li>Order Id: {tableData.OrderId}</li>
          <li>Price: {tableData.price}</li>
          <li>Dish: {tableData.dish}</li>
          <li>Table: {tableData.table}</li>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteChange(tableData.OrderId)}
          >
            Delete Order
          </button>
        </ul>
        </CardElement>
      ));
  };

  return (
    <CardElement>
      <div>
        <h1>Table-1</h1>
        {renderTableData("Table-1")}
      </div>
      <div>
        <h1>Table-2</h1>
        {renderTableData("Table-2")}
      </div>
      <div>
        <h1>Table-3</h1>
        {renderTableData("Table-3")}
      </div>
    </CardElement>
  );
};

export default WaiterFormData;
