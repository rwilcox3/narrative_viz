//import "./styles.css";
//import { generateDataSets } from "./dataGenerator";
//import { BarChartRace } from "./BarChartRace";

//import { select as d3Select } from "d3";

const myChart = new BarChartRace("bar-chart-race");
console.log(readData()[20]);

myChart
  .setTitle("U.S Covid Cases by State")
  .addDatasets(readData())
  .render();
//  .addDatasets(generateDataSets({ size: 5 }))

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
