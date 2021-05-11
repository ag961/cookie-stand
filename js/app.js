'use strict';

const locationSeattle = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  cookiePerHour:[],
  hours: ['6am: ', '7am: ','8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

  setCookiePerHour(){
    this.cookiePerHour.push(Math.ceil(randomCustomers(this.minCust,this.maxCust) * this.avgCookiePerCust));
  },
};

const locationTokyo = {

  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  cookiePerHour: [],
  hours: ['6am: ', '7am: ','8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

  setCookiePerHour(){
    this.cookiePerHour.push(Math.ceil(randomCustomers(this.minCust,this.maxCust) * this.avgCookiePerCust));
  },
};
const locationDubai = {

  city: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiePerCust: 3.7,
  cookiePerHour: [],
  hours: ['6am: ', '7am: ','8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

  setCookiePerHour(){
    this.cookiePerHour.push(Math.ceil(randomCustomers(this.minCust,this.maxCust) * this.avgCookiePerCust));
  },
};

const locationParis = {

  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 2.3,
  cookiePerHour: [],
  hours: ['6am: ', '7am: ','8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

  setCookiePerHour(){
    this.cookiePerHour.push(Math.ceil(randomCustomers(this.minCust,this.maxCust) * this.avgCookiePerCust));
  },
};

const locationLima = {

  city: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookiePerCust: 4.6,
  cookiePerHour: [],
  hours: ['6am: ', '7am: ','8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

  setCookiePerHour(){
    this.cookiePerHour.push(Math.ceil(randomCustomers(this.minCust,this.maxCust) * this.avgCookiePerCust));
  },
};

function randomCustomers(minCust,maxCust){
  return Math.floor(Math.random()*(maxCust-minCust+1)+minCust);
}

const locationDivElem = document.getElementById('location');

function makeLocationList(store){

  const headingElem = document.createElement('h3');
  headingElem.textContent = store.city;
  locationDivElem.appendChild(headingElem);

  const ulElem = document.createElement('ul');
  locationDivElem.appendChild(ulElem);

  let totalCookiesForDay = 0;
  for (let i=0; i < store.hours.length; i++) {

    store.setCookiePerHour();
    totalCookiesForDay += store.cookiePerHour[i];
    console.log(totalCookiesForDay, store.cookiePerHour[i]);
    const liElem = document.createElement('li');
    liElem.textContent = `${store.hours[i]} ${store.cookiePerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }

  const liElem = document.createElement('li');
  liElem.textContent = `Total: ${totalCookiesForDay}`;
  ulElem.appendChild(liElem);
}

makeLocationList(locationSeattle);
makeLocationList(locationTokyo);
makeLocationList(locationDubai);
makeLocationList(locationParis);
makeLocationList(locationLima);
