function showSelectedSize() {
    var size = document.getElementById('sizeSelections');
    var value = size[size.selectedIndex].value;
    document.getElementById("size_selected").textContent = value;
};


		var clicks = 0;
function ItemCount() {
		var quantity = parseInt(document.getElementById("quantitySelection").value);
		clicks += quantity;
	   	document.getElementById('numOfItems').innerHTML = clicks;
};

function showSelectedColor() {
   var color = document.getElementsByName('color');
   var img = document.getElementById("coolHarnessImg");
   var imgSources = ["img/cool-harness.jpg","img/cool-harness-1.jpg"]

  	for (i=0; i< color.length; i++) {
   		if (color[i].checked) {
    		colorvalue = color[i].value;
    		console.log(colorvalue);
    		document.getElementById("color_selected").innerHTML = colorvalue;
    		img.src= imgSources[i];
    		return false;
    	}
	}
};

function confirmAdd() {
	alert ('Added to shopping cart!')
};