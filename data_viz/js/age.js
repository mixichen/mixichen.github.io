
// set the dimensions and margins of the graph
var margin = {top: 30, right: 90, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#age_viz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
//d3.csv("https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vQguzpie6FIAhbH2rlxIXS9pSz0rjqiRZbA2gkTqc893yCUyMUgDv34Txh5jrZvff9E9V6eGd6gejS0/pub?output=csv", function(data) {


/*load data*/
var table = [
   {age: "<18", number: 125},
   {age: "18-24", number: 293},
   {age: "25-34", number: 184},
   {age: "35-44", number: 93},
   {age: ">45", number: 42},
   {age: "missing", number: 34},

];

console.log(table);

var xAxis = d3.scaleBand()
  .range([ 0, width ])
  .domain(table.map(function(d) { return d.age; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xAxis))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")

svg.selectAll("path")
      .style("stroke", "white")


// Add Y axis
var yAxis = d3.scaleLinear()
  .domain([0, 300])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(yAxis))
  .selectAll("path")
      .style("stroke", "white");

// Add X axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 20)
    .style("fill", "white")
    .text("Age");


// Y axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left+20)
    .attr("x", -margin.top)
    .style("fill", "white")
    .text("Number of People")

// Customization
  svg.selectAll(".tick line").attr("stroke", "white")
  svg.selectAll(".tick text").attr("fill", "white")

  // Color scale: give me a specie name, I return a color
  var color = d3.scaleOrdinal()
    .domain(["<18", "18-24", "25-34", "35-44", ">45", "missing"])
    .range([ "#AA4949", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"])

var tooltip = d3.select("#age_viz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("padding", "10px")

  // A function that change this tooltip when the user hover a point.
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
  }

  var mousemove = function(d) {
    tooltip
      .html(d.number + " people with age " +d.age + " were hospitalized <br>for lung injury associated with e-cigarette use, <br> or vaping.")
  }

  // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 1)
  }


function AnimeIn(){
// Bars
svg.selectAll("mybar")
  .data(table)
  .enter()
  .append("rect")
    .attr("x", function(d) { return xAxis(d.age); })
    .attr("y", function(d) { return yAxis(d.number); })
    .attr("width", xAxis.bandwidth())
    .attr("height", function(d) { return height - yAxis(d.number); })
    .style("fill", function (d) { return color(d.age) } )
    .style("opacity", 0.8)
  .on("mouseover", mouseover)
  .on("mousemove", mousemove)
  .on("mouseleave", mouseleave)
         // no bar at the beginning thus:
    .attr("height", function(d) { return height - yAxis(0); }) // always equal to 0
    .attr("y", function(d) { return yAxis(0); });

// Animation

  svg.selectAll("rect")
    .transition()
    .duration(800)
    .attr("y", function(d) { return yAxis(d.number); })
    .attr("height", function(d) { return height - yAxis(d.number); })
    .delay(function(d,i){console.log(i) ; return(i*100)})

};

