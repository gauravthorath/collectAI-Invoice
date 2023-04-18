import { formatNumber, getVATPercents } from "../utils/CommonUtils";

// InvoiceFooter Component
function InvoiceFooter({ lineItems }) {
  // function to get VAT percentage from util file - in future can be fetched from Database
  const VAT = getVATPercents();

  // calculation for subtotal 
  const subTotal = lineItems.reduce((total, item) => total + item.price, 0);
  return (
    <div className="header-row">
      {/* Added subtotal for better understaning, as we have total again with VAT included in it */}
      <div className="subtotal-row row-margin">
        Subtotal: {formatNumber(subTotal)}
      </div>
      {/* done VAT calculations here */}
      <div className="vat-row">
        VAT ({`${VAT}%`}) : {formatNumber((subTotal * VAT) / 100)}
      </div>
       {/* Grand total goes here */}
      <div className="total-row">
        Total: {`${formatNumber(subTotal + VAT)}`}
      </div>
    </div>
  );
}

export default InvoiceFooter;
