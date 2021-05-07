import { pets } from "./db";

const FilterPets = function render(e) {
  e.preventDefault();
  const searchInput = document.querySelector('input[name="search"]').value;
  let p = pets.filter((pet) => pet.address.city.includes(searchInput));
  return `
        ${p
          .map((pet) => {
            return `<div class="widget">
          <div class="widget__image">
              <img src="${pet.image}" alt="pet image">
          </div>
          <div class="widget__desc">
              <h4>${pet.name}</h4>
              <p>${pet.gender} | ${pet.age}</p>
              <p>${pet.address.city}, ${pet.address.country}</p>
          </div>
      </div>`;
          })
          .join("")}`;
};
export default FilterPets;
