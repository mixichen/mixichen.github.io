
//* product details page*//

//Show selected size// 
function showSelectedSize() {
    var size = document.getElementById('sizeSelections');
    var value = size[size.selectedIndex].value;
    document.getElementById("size_selected").textContent = value;
};

//Record number of items added to shopping cart // 
		var clicks = 0;
function ItemCount() {
		var quantity = parseInt(document.getElementById("quantitySelection").value);
		clicks += quantity;
	   	document.getElementById('numOfItems').innerHTML = clicks;
};

//Show selected color + change product image accordingly// 
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

//Pop-up message to confirm that item(s) added to shopping cart// 

function confirmAdd() {
	alert ('Added to shopping cart!')
};