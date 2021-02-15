const mobileMenu = document.querySelector(".mobile__nav--menu");
const hamburger = document.querySelector(".hamburger");
const servicesBtn = document.querySelector(".mobile__menu--item p");
const dropdownMobile = document.querySelector(".mobile__dropdown");
const dropDownArrow = document.querySelector(".mobile__menu--item i");
const mapTiles = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
const fader = document.querySelectorAll(".fader");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show__menu");
  console.log("owrk");
});

servicesBtn.addEventListener("click", () => {
  dropdownMobile.classList.toggle("show__dropdown--mobile");
  dropDownArrow.classList.toggle("rotate__arrow");
});

const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("fade__apear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

// fadeLeft.forEach(fader => {
//   appearOnScroll.observe(fader);
// });

// fadeRight.forEach(fader => {
//   appearOnScroll.observe(fader);
// });

fader.forEach(fader => {
  appearOnScroll.observe(fader);
});

let myMap = L.map("map").setView([29.742026, -95.457421], 16);

L.tileLayer(mapTiles, {
  maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([29.742026, -95.457421]).addTo(myMap);
