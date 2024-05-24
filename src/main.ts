const buttonParent = document.querySelector("#button_parent");
const images = document.querySelectorAll("img");

function filterImages(category: string) {
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
