import { useState } from "react";
import LineItemRow from "./LineItemRow";

function LineItemTable({ lineItems }) {
  const [editableLineItems, setEditableLineItems] = useState(lineItems);

  function handleLineItemChange(index, field, value) {
    const newLineItems = [...editableLineItems];
    newLineItems[index][field] = value;
    setEditableLineItems(newLineItems);
  }

  const lineItemRows = editableLineItems.map((lineItem, index) => {
    return (
      <LineItemRow
        key={index}
        lineItem={lineItem}
        index={index}
        onEdit={handleLineItemChange}
      />
    );
  });

  return (
    <div>
      <div className="header line-item-table">
        <div className="first">Item</div>
        <div className="col">Price</div>
        <div className="col">Action</div>
      </div>
      <div>{lineItemRows}</div>
    </div>
  );
}

export default LineItemTable;
