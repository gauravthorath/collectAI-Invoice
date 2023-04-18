import React, { useState, useEffect } from "react";
import InvoiceHeader from "./components/InvoiceHeader";
import LineItemTable from "./components/LineItemTable";
import InvoiceFooter from "./components/InvoiceFooter";
import defaultInvoice from "./data/invoice.json";
import JsonDropzone from "./components/JsonDropzone";

function App() {
  const [invoiceData, setInvoiceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //to get json data on load from invoice.json
  const getData = () => {
    setInvoiceData(defaultInvoice);
  };

  // Call back to get json data from droped file
  const handleJsonDrop = (jsonData) => {
    setInvoiceData(jsonData);
  };

  useEffect(() => {
    setIsLoading(false);
    getData();
  }, []);

  //when data is not available shown loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <InvoiceHeader invoiceData={invoiceData} />
      <LineItemTable lineItems={invoiceData.lineItems} />
      <InvoiceFooter lineItems={invoiceData.lineItems} />
      <div className="break"></div>
      <JsonDropzone onJsonDrop={handleJsonDrop} />
    </div>
  );
}

export default App;
