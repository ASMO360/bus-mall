'use strict';
document.getElementById('myChart').style.display = 'none';
var clickNum = 25; // for production

var lStorageGet = localStorage.getItem('allProductsLS');
var allProductsLs = JSON.parse(lStorageGet);
console.log('allProducts from storage', allProductsLs);

var allProducts = []; //this is where the objects are stored
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'sweep', 'usb', 'unicorn', 'water-can', 'wine-glass'];

function populateStorage(){
  var jsonStr = JSON.stringify(allProducts);
  localStorage.setItem('allProductsLS', jsonStr);
}

function Product(name, votes, displayed) { //this is my Constructor
  this.name = name;
  this.path = 'img/' + this.name + '.jpg';
  this.votes = votes;
  this.displayed = displayed;
  allProducts.push(this);
}

Product.prototype.getInfo = function(){
  for(var i in allProductsLs){
    new Product(allProductsLs[i].name, allProductsLs[i].votes, allProductsLs[i].displayed);
  }
};

if (allProductsLs !== null){
  Product.prototype.getInfo();
} else {
  for(var i in productNames) {
    new Product(productNames[i], 0, 0);
  }
}

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

  onClick: function(event) {
    console.log(event.target.id);
    if (tracker.clickcount === clickNum) {
      document.getElementById('myChart').style.display = 'block';
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
    } else if (event.target.id === 'images') {
      console.log('no image clicked');
      return;
    }else {
      tracker.clickcount++;
    }
    for(var i in allProducts) {
      if(event.target.id === allProducts[i].name) {
        allProducts[i].votes++;
        populateStorage();
      }
    }
    tracker.displayImages();
  }
};
tracker.imagesEl.addEventListener('click', tracker.onClick);
tracker.displayImages();
