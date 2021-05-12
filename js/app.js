'use strict';

let hours = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalCookiesForDay = 0;


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

let locationSeattle = new CookieStand ('Seattle', 23, 65, 6.3);
locationSeattle.setCookiePerHour();
console.log(locationSeattle);

let locationTokyo = new CookieStand ('Tokyo', 3, 24, 1.2);
locationTokyo.setCookiePerHour();

let locationDubai = new CookieStand ('Dubai', 11, 38, 3.7);
locationTokyo.setCookiePerHour();

let locationParis = new CookieStand ('Paris', 20, 38, 2.3);
locationTokyo.setCookiePerHour();

let locationLima = new CookieStand ('Lima', 2, 16, 4.6);
locationTokyo.setCookiePerHour();


function randomCustomers(minCust,maxCust){
  return Math.floor(Math.random()*(maxCust- minCust + 1) + minCust);
}



const locationDivElem = document.getElementById('location');

const tableElem = document.createElement('table');
locationDivElem.appendChild(tableElem);

let trElemHoursRow = document.createElement('tr');
tableElem.appendChild(trElemHoursRow);

let trElemHoursHead = document.createElement('th');
/* trElemHoursHead.textContent = 'Hours'; */
trElemHoursRow.appendChild(trElemHoursHead);

for (let i=0; i < hours.length; i++){

  const thElemHour = document.createElement('th');
  trElemHoursRow.appendChild(thElemHour);
  /* tdElemHour.setAttribute('scope', 'col'); */
  thElemHour.textContent = (hours[i]);
}

const thElemDayLocTotal = document.createElement('th');
thElemDayLocTotal.textContent = 'Daily Location Total';
trElemHoursRow.appendChild(thElemDayLocTotal);

/* function makeLocationList(store){

  const headingElem = document.createElement('h3');
  headingElem.textContent = store.city;
  locationDivElem.appendChild(headingElem);

  const ulElem = document.createElement('ul');
  locationDivElem.appendChild(ulElem);

  for (let i=0; i < hours.length; i++) {

    store.setCookiePerHour();
    totalCookiesForDay += store.cookiePerHour[i];
    console.log(totalCookiesForDay, store.cookiePerHour[i]);

    const liElem = document.createElement('li');
    liElem.textContent = `${hours[i]} ${store.cookiePerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }

  const liElem = document.createElement('li');
  liElem.textContent = `Total: ${totalCookiesForDay} cookies`;
  ulElem.appendChild(liElem);
} */

function addToTable (store){

  const trElem = document.createElement('tr');
  tableElem.appendChild(trElem);

  const thElem = document.createElement('th');
  thElem.textContent = store.city;
  trElem.appendChild(thElem);

  for (let i=0; i < hours.length; i++) {

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

addToTable(locationSeattle);
addToTable(locationTokyo);
addToTable(locationDubai);
addToTable(locationParis);
addToTable(locationLima);

let trElemTotalsRow = document.createElement('tr');
tableElem.appendChild(trElemTotalsRow);

let thElemTotalsHead = document.createElement('th');
thElemTotalsHead.textContent = 'Totals';
trElemTotalsRow.appendChild(thElemTotalsHead);

let sum = 0;

for (let i=0; i < hours.length; i++){

  const tdElemTotalsHour = document.createElement('td');
  trElemTotalsRow.appendChild(tdElemTotalsHour);
  


  /* tdElemTotalsHour.textContent = (hours[i]); */
  
}

const tdElemTotal = document.createElement('td');
tdElemTotal.textContent = 'Total: ';
trElemTotalsRow.appendChild(tdElemTotal);