$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 3,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    850: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});

var header = document.getElementById("menuHeader");
var close = document.getElementById("close");

function openNav() {
  close.style.zIndex = "3";
  header.classList.remove("d-none");
  header.classList.remove("d-sm-none");
}

function closeNav() {
  close.style.zIndex = "0";
  header.classList.add("d-none");
  header.classList.add("d-sm-none");
}
