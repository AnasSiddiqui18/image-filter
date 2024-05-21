const buttonParent = document.querySelector("#button_parent");
const allButton = document.querySelector("#all-btn");
const animalButton = document.querySelector("#animal-btn");
const birdButton = document.querySelector("#bird-btn");
const natureButton = document.querySelector("#nature-btn");

function filterImages(category: string) {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    if (category === "all" || img.dataset.category === category) {
      img.classList.remove("hidden");
    } else {
      img.classList.add("hidden");
    }
  });
}

buttonParent?.addEventListener("click", (event) => {
  if ((event?.target as HTMLButtonElement).dataset.category !== undefined) {
    filterImages((event?.target as HTMLButtonElement)?.dataset.category!);
  }
});
