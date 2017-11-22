'use strict';

var allProducts = []; //this is where the objects are stored
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'sweep', 'usb', 'unicorn', 'water-can', 'wine-glass'];


function Product(name, path) {  //this is my Constructor
  this.name = name;
  this.path = "img/" + this.name + '.jpg';
  this.id = name + "Id"
  this.totalClick = 0;
  this.totalDisplay = 0;
  allProducts.push(this);
}

//Objects! created with 1 function!!! crazy
(function() {
  for(var i in productNames) {
    new Product(productNames[i]);
  }
})();

console.log(allProducts);



var tracker = {
  imagesEl: document.getElementById('images'),
  resultsEl: document.getElementById('results'),
  clicks: 0,

  imageOne: document.createElement('img'),
  imageTwo: document.createElement('img'),
  imageThree: document.createElement('img'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * allProducts.length);
  },

  displayImages: function() {
    var idOne = this.getRandomIndex();
    var idTwo = this.getRandomIndex();
    var idThree = this.getRandomIndex();

    if(idOne === idTwo || idOne === idThree || idTwo === idThree) {
      this.displayImages();
      return;
    }

    this.imageOne.src = allProducts[idOne].path;
    this.imageTwo.src = allProducts[idTwo].path;
    this.imageThree.src = allProducts[idThree].path;

    this.imageOne.id = allProducts[idOne].name;
    this.imageTwo.id = allProducts[idTwo].name;
    this.imageThree.id = allProducts[idThree].name;

    this.imagesEl.appendChild(this.imageOne);
    this.imagesEl.appendChild(this.imageTwo);
    this.imagesEl.appendChild(this.imageThree);
  },

  whenClick: function(event) {
    console.log(event.target.id);
      }
}

tracker.imagesEl.addEventListener('click', tracker.whenClick);
tracker.displayImages();
