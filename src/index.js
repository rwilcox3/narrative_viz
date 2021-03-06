//import "./styles.css";
//import { generateDataSets } from "./dataGenerator";
//import { BarChartRace } from "./BarChartRace";

//import { select as d3Select } from "d3";

const myChart = new BarChartRace("bar-chart-race");
var junk;
readData(start_chart);
console.log(junk);
test();
//console.log(junk);
//junk = generateDataSets({ size: 5 })
//console.log(junk);

myChart
  .setTitle("U.S Covid Cases by State")
//  .addDatasets(generateDataSets({ size: 5 }))
//  .addDatasets(readData())
//  .render();

d3.select("button").on("click", function() {
  if (this.innerHTML === "Stop") {
    this.innerHTML = "Resume";
    myChart.stop();
  } else if (this.innerHTML === "Resume") {
    this.innerHTML = "Stop";
    myChart.start();
  } else {
    this.innerHTML = "Stop";
    myChart.render();
  }
});

function start_chart(data) {
	
	console.log("Starting Chart");
	console.log(data[20]);
  myChart.addDatasets(data)
  .render();
}	

