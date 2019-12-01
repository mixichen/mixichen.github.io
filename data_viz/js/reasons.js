var df1 = [{"reason": "1. Friend/Family Influence", "year": "2015" , "percent": 41.2},
       {"reason": "1. Friend/Family Influence", "year": "2016" , "percent": 37.5},
       {"reason": "1. Friend/Family Influence", "year": "2017" , "percent": 38},
       {"reason": "1. Friend/Family Influence", "year": "2018" , "percent": 39.5},
       {"reason": "5. Quit Tobacco Products", "year": "2015" , "percent": 14.9},
       {"reason": "5. Quit Tobacco Products", "year": "2016" , "percent": 8.7},
       {"reason": "5. Quit Tobacco Products", "year": "2017" , "percent": 10.7},
       {"reason": "5. Quit Tobacco Products", "year": "2018" , "percent": 12.9},
       {"reason": "8. Cheaper than Tobacco Products", "year": "2015" , "percent": 5.2},
       {"reason": "8. Cheaper than Tobacco Products", "year": "2016" , "percent": 3.6},
       {"reason": "8. Cheaper than Tobacco Products", "year": "2017" , "percent": 4},
       {"reason": "8. Cheaper than Tobacco Products", "year": "2018" , "percent": 4.5},
       {"reason": "7. Easier to get than Tobacco Products", "year": "2015" , "percent": 5.9},
       {"reason": "7. Easier to get than Tobacco Products", "year": "2016" , "percent": 4.7},
       {"reason": "7. Easier to get than Tobacco Products", "year": "2017" , "percent": 3.9},
       {"reason": "7. Easier to get than Tobacco Products", "year": "2018" , "percent": 4.2},
       {"reason": "9. Famous people use them", "year": "2015" , "percent": 0},
       {"reason": "9. Famous people use them", "year": "2016" , "percent": 0},
       {"reason": "9. Famous people use them", "year": "2017" , "percent": 1.2},
       {"reason": "9. Famous people use them", "year": "2018" , "percent": 1.1},
       {"reason": "4. Less Harmful to Health", "year": "2015" , "percent": 15.3},
       {"reason": "4. Less Harmful to Health", "year": "2016" , "percent": 17.4},
       {"reason": "4. Less Harmful to Health", "year": "2017" , "percent": 19.5},
       {"reason": "4. Less Harmful to Health", "year": "2018" , "percent": 22.3},
       {"reason": "2. Available in Flavors", "year": "2015" , "percent": 29.8},
       {"reason": "2. Available in Flavors", "year": "2016" , "percent": 32.3},
       {"reason": "2. Available in Flavors", "year": "2017" , "percent": 36.9},
       {"reason": "2. Available in Flavors", "year": "2018" , "percent": 43},
       {"reason": "6. Usable in most places", "year": "2015" , "percent": 6},
       {"reason": "6. Usable in most places", "year": "2016" , "percent": 7.9},
       {"reason": "6. Usable in most places", "year": "2017" , "percent": 8.2},
       {"reason": "6. Usable in most places", "year": "2018" , "percent": 7.1},
       {"reason": "3. Some other reason", "year": "2015" , "percent": 27.4},
       {"reason": "3. Some other reason", "year": "2016" , "percent": 31.6},
       {"reason": "3. Some other reason", "year": "2017" , "percent": 29.6},
       {"reason": "3. Some other reason", "year": "2018" , "percent": 34.8},
		]; //data-set for reasons for vaping graphs


const Selection = vl.selectSingle()
              .encodings('y');
  
              const Visual2 = vl.markBar()
                     .data(df1)
                     .select(Selection)
                     .encode(
                     vl.y().fieldN('reason').axis({labelColor: 'white', title: 'Reasons for Vaping', titleColor: 'white', labelPadding: 5, titlePadding: 10}),
                     vl.x().average('percent').axis({grid: false, labelColor: 'white', titleColor: 'white', labelPadding: 5, titlePadding: 10}).title('Average Percentage of Students'),
                            vl.color().fieldN('reason').scale({range: ['#CF9802', '#AA4949', '#B64B03', '#FFFFFF', '#FFFFFF', '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF']}).legend(null),
                     vl.opacity().if(Selection, vl.value(0.8)).value(0.3)
                     )
                     .height(400)
  
              const Visual1 = vl.markLine({point: true})
                     .data(df1)
                     .encode(
                            vl.x().fieldN('year').title('Year').axis({labelColor: 'white', titleColor: 'white', labelPadding: 5, titlePadding: 10}),
                     vl.y().fieldQ('percent').axis({grid: false, title: 'Percent of High-School Students', labelColor: 'white', titleColor: 'white', labelPadding: 5, titlePadding: 10}),
                     vl.color().fieldN('reason').legend(null),
                     vl.opacity().if(Selection, vl.value(0.8)).value(0.2)
                     )
                     .width(400)
                     .height(400)
  
              const final = vl.hconcat(Visual2, Visual1)
                     .spacing(25) //for distance between the two graphs
                     .title({text:"Popular Reasons for Vaping among High-School Students through the Years", color:'white'}) //title of both graphs


vegaEmbed("#vis_reasons", final.toJSON())
      // result.view provides access to the Vega View API
      .then(result => console.log(result))
      .catch(console.warn); //Embed Reasons graph in vis_reasons div