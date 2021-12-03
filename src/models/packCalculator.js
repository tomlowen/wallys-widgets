const packCalculator = (packSizes, order) => {
  //takes in an array of pack sizes e.g. [5000, 2000, 250, 100] and an order volume e.g 3500
  const p = packSizes.sort((a, b) => a - b).reverse();
  let fulfillment = {};
  let i = 0;

  while (order > 0) {
    if (order > p[i] - p[p.length - 1] || i === p.length - 1) {
      fulfillment[p[i]] = fulfillment[p[i]] + 1 || 1;
      order -= p[i];
    } else {
      i++;
    }
  }
  console.log(fulfillment);
  return fulfillment;
};

export default packCalculator;
