'use strict';

let hours = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Total'];

function CookieStand (city, minCust, maxCust, avgCookiePerCust) {

  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.cookiePerHour = [];
}

CookieStand.prototype.setCookiePerHour = function() {
  this.cookiePerHour.push(Math.ceil(randomCustomers(this.minCust,this.maxCust) * this.avgCookiePerCust));
};

let seattle = new CookieStand ('Seattle', 23, 65, 6.3);
let tokyo = new CookieStand ('Tokyo', 3, 24, 1.2);
let dubai = new CookieStand ('Dubai', 11, 38, 3.7);
let paris = new CookieStand ('Paris', 20, 38, 2.3);
let lima = new CookieStand ('Lima', 2, 16, 4.6);

let locations = [seattle, tokyo, dubai, paris, lima];

function randomCustomers(minCust,maxCust){
  return Math.floor(Math.random()*(maxCust- minCust + 1) + minCust);
}

const divElem = document.getElementById('location');

const tableElem = document.createElement('table');
tableElem.setAttribute('id', 'table1');
divElem.appendChild(tableElem);

const theadElem = document.createElement('thead');
tableElem.appendChild(theadElem);
const tbodyElem = document.createElement('tbody');
tableElem.appendChild(tbodyElem);
const tfootElem = document.createElement('tfoot');
tableElem.appendChild(tfootElem);

function createTopRow () {

  let trElemHoursRow = document.createElement('tr');
  theadElem.appendChild(trElemHoursRow);

  let thElemHoursHead = document.createElement('th');
  thElemHoursHead.textContent = 'Location';
  trElemHoursRow.appendChild(thElemHoursHead);

  for (let i=0; i < hours.length; i++){

    const thElemHour = document.createElement('th');
    trElemHoursRow.appendChild(thElemHour);
    thElemHour.textContent = hours[i];
  }
}

function addToTable (store){

  const trElem = document.createElement('tr');
  tbodyElem.appendChild(trElem);

  const thElem = document.createElement('th');
  thElem.textContent = store.city;
  trElem.appendChild(thElem);
  let totalCookiesForDay = 0;

  for (let i=0; i < hours.length-1; i++) {

    store.setCookiePerHour();
    totalCookiesForDay += store.cookiePerHour[i];

    const tdElem = document.createElement('td');
    tdElem.textContent = (store.cookiePerHour[i]);
    trElem.appendChild(tdElem);
  }

  const tdElemDayTotal = document.createElement('td');
  tdElemDayTotal.textContent = totalCookiesForDay;
  trElem.appendChild(tdElemDayTotal);
}

function createFooter(){
  let tfELemFooterRow = document.createElement('tr');
  tfootElem.appendChild(tfELemFooterRow);

  let tfElemFooterHead = document.createElement('th');
  tfElemFooterHead.textContent = 'Totals';
  tfELemFooterRow.appendChild(tfElemFooterHead);

  let totalsArray = [];
  let sum = 0;

  for (let i=0; i < hours.length-1; i++ ){

    for ( let j=0; j < locations.length; j++) {

      sum += locations[j].cookiePerHour[i];

      totalsArray[i] = sum;
    }

    let tdElemHourlyTotal = document.createElement('td');
    tdElemHourlyTotal.textContent = sum;
    tfELemFooterRow.appendChild(tdElemHourlyTotal);
    sum = 0;
  }

  let totalsSum = 0;
  for (let i =0; i < totalsArray.length; i++){

    totalsSum += totalsArray[i];
    console.log(totalsSum);
  }

  let tdFinalTotal = document.createElement('td');
  tdFinalTotal.textContent = totalsSum;
  tfELemFooterRow.appendChild(tdFinalTotal);
}

createTopRow();
addToTable(seattle);
addToTable(tokyo);
addToTable(dubai);
addToTable(paris);
addToTable(lima);
createFooter();
