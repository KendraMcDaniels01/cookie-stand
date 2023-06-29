'use strict';

let locHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


let storeSection = document.getElementById('stores');
const storeArray = [];



function Location(storeName, min, max, avg){
  this.store = storeName;
  this.minCust = min;
  this.maxCust = max;
  this.avgSale = avg;
  this.saleNum = [];
  this.saleTotal = 0;
}

let locSeattle = new Location('Seattle', 23, 65, 6.3);
let locTokyo = new Location('Tokyo', 3, 24, 1.2);
let locDubai = new Location('Dubai', 11, 38, 3.7);
let locParis = new Location('Paris', 20, 38, 2.3);
let locLima = new Location('Lima', 2, 16, 4.6);



//Hour heading for table
let hourHeading = document.createElement('tr');
hourHeading.textContent = '';
storeSection.appendChild(hourHeading);
for (let i = 0; i < locHours.length; i++){
  let hourLabel = document.createElement('td');
  hourLabel.textContent = locHours[i];
  hourHeading.appendChild(hourLabel);
}
let totalHeading = document.createElement('td');
totalHeading.textContent = 'Total';
hourHeading.appendChild(totalHeading);

Location.prototype.ranNum = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min); // inclusive rng - got from MDN
};
Location.prototype.render = function(){
  let storeTable = document.createElement('tr');
  storeTable.textContent = this.store;
  storeSection.appendChild(storeTable);
  for (let i = 0; i < locHours.length; i++){
    let saleListItem = document.createElement('td');
    this.saleNum[i] = Math.round(this.avgSale * (this.ranNum(this.minCust,this.maxCust)));
    this.saleTotal += this.saleNum[i];
    saleListItem.textContent = this.saleNum[i];
    storeTable.appendChild(saleListItem);
  }
  let totalListItem = document.createElement('td');
  totalListItem.textContent = this.saleTotal;
  storeTable.appendChild(totalListItem);

  console.log(this.saleNum);
};


locSeattle.render();
locTokyo.render();
locDubai.render();
locParis.render();
locLima.render();

//wasn't able to get the stretch goal yet, footer totals
let hourTotals = document.createElement('tr');
hourTotals.textContent = 'Total ';
storeSection.appendChild(hourTotals);
let hourlyTotal = 0;
for (let i = 0; i < locHours.length; i++){
  let hourTotalLabel = document.createElement('td');
  for(let i = 0; i < storeArray.length; i++){
    hourlyTotal += storeArray[i].saleNum[i];
    console.log(storeArray[i]);
  }
  hourTotalLabel.textContent = hourlyTotal;
  hourTotals.appendChild(hourTotalLabel);
}
let totalGrand = document.createElement('td');
totalGrand.textContent = 'Total';
hourHeading.appendChild(totalHeading);
