import "../App.css";

// Invoice header section
function InvoiceHeader({ invoiceData }) {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="cai_logo.svg" className="logoStyle" alt="logo" />
        </div>
        <div className="invoice-details">
          {/* As invoice Id was not present in data kept hardcoded, need to make it dynamic */}
          <span>
            Invoice #: 39291
            <br />
            <span>Created: {invoiceData.createdAt}</span>
            <br />
            <span>Due: {invoiceData.dueAt}</span>
          </span>
        </div>
      </div>

      <div className="break"></div>
      <div className="header">
        <div className="company-info">
          <span>collectAI GmbH.</span>
          <br />
          <span>20457 Hamburg</span>
          <br />
          <span>Hamburg, Germany</span>
        </div>

        <div className="customer-info">
          <div className="customer-name">
            <span>{invoiceData.company}</span>
            <br />
            <span>{invoiceData.fullName}</span>
            <br />
            <span>{invoiceData.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceHeader;
