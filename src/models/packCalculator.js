const packCalculator = (packSizes, order) => {
  //takes in an array of pack sizes e.g. [5000, 2000, 250, 100] and an order volume e.g 3500
  const p = packSizes.sort((a, b) => a - b);
  let fulfillment = {};
  let i = p.length - 1;

  while (order > 0) {
    let breakpoint = Math.max(p[i] - p[0], p[i - 1]);
    if (order > breakpoint || i === 0) {
      fulfillment[p[i]] = fulfillment[p[i]] + 1 || 1;
      order -= p[i];
    } else {
      i--;
    }
  }
  console.log(fulfillment);
  return fulfillment;
};


export default packCalculator;
