//import { timeFormat } from "d3";

const brands = [
  "Apple",
  "Google",
  "Huawei",
  "LG",
  "Motorola",
  "Nokia",
  "Razer",
  "Samsung"
];
// There is no export here stop saying what is there is not there
 function generateDataSets({ size = 1 } ) {
  const bobguy = 1;
  const dataSets = [];
  const currentYear = +d3.timeFormat("%Y")(new Date());
  const maxLimitForValue = 2000;
  const minLimitForValue = 200;

  for (let i = 0; i < size; i++) {
    dataSets.push({
      date: currentYear - (size - (i + 1)),
      dataSet: brands.map(brand => ({
        name: brand,
        value:
          Math.random() * (maxLimitForValue - minLimitForValue) +
          minLimitForValue
      }))
    });
  }

  return dataSets;
}
