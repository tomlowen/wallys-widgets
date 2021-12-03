const defaultPackSizes = [5000, 2000, 1000, 500, 250];

const packCalculator = (order, packSizes = defaultPackSizes) => {
  //takes in an array of pack sizes e.g. [5000, 2000, 250, 100] and an order volume e.g 3500
  const packs = packSizes.sort((a, b) => a - b);
  let fulfillment = {};
  let i = packs.length - 1;

  while (order > 0) {
    if (order > packs[i] - packs[0] || i === 0) {
      fulfillment[packs[i]] = fulfillment[packs[i]] + 1 || 1;
      order -= packs[i];
    } else {
      i--;
    }
  }
  console.log(fulfillment);
  return fulfillment;
};

export default packCalculator;
