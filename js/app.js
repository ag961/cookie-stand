'use strict';

const hours = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Total'];

const divElem = document.getElementById('location');

const tableElem = document.createElement('table');
tableElem.setAttribute('id', 'table1');
divElem.appendChild(tableElem);

function CookieStand (city, minCust, maxCust, avgCookiePerCust) {

  this.city = city;
  this.minCust = parseFloat(minCust);
  this.maxCust = parseFloat(maxCust);
  this.avgCookiePerCust = parseFloat(avgCookiePerCust);
  this.cookiePerHour = [];
}

CookieStand.prototype.setCookiePerHour = function() {
  this.cookiePerHour.push(Math.ceil(randomCustomers(this.minCust,this.maxCust) * this.avgCookiePerCust));
};

function randomCustomers(minCust,maxCust){
  return Math.floor(Math.random()*(maxCust- minCust + 1) + minCust);
}

function createTopRow () {
  const theadElem = document.createElement('thead');
  tableElem.appendChild(theadElem);

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
  const tbodyElem = document.createElement('tbody');
  tableElem.appendChild(tbodyElem);

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

  const tfootElem = document.createElement('tfoot');
  tableElem.appendChild(tfootElem);

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

  }

  let tdFinalTotal = document.createElement('td');
  tdFinalTotal.textContent = totalsSum;
  tfELemFooterRow.appendChild(tdFinalTotal);
}

function loopAddToTable(){
  for (let i = 0; i < locations.length; i++){
    addToTable(locations[i]);
  }
}

function renderEverything() {
  createTopRow();
  loopAddToTable();
  createFooter();
}

const seattle = new CookieStand ('Seattle', 23, 65, 6.3);
const tokyo = new CookieStand ('Tokyo', 3, 24, 1.2);
const dubai = new CookieStand ('Dubai', 11, 38, 3.7);
const paris = new CookieStand ('Paris', 20, 38, 2.3);
const lima = new CookieStand ('Lima', 2, 16, 4.6);
const locations = [seattle, tokyo, dubai, paris, lima];

const formElem = document.getElementById('addLocationForm');

formElem.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  let formCity = event.target.city.value;
  let minimumCust = event.target.minCust.value;
  let maximumCust = event.target.maxCust.value;
  let averageCookiePerCust = event.target.avgCookiePerCust.value;
  let newStore = new CookieStand(formCity, minimumCust, maximumCust, averageCookiePerCust);

  locations.push(newStore);
  clearTable();
  renderEverything();
  event.target.reset();
}

function clearTable() {
  tableElem.innerHTML = '';
}

renderEverything();
