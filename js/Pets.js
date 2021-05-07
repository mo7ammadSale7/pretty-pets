import { pets } from "./db";

const Pets = function render() {
  return `
        ${pets
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
export default Pets;
