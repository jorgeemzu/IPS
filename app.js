const mobileMenu = document.querySelector('.mobile__nav--menu');
const hamburger = document.querySelector('.hamburger');
const mapTiles = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show__menu');
        console.log('owrk')
})

let myMap = L.map('map').setView([29.742026, -95.457421], 16);

L.tileLayer(mapTiles ,{
	maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([29.742026, -95.457421]).addTo(myMap);


// const map = L.map('map', {
// 	center: [0, 0],
// 	zoom: 0,
// 	layers: [
// 		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
// 			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
// 		}),
// 	],
// });

// updateMap = (update_map = [10.700735, -71.621636]) => {
// 	map.setView(update_map, 10);
// 	L.marker(update_map).addTo(map);
// };

