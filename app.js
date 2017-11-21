'use strict';

var allProducts = []; //this is where the objects are stored
var productNames = []; // this will create my results list
var allImages = []; //this will create an array of images

function Product(name, path, id) {
  this.name = name;
  this.path = "img/" + path;
  this.totalClick = 0;
  this.totalDisplay = 0;
  allImages.push(this.path);
  allProducts.push(this);
  productNames.push(this.name);
}


var allImages = [];

new PageImage('item', 'item.jpg', 'id',allImages);

function PageImage('itemName', 'Path', 'id', allImages) {

}


// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?
var bag = new Product('bag', 'bag.jpg' );
console.log(allProducts);
var banana = new Product('banana', 'banana.jpg');
console.log(allProducts);

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    return Math.floor(Math.random() * (parseInt(allProducts.length) - 1) + 1);
  },

  displayImages: function() {
    var myImage = new Image(200,200);
    myImage.src = this.path;
    document.getByElementId
  },

  tallyClicks: function(elementId) {
    this.totalClick +=
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
};

productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
