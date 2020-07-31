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
  console.log(dataSets[0]);
  return dataSets;
}

function readData(cb) {
	
	//const data = await d3.csv("data/daily.csv");
	d3.csv("data/daily.csv").then(function(data) {
	  // console.log(data[0]);

	  const dataSets = [];
	  const currentYear = +d3.timeFormat("%Y")(new Date());
	  const maxLimitForValue = 2000;
	  const minLimitForValue = 200;
	  const maximumModelCount = 10;
	
	  currdate = 0;
	  cases = [];
		for (let i = 0; i < data.length; i++) {

			if (currdate == 0) {
				currdate = data[i].date;
			}
			//console.log("Currdate=" + currdate + " date=" + data[i].date)
			if (currdate != data[i].date ) {
				
				dataSets.push({
				  date: parseInt(currdate),
				  dataSet: cases
				});
				cases = [];
				currdate = data[i].date;
				//console.log(dataSets);
			}

			cases.push({
				name:data[i].state,
				value: parseInt(data[i].positive)
			});
			
		}
		console.log("Created Datasets");
		console.log(dataSets);
		//cb(dataSets);
	 }
//  return dataSets;

	})
}

async function test() {
	const data = await d3.csv("data/daily.csv");
	console.log("Test");
	console.log(data);

}

