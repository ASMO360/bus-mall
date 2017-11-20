'use strict';

var allProducts = []; //this is where the objects are stored
var productNames = []; // this will create my results list

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.totalClick = 0;
  allProducts.push(this);
  productNames.push(this.name)
}

// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    // TODO: Hmm... what's going to happen here?
  },

  displayImages: function() {
    // TODO: Hmm... what's going to happen here?
  },

  tallyClicks: function(elementId) {
    // TODO: Hmm... what's going to happen here?
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
