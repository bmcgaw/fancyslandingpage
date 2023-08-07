const hamburgerIcon = document.getElementById("hamburger-icon");
const dropdownMenu = document.getElementById("hamburger-dropdown");
const dropdownLinks = document.getElementsByClassName("dropdown-link");
const pageModal = document.getElementById("page-modal");
const closeModalButton = document.getElementById("close");

//Create logic for dropdown icon to appear and disappear
hamburgerIcon.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hide");
  hamburgerIcon.classList.toggle("hide");
});
//Create logic for dropdown menu to disappear when button is selected
for (const dropdownLink of dropdownLinks)
  dropdownLink.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hide");
    hamburgerIcon.classList.toggle("hide");
  });

//Create and add images for photo gallery
const photoHolder = document.getElementById("photo-holder");
const photoArr = [
  "/photos/appetizer.jpeg",
  "/photos/bbqshrimp.jpeg",
  "/photos/filet.jpeg",
  "/photos/fish.jpeg",
  "/photos/lobster.jpeg",
  "/photos/loin.jpeg",
  "/photos/steak.jpeg",
  "/photos/lambchop2.jpeg",
  "/photos/view.jpeg",
];

let addPhotoToPage = () => {
  for (let i = 0; i < photoArr.length; i++) {
    const imageURL = photoArr[i];
    let img = document.createElement("img");
    img.classList.add("foodPhoto");
    img.setAttribute("src", imageURL);
    photoHolder.append(img);
  }
};

addPhotoToPage();

//Create logic to toggle modal and to make modal appear after the first 5 seconds on the page
const appearModal = setTimeout(() => {
  pageModal.classList.toggle("modal");
}, "5000");

const closeModal = closeModalButton.addEventListener("click", () => {
  pageModal.classList.toggle("modal");
});
