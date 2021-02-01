const mobileMenu = document.querySelector('.mobile__nav--menu');
const hamburger = document.querySelector('.hamburger');
const servicesBtn = document.querySelector('.mobile__menu--item p')
const dropdownMobile = document.querySelector('.mobile__dropdown')
const dropDownArrow = document.querySelector('.mobile__menu--item i') 
const mapTiles = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";


hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show__menu');
        console.log('owrk')
})

servicesBtn.addEventListener('click', () => {
        dropdownMobile.classList.toggle('show__dropdown--mobile')
        dropDownArrow.classList.toggle('rotate__arrow')
})

let myMap = L.map('map').setView([29.742026, -95.457421], 16);

L.tileLayer(mapTiles ,{
	maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([29.742026, -95.457421]).addTo(myMap);



