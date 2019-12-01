var df = [
		{"class": "8th", "year": "2015" , "Percent Vaping": 21.7},
		{"class": "8th", "year": "2016" , "Percent Vaping": 17.5},
		{"class": "8th", "year": "2017" , "Percent Vaping": 18.5},
		{"class": "8th", "year": "2018" , "Percent Vaping": 21.5},
		{"class": "10th", "year": "2015" , "Percent Vaping": 32.8},
		{"class": "10th", "year": "2016" , "Percent Vaping": 29},
		{"class": "10th", "year": "2017" , "Percent Vaping": 30.9},
		{"class": "10th", "year": "2018" , "Percent Vaping": 36.9},
		{"class": "12th", "year": "2015" , "Percent Vaping": 35.5},
		{"class": "12th", "year": "2016" , "Percent Vaping": 33.8},
		{"class": "12th", "year": "2017" , "Percent Vaping": 35.8},
		{"class": "12th", "year": "2018" , "Percent Vaping": 42.5},
		]; //data-set for trends of student vaping graph


const selection = vl.selectSingle();

		const Graph1 = vl.markLine()
  			.data(df)
  			.select(selection)
  			.encode(
    			vl.x().fieldN('year').axis({title: 'Year', labelColor: 'white', titleColor: 'white', labelPadding: 5, titlePadding: 10}),
   			 	vl.y().fieldQ('Percent Vaping').axis({grid: false, labelColor: 'white', titleColor: 'white', labelPadding: 5, titlePadding: 10}).title('Percentage of Students'),
     			vl.color().fieldN('class').scale({range: ['#CF9802', '#AA4949', '#B64B03']}).legend({labelColor: 'white', titleColor: 'white', title:'Grade'}),
    			vl.opacity().if(selection, vl.value(1.0)).value(0.1)
  			)
  			.width(400)
  			.height(400)
  			.title({text:"Trend of High-School Students Vaping", color:'white'}); //title for trends of vaping graph


vegaEmbed("#vis_trends", Graph1.toJSON())
      // result.view provides access to the Vega View API
      .then(result => console.log(result))
      .catch(console.warn); //Embed trend of vaping use graph in vis_trends div