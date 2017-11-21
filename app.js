'use strict';

var allProducts = []; //this is where the objects are stored
var productNames = []; // this will create my results list
var allImages = []; //this will create an array of images

function Product(name, path) {  //this is my Constructor
  this.name = name;
  this.path = "img/" + path;
  this.id = name + "Id"
  this.totalClick = 0;
  this.totalDisplay = 0;
  allImages.push(this.path);
  productNames.push(this.name);
  allProducts.push(this);
}

//Objects!
var bag = new Product('bag', 'bag.jpg' );
var banana = new Product('banana', 'banana.jpg');
var bathroom = new Product('bathroom', 'bathroom.jpg');
var boots = new Product('boots', 'boots.jpg');
var breakfast = new Product('breakfast', 'breakfast.jpg');
var bubblegum = new Product('bubblegum', 'bubblegum.jpg');
var chair = new Product('chair', 'chair.jpg');
var cthulhu = new Product('cthulhu', 'cthulhu.jpg');
var dogDuck = new Product('dogDuck', 'dog-duck.jpg');
var pen = new Product('pen', 'pen.jpg');
var petSweep = new Product('petSweep', 'pet-sweep.jpg');
var scissors = new Product('sissors', 'sissors.jpg');
var shark = new Product('shark', 'shark.jpg');
var sweep = new Product('sweep', 'sweep.jpg');
var tauntaun = new Product('tauntaun', 'tauntaun.jpg');
var unicorn = new Product('unicorn', 'unicorn.jpg');
var usb = new Product('usb', 'usb.jpg');
var waterCan = new Product('waterCan', 'water-can.jpg');
var wineGlass = new Product('wineGlass', 'wine-glass.jpg')
console.log(allProducts);
console.log(allImages);
console.log(productNames);

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    return Math.floor(Math.random() * (parseInt(allProducts.length) - 1) + 1);
  },

  displayImages: function() {
    var myImage = new Image(200,200);
    myImage.src = allProducts[getRandomIndex].path;
    console.log(myImage.src);
    var pic1EL = document.getByElementId('pic1')
    pic1El.appendChild(myImage.src)
  },

  tallyClicks: function(elementId) {

  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    this.totalClick += 1;
};

productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
