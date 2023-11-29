const PerDescount = ({ price, Percentage }) => {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
  }).format(price * (1 - Percentage / 100) * 100);
};
export default PerDescount;
