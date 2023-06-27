'use strict';

let locHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let storeSection = document.getElementById('stores');

let locSeattle ={
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  saleNum: [],
  saleTotal: 0,
  ranNum: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); // inclusive rng - got from MDN
  },
  ranCust: function(){
    let custNum = this.ranNum(this.minCust,this.maxCust);
    return custNum;
  },
  render: function (){
    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let saleList = document.createElement('ul');
    storeSection.appendChild(saleList);

    for (let i = 0; i < locHours.length; i++){
      this.saleNum[i] = Math.round(this.avgSale * this.ranCust());
      let saleListItem = document.createElement('li');
      saleListItem.textContent = locHours[i] + ': ' + this.saleNum[i] + ' cookies';
      saleList.appendChild(saleListItem);
      this.saleTotal += this.saleNum[i];
    }
    let saleTotalList = document.createElement('li');
    saleTotalList.textContent = ('Total: ' + this.saleTotal+ ' cookies');
    saleList.appendChild(saleTotalList);

  }
};

locSeattle.render();

let locTokyo ={
  name: 'Toyko',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  saleNum: [],
  saleTotal: 0,
  ranNum: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); // inclusive rng - got from MDN
  },
  ranCust: function(){
    let custNum = this.ranNum(this.minCust,this.maxCust);
    return custNum;
  },
  render: function (){
    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let saleList = document.createElement('ul');
    storeSection.appendChild(saleList);

    for (let i = 0; i < locHours.length; i++){
      this.saleNum[i] = Math.round(this.avgSale * this.ranCust());
      let saleListItem = document.createElement('li');
      saleListItem.textContent = locHours[i] + ': ' + this.saleNum[i] + ' cookies';
      saleList.appendChild(saleListItem);
      this.saleTotal += this.saleNum[i];
    }
    let saleTotalList = document.createElement('li');
    saleTotalList.textContent = ('Total: ' + this.saleTotal+ ' cookies');
    saleList.appendChild(saleTotalList);

  }
};
locTokyo.render();

let locDubai ={
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  saleNum: [],
  saleTotal: 0,
  ranNum: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); // inclusive rng - got from MDN
  },
  ranCust: function(){
    let custNum = this.ranNum(this.minCust,this.maxCust);
    return custNum;
  },
  render: function (){
    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let saleList = document.createElement('ul');
    storeSection.appendChild(saleList);

    for (let i = 0; i < locHours.length; i++){
      this.saleNum[i] = Math.round(this.avgSale * this.ranCust());
      let saleListItem = document.createElement('li');
      saleListItem.textContent = locHours[i] + ': ' + this.saleNum[i] + ' cookies';
      saleList.appendChild(saleListItem);
      this.saleTotal += this.saleNum[i]; 
    }
    let saleTotalList = document.createElement('li');
    saleTotalList.textContent = ('Total: ' + this.saleTotal+ ' cookies');
    saleList.appendChild(saleTotalList);

  }
};
locDubai.render();

let locParis ={
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  saleNum: [],
  saleTotal: 0,
  ranNum: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); // inclusive rng - got from MDN
  },
  ranCust: function(){
    let custNum = this.ranNum(this.minCust,this.maxCust);
    return custNum;
  },
  render: function (){
    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let saleList = document.createElement('ul');
    storeSection.appendChild(saleList);

    for (let i = 0; i < locHours.length; i++){
      this.saleNum[i] = Math.round(this.avgSale * this.ranCust());
      let saleListItem = document.createElement('li');
      saleListItem.textContent = locHours[i] + ': ' + this.saleNum[i] + ' cookies';
      saleList.appendChild(saleListItem);
      this.saleTotal += this.saleNum[i]; 
    }
    let saleTotalList = document.createElement('li');
    saleTotalList.textContent = ('Total: ' + this.saleTotal+ ' cookies');
    saleList.appendChild(saleTotalList);

  }
};
locParis.render();

let locLima ={
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  saleNum: [],
  saleTotal: 0,
  ranNum: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); // inclusive rng - got from MDN
  },
  ranCust: function(){
    let custNum = this.ranNum(this.minCust,this.maxCust);
    return custNum;
  },
  render: function (){
    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let saleList = document.createElement('ul');
    storeSection.appendChild(saleList);

    for (let i = 0; i < locHours.length; i++){
      this.saleNum[i] = Math.round(this.avgSale * this.ranCust());
      let saleListItem = document.createElement('li');
      saleListItem.textContent = locHours[i] + ': ' + this.saleNum[i] + ' cookies';
      saleList.appendChild(saleListItem);
      this.saleTotal += this.saleNum[i];
    }
    let saleTotalList = document.createElement('li');
    saleTotalList.textContent = ('Total: ' + this.saleTotal+ ' cookies');
    saleList.appendChild(saleTotalList);

  }
};
locLima.render();
