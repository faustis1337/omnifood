const h1 = document.querySelector(".heading-primary")

h1.addEventListener("click", function () {
  const h1 = document.querySelector(".heading-primary");
  h1.style.backgroundColor = "red";
  h1.textContent = "Faustas";
  h1.style.padding = "5rem";
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////
// Make mobile nav work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click",function(){
    console.log("click")
    headerEl.classList.toggle("nav-open");
});


function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
