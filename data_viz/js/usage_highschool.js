// set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 70, left: 130},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#usage_viz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

/*Highshcool Students*/
var data = [
   {Products: "Cigarettes", Students: 1180000},
   {Products: "E-cigarettes", Students: 3050000},
   {Products: "Cigars", Students: 1100000},
   {Products: "Smokeless tobacco", Students: 870000},
   {Products: "Hookahs", Students: 590000},
   {Products: "Pipe tobacco", Students: 160000},

];


console.log (data);

var allGroup = d3.map(data, function(d){return(d.Products)}).keys()

//take E-cigarettes out of the vis
allGroup.splice(1, 1);
 

d3.select("#selectButton")
      .selectAll('myOptions')
      .data(allGroup)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button
      .style("left", "80px") 
      .style("top", "70px")


console.log (allGroup);

svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 300)
        .attr("text-anchor", "middle")  
        .style("font-size", "25px") 
        .style("fill", "white")
        .text("High School Students");


// Add X axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 50)
    .style("fill", "white")
    .text("Number of People");


  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 3050000])
    .range([ 2, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");


    svg.selectAll("path")
      .style("stroke", "white")

// Customization
  svg.selectAll(".tick line").attr("stroke", "white")
  svg.selectAll(".tick text").attr("fill", "white")


 // Y axis
  var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data.map(function(d) { return "E-cigarettes"})) 
    .padding(.6);
  svg.append("g")
    .call(d3.axisLeft(y))
    .attr("class", "yAxis")
    .selectAll("path")
      .style("stroke", "white");
    
    svg.selectAll ("tick")
      .style ('visibility','hidden')

  //Bars
  var bars = svg.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
      .data(data.filter(function(d){return d.Products=="E-cigarettes"|| d.Products == "Cigarettes"}))
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.Products); })
    .attr("width", function(d) { return x(d.Students); })
    .attr("height", y.bandwidth() )
    .attr("fill", "#AA4949")






// A function that update the chart
    function update(selectedGroup) {

      // Give these new data to update bar
      bars
          .data(data.filter(function(d){return d.Products == selectedGroup}))
          .transition()
          .duration(1000)
          .attr("x", x(0) )
          .attr("y", function(d) { return y(d.Products); })
          .attr("width", function(d) { return x(d.Students); })
          .attr("height", y.bandwidth() )
          .attr("fill", function(d){ return color(d.Products)})
          .attr("fill", "#CF9802")




    }

     d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })



    // .attr("x", function(d) { return x(d.Country); })
    // .attr("y", function(d) { return y(d.Value); })
    // .attr("width", x.bandwidth())
    // .attr("height", function(d) { return height - y(d.Value); })
    // .attr("fill", "#69b3a2")
