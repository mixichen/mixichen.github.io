var df3 = [
    {"year": "2014" , "Percent perceiving low risk with vaping": 55.3},
    {"year": "2015" , "Percent perceiving low risk with vaping": 54.2},
    {"year": "2016" , "Percent perceiving low risk with vaping": 50.5},
    {"year": "2017" , "Percent perceiving low risk with vaping": 43.6},
    {"year": "2018" , "Percent perceiving low risk with vaping": 36.0},
    ]; //data-set for reasons for vaping graphs


      const Graph3 = vl.markBar()
        .data(df3)
        .encode(
          vl.x().fieldN('year').axis({title: 'Year', labelColor: 'white', titleColor: 'white', labelPadding: 5, titlePadding: 10}),
          vl.y().fieldQ('Percent perceiving low risk with vaping').axis({grid: false, labelColor: 'white', titleColor: 'white', labelPadding: 5, titlePadding: 10}).title('Percentage of students who perceive E-cigarettes as a low risk'),
          vl.tooltip().fieldQ('Percent perceiving low risk with vaping').type('quantitative'),
          vl.color().fieldN('Percent perceiving low risk with vaping').scale({range: ['#AA4949', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']}).legend(null),
          vl.opacity().value(0.8)
        )
        .width(400)
        .height(400)
        .title({text:"A big percentage of students perceives very low risks associated with E-cigarettes", color: 'white'});

    vegaEmbed("#vis_risks", Graph3.toJSON())
      // result.view provides access to the Vega View API
      .then(result => console.log(result))
      .catch(console.warn); //Embed Risks graph in vis_risks div