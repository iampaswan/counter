const count = document.querySelector(".count");
const dbtn = document.querySelector("#dBtn");
const rbtn = document.querySelector("#rBtn");
const ibtn = document.querySelector("#iBtn");

let value = 0;

dbtn.addEventListener("click", () => {
  value--;
  count.innerHTML = value;
});

rbtn.addEventListener("click", () => {
  value = 0;
  count.innerHTML = value;
});

ibtn.addEventListener("click", () => {
  value++;
  count.innerHTML = value;
});
