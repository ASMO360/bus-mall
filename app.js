'use strict';

var allProducts = []; //this is where the objects are stored
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass']; // this will create my results list


function Product(name, path) {  //this is my Constructor
  this.name = name;
  this.path = "img/" + path;
  this.id = name + "Id"
  this.totalClick = 0;
  this.totalDisplay = 0;
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
var dragon = new Product('dragon','dragon.jpg')
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


var resultsMaker = {
  imagesEl: document.getElementById('photos'),
  resultsEl: document.getElementById('stats'),
  clicks: 0,

  pic1: new Image(),
  pic2: new Image(),
  pic3: new Image(),

  getRandomIndex: function() {
    return Math.floor(Math.random() * (parseInt(allProducts.length) - 1) + 1);
  },

  displayImages: function() {
    var picOne = this.getRandomIndex();
    var picTwo = this.getRandomIndex();
    var picThree = this.getRandomIndex();

    if(picOne === picTwo || picOne === picThree || picTwo === picThree) {
      this.displayImages();
      return;
    }

    this.pic1.src = allProducts[picOne].path;
    this.pic2.src = allProducts[picTwo].path;
    this.pic3.src = allProducts[picThree].path;
  }
}
