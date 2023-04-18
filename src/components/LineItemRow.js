import React, { useState } from "react";
import trimString, { formatNumber } from "../utils/CommonUtils";
import { FaEdit } from "react-icons/fa";

function LineItemRow(props) {
  const { lineItem, index, onEdit } = props;
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(lineItem.description);
  const [price, setPrice] = useState(lineItem.price);

  //to start editing the description and price liline
  const handleEdit = () => {
    setEditing(true);
  };

  // To save edited values in state
  const handleSave = (event) => {
    event.preventDefault();
    if (typeof onEdit === "function") {
      onEdit(index, "description", description);
      onEdit(index, "price", price);
    }
    setEditing(false);
  };

  //To cancel edit mode and see it in readonly mode again
  const handleCancel = () => {
    setEditing(false);
    setDescription(lineItem.description);
    setPrice(lineItem.price);
  };

  return (
    <div className="table-row">
      {editing ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <div className="first">{trimString(lineItem.description)}</div>
          <div className="col">{formatNumber(lineItem.price)}</div>
          <div className="col" onClick={handleEdit}>
            <FaEdit size={20} />
          </div>
        </>
      )}
    </div>
  );
}

export default LineItemRow;
