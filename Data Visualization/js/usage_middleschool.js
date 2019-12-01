// set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 70, left: 130},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#usage_viz2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



/*Middle School Students*/
var data2 = [
   {Products: "Cigarettes", Students: 200000},
   {Products: "E-cigarettes", Students: 570000},
   {Products: "Cigars", Students: 190000},
   {Products: "Smokeless tobacco", Students: 210000},
   {Products: "Hookahs", Students: 140000},
   {Products: "Pipe tobacco", Students: 30000},

];

console.log (data2);

var allGroup2 = d3.map(data2, function(d){return(d.Products)}).keys()

//take E-cigarettes out of the vis
allGroup2.splice(1, 1);


console.log (allGroup);



svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 300)
        .attr("text-anchor", "middle")  
        .style("font-size", "25px") 
        .style("fill", "white")
        .text("Middle School Students");

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
    .domain(data2.map(function(d) { return "E-cigarettes"})) 
    .padding(.6);
  svg.append("g")
    .call(d3.axisLeft(y))
    .attr("class", "yAxis")
    .selectAll("path")
      .style("stroke", "white");



svg.selectAll ("tick")
  .style ('visibility','hidden')


  //Bars
  var bars2 = svg.selectAll("myRect")
    .data(data2)
    .enter()
    .append("rect")
      .data(data2.filter(function(d){return d.Products=="E-cigarettes"|| d.Products == "Cigarettes"}))
       //How do I display e-cigarette and another row based on button selection? //How do I display e-cigarette and another row based on button selection?
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.Products); })
    .attr("width", function(d) { return x(d.Students); })
    .attr("height", y.bandwidth() )
    .attr("fill", "#AA4949")


// A function that update the chart
    function update2(selectedGroup) {

      // Give these new data to update bar
      bars2
          .data(data2.filter(function(d){return d.Products == selectedGroup}))
          .transition()
          .duration(1000)
          .attr("x", x(0) )
          .attr("y", function(d) { return y(d.Products); })
          .attr("width", function(d) { return x(d.Students); })
          .attr("height", y.bandwidth() )
          .attr("fill", "#CF9802")
    }


     d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption);
        update2(selectedOption);
    })



    // .attr("x", function(d) { return x(d.Country); })
    // .attr("y", function(d) { return y(d.Value); })
    // .attr("width", x.bandwidth())
    // .attr("height", function(d) { return height - y(d.Value); })
    // .attr("fill", "#69b3a2")
