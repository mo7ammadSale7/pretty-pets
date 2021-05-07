import FilterPets from "./FilterPets";
import Pets from "./Pets";
import Stories from "./Stories";

document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".burger").classList.toggle("is-visible-mobile");
});

document.querySelector(".is-searchResults").innerHTML = Pets();
document.querySelector("#stories").innerHTML = Stories();

document
  .querySelector(".meetYourMatchــform")
  .addEventListener("submit", function (e) {
    document.querySelector(".is-searchResults").innerHTML = FilterPets(e);
  });
