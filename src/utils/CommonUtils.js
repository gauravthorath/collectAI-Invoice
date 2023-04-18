//Fucntion to display fixed lenght of text in description and then trim it if exceeds
export default function trimString(str) {
  const maxLength = 70;
  if (str.length > maxLength) {
    const trimmedString = str.substring(0, maxLength) + "...";
    return <span title={str}>{trimmedString}</span>;
  } else {
    return str;
  }
}
//Function to get vat percentages
export function getVATPercents() {
  return 19;
}

//fucntion to convert currency to perticular format
export const formatNumber = (ammount) => {
  return ammount.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
};
