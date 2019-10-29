
// =============================
  // Product Details Page
// =============================

//Show selected size// 
function showSelectedSize() {
    var size = document.getElementById('sizeSelections');
    var value = size[size.selectedIndex].value;
    document.getElementById("size_selected").textContent = value;
};

//Record number of items added to shopping cart // 
    
function itemCount() {
    var clicks = JSON.parse(sessionStorage.getItem('itemCount'));
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

// =============================
  // Add item to shopping cart
// =============================

// Constructor
function Item(name, price, qty, size, color, image) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.size = size;
  this.color = color;
  this.image = image;
};

//Add to shppping cart function
function shoppingCart() {

  var cart = [];

//Check if things exist in cart
  if (JSON.parse(sessionStorage.getItem('shoppingCart')) !== null) {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  };
  
//Get information from product details page
  var productName = document.getElementById("product-name").textContent;
  var productPrice = document.getElementById("detailed-price").textContent;
  var productQty = parseInt(document.getElementById("quantitySelection").value);
  var productSize = document.getElementById("size_selected").textContent;
  var productColor =  document.getElementById("color_selected").textContent;
  var productImage = document.getElementById("coolHarnessImg").src;

//Create instance of constructor
  var newItem = new Item (productName,productPrice,productQty,productSize,productColor,productImage);

  cart.push(newItem);

//Check for errors
  console.log (cart);

//Save item
  sessionStorage.setItem("shoppingCart", JSON.stringify(cart));


};

// =============================
  // Display shopping cart
// =============================

function showShoppingCart () {
  
  var cart = [];

//Check if things exist in cart
  if (JSON.parse(sessionStorage.getItem('shoppingCart')) !== null) {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  };

//Display added items
  var shoppingCartHTML = '';

  for ( i= 0; i < cart.length; i++) {
    var container = `<div class="shopped-item" id="Item${i}">
                      <div id="img">
                        <a href="cool-harness.html" ><img src= "${cart[i].image}" alt="Dog Harness"></a>
                      </div>
                      <div class="info" style="flex-grow: 0.5">
                        <h3>${cart[i].name}</h3>
                        <h4>size: ${cart[i].size}</h4>
                        <h4>color: ${cart[i].color}</h4>
                        <h3>${cart[i].price}</h3>
                        </div>
                      <div class="quantity_remove">
                        <br>Qty: ${cart[i].qty}<br>
                        <h5 id="remove" onclick="removeItem(${i});displayCount()"> Remove Item </h5>
                      </div>
                    </div>`

    shoppingCartHTML += container;

  }

  document.getElementById('shoppingCartItems').innerHTML = shoppingCartHTML;

}

//Change "remove item" button cursor to pointer
function changeCursor(){
    document.getElementById("remove").style.cursor = "pointer";
};

//Remove item function
function removeItem (i) {
  console.log (i);
  var cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  cart.splice(i,1);
  sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
  var num = i;
  document.getElementById("Item"+num.toString()).remove();
  console.log (cart);
};


//Display numbers of items on shopping cart page
function displayCount() {
  var count = 0;
  var cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  for ( i= 0; i < cart.length; i++) {
    count += cart[i].qty;
  }
    document.getElementById('displaynumOfItems').innerHTML = count;

//If no item in shopping cart, an "empty cart" message shows up, and checkout button is hidden
  if (count === 0) {
    document.getElementById("emptyCart").style.display = "block";
    document.getElementById("checkoutBtn").style.display = "none";
  } else {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("checkoutBtn").style.display = "block";
  };
};

//Update the displayed number of items on product details page
function updateCount() {
  var count = 0;
  var cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  for ( i= 0; i < cart.length; i++) {
    count += cart[i].qty;
    sessionStorage.setItem("itemCount", JSON.stringify(count));
  }
  document.getElementById('numOfItems').innerHTML = count;
};



