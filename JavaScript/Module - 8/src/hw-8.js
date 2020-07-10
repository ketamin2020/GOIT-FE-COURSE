import images from "./gallery-items.js";
const itemTag = document.querySelector(".js-gallery");
const openModal = document.querySelector(".js-lightbox");
const openModalImg = document.querySelector(".lightbox__image");
const btnClose = document.querySelector("button[data-action='close-lightbox']");
const createGalleryItem = (image) => {
  const createContainerTag = document.createElement("li");
  createContainerTag.classList.add("gallery__item");
  const createLinkTag = document.createElement("a");
  createLinkTag.classList.add("gallery__link");
  createLinkTag.setAttribute("href", image.original);
  const createImgTag = document.createElement("img");
  createImgTag.classList.add("gallery__image");
  createImgTag.setAttribute("src", image.preview);
  createImgTag.setAttribute("data-source", image.original);
  createImgTag.setAttribute("alt", image.description);
  createLinkTag.appendChild(createImgTag);
  createContainerTag.appendChild(createLinkTag);
  return createContainerTag;
};
const galleryItem = images.map((image) => createGalleryItem(image));
itemTag.append(...galleryItem);

itemTag.addEventListener("click", onClickTargetImg);
itemTag.addEventListener("click", addClassOnClick);
btnClose.addEventListener("click", removeClassOnClick);
window.addEventListener("keydown", pressOnKeyboard);
openModal.addEventListener("click", closeModalOnClick);

function onClickTargetImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const replaceAtribute = (event.target.src = event.target.dataset.source);
  openModalImg.src = replaceAtribute;
}

function addClassOnClick(event) {
  openModal.classList.add("is-open");
}

function removeClassOnClick(event) {
  openModal.classList.remove("is-open");
  openModalImg.src = "";
}

function closeModalOnClick(event) {
  if (event.target.nodeName !== "IMG") {
    removeClassOnClick();
  }
}

function pressOnKeyboard(event) {
  if (event.code == "ArrowRight") {
    nextImg();
  } else if (event.code == "ArrowLeft") {
    prevImg();
  } else if (event.key === "Escape") {
    removeClassOnClick();
  }
}

function nextImg() {
  const arrLinks = images.map((image) => image.original);
  const currentImage = arrLinks.findIndex((el) => el === openModalImg.src);
  if (currentImage !== arrLinks.length - 1) {
    const nextImg = arrLinks[currentImage + 1];
    openModalImg.src = nextImg;
  } else if (currentImage + 1 === arrLinks.length) {
    removeClassOnClick();
  }
}

function prevImg() {
  const arrLinks = images.map((image) => image.original);
  const currentImage = arrLinks.findIndex((el) => el === openModalImg.src);
  if (currentImage !== 0) {
    const prevImg = arrLinks[currentImage - 1];
    openModalImg.src = prevImg;
  } else if (currentImage === 0) {
    removeClassOnClick();
  }
}
