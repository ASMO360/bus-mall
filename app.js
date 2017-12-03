'use strict';
const minReqVotes = 3; // for testing
// const minReqVotes = 25; // for production

var allProductsFromStorage = []; //this is where the new objects are stored
var allProducts = []; //this is where the new objects are stored
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'sweep', 'usb', 'unicorn', 'water-can', 'wine-glass'];


function saveProductStats(){
  var jsonStr = JSON.stringify(allProducts);
  localStorage.setItem('allProductsLS', jsonStr);
}

function Product(name) {
  this.name = name;
  this.path = 'img/' + this.name + '.jpg';
  this.votes = 0;
  this.displayed = 0;
  allProducts.push(this);
}

function pulledFromMemoryConstructor(name, votes, displayed) {
  this.name = name;
  this.path = 'img/' + this.name + '.jpg';
  this.votes = votes;
  this.displayed = displayed;
  allProducts.push(this);
}

Product.prototype.getName = function () {
  return this.name;
};

function initProducts() {
  var prodStats = loadProductStats();

  function saveProductStats(){
    var jsonStr = JSON.stringify(allProducts);
    localStorage.setItem('allProductsLS', jsonStr);
  }

  // function loadProductStats(){
  //   var allProductsStr = localStorage.getItem('allProductsLS');
  //   var allProductsLs = JSON.parse(allProductsStr);
  //   console.log('allProductsLs from storage', allProductsLs);
  //   allProductsFromStorage.push(allProductsLs);
  //   return allProductsLs;
  // }
  //prodStats = null; /////////////////////////////////
  if(prodStats){
    for (var i = 0; i < allProductsFromStorage.length; i++) {
      var allProductsStr = localStorage.getItem('allProductsLS');
      var allProductsLs = JSON.parse(allProductsStr);
      var lSName = allProductsLs[i].name;
      var lSVotes =  allProductsLs[i].votes;
      var lSDisplayed = allProductsLs[i].displayed;
      pulledFromMemoryConstructor(lSName, lSVotes, lSDisplayed);
    }
  } else {
    // when there is no stored data.
    for(var productIdx in productNames) {
      new Product(productNames[productIdx]);
    }
  }
}

initProducts();

var tracker = {
  imagesEl: document.getElementById('images'), //grabbing the images and results id
  resultsEl: document.getElementById('results'),
  clickcount : 0, //to count how many times the program will run.

  imageOne: document.createElement('img'),
  imageTwo: document.createElement('img'),
  imageThree: document.createElement('img'),



  getRandomIndex: function() {
    return Math.floor(Math.random() * allProducts.length);
  },

  displayImages: function() {
    var idOne = this.getRandomIndex(); //asigning a random number
    var idTwo = this.getRandomIndex();
    var idThree = this.getRandomIndex();

    if(idOne === idTwo || idOne === idThree || idTwo === idThree) {
      this.displayImages();
      return; //This eliminated duplicatioon
    }

    this.imageOne.src = allProducts[idOne].path; // asigning the images path
    this.imageTwo.src = allProducts[idTwo].path;
    this.imageThree.src = allProducts[idThree].path;

    this.imageOne.id = allProducts[idOne].name; // asigning the images id
    this.imageTwo.id = allProducts[idTwo].name;
    this.imageThree.id = allProducts[idThree].name;

    this.imagesEl.appendChild(this.imageOne); //adding images through the DOM
    allProducts[idOne].displayed++;
    this.imagesEl.appendChild(this.imageTwo);
    allProducts[idTwo].displayed++;
    this.imagesEl.appendChild(this.imageThree);
    allProducts[idThree].displayed++; //this added to the displayed counter
  },
  showChart : function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: allProducts.map(function(x) {return x.name;}),
        datasets: [{
          label: '# of Votes',
          data: allProducts.map(function(x) {return x.votes;}),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  },
  onClickImages: function(event) {
    console.log(event.target.id);
    if (tracker.clickcount >= minReqVotes) {
      this.showChart();
    } else if (event.target.id === 'images') {
      console.log('no image clicked');
    }else {
      tracker.clickcount++;
      for(var curProdIdX = 0; curProdIdX < allProducts.length; curProdIdX++) {
        if(event.target.id === allProducts[curProdIdX].name) {
          ++allProducts[curProdIdX].votes;
        }
        saveProductStats();
      }
    }
    tracker.displayImages();
  }
};

tracker.imagesEl.addEventListener('click', tracker.onClickImages.bind(tracker), false);
tracker.displayImages();
