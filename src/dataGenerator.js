//import { timeFormat } from "d3";

const brands = [
  "Alcatel",
  "Apple",
  "Google",
  "Huawei",
  "LG",
  "Motorola",
  "Nokia",
  "Razer",
  "Samsung",
  "Xiaomi",
  "HTC",
  "Sony",
  "BlackBerry",
  "Palm",
  "ZTE",
  "Oppo",
  "Lenovo"
];

const states = [
"AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MP","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"
];

function generateDataSets({ size = 1 }) {
  const dataSets = [];
  const currentYear = +d3.timeFormat("%Y")(new Date());
  const maxLimitForValue = 2000;
  const minLimitForValue = 200;
  const maximumModelCount = 10;

  for (let i = 0; i < size; i++) {
    dataSets.push({
      date: currentYear - (size - (i + 1)),
      dataSet: brands
        .sort(function() {
          return Math.random() - 0.5;
        })
        .slice(0, maximumModelCount)
        .map(brand => ({
          name: brand,
          value:
            Math.random() * (maxLimitForValue - minLimitForValue) +
            minLimitForValue
        }))
    });
  }
  console.log("Created Datasets");
  console.log(dataSets[0];
  return dataSets;
}

function readData() {
	
	d3.csv("data/covid.csv").then(function(data) {
	  console.log(data[0]);

	  const dataSets = [];
	  const currentYear = +d3.timeFormat("%Y")(new Date());
	  const maxLimitForValue = 2000;
	  const minLimitForValue = 200;
	  const maximumModelCount = 10;

	  for (let i = 0; i < size; i++) {
		dataSets.push({
		  date: data.date,
		  dataSet: states
			.sort(function() {
			  return Math.random() - 0.5;
			})
			.slice(0, maximumModelCount)
			.map(states => ({
			  name: data.state,
			  value: data.positive
			}))
		});
	  }
  console.log("Created Datasets");
  return dataSets;

	})
}

