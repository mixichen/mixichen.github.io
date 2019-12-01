
// set the dimensions and margins of the graph
var margin = {top: 50, right: 30, bottom: 100, left: 180},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#substances_viz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


/*load data*/

var data = [
   {substances: "THC-containing products", number: 395},
   {substances: "Nicotine-containing products", number: 292},
   {substances: "Flavored e-liquids", number: 102},
   {substances: "Cannabidiol (CBD)", number: 89},
   {substances: "Synthetic cannabinoids", number: 4},
];



  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 400])
    .range([ 2, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

svg.selectAll("path")
      .style("stroke", "white")

// Y axis
  var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data.map(function(d) { return d.substances; }))
    .padding(.1);
  svg.append("g")
    .call(d3.axisLeft(y))
    .selectAll("path")
      .style("stroke", "white");


// Add X axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 20)
    .style("fill", "white")
    .text("Number of People");


svg.append("text")
        .attr("x", (width / 2)-70)             
        .attr("y", -20)
        .attr("text-anchor", "middle")  
        .style("font-size", "15px") 
        .style("fill", "white")
        .text("Substances used in e-cigarette, or vaping, products (n = 514)");

 // Color scale: give me a specie name, I return a color
  var color = d3.scaleOrdinal()
    .domain(["THC-containing products","Nicotine-containing products","Flavored e-liquids","Cannabidiol (CBD)","Synthetic cannabinoids"])
    .range([ "#AA4949", "#ffffff", "#ffffff", "#ffffff", "#ffffff"])
// Customization
  svg.selectAll(".tick line").attr("stroke", "white")
  svg.selectAll(".tick text").attr("fill", "white")

 //Bars
  svg.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.substances); })
    .attr("width", function(d) { return x(d.number); })
    .attr("height", y.bandwidth() )
    .style("fill", function (d) { return color(d.substances); } )
    .style("opacity", 0.8)



