const atrr = [
  { text: "Days", atributetext: "days" },
  { text: "Hours", atributetext: "hours" },
  { text: "Minutes", atributetext: "minutes" },
  { text: "Seconds", atributetext: "seconds" },
];

function createContainer(id) {
  const bodyRef = document.querySelector("body");
  const createContainerTag = document.createElement("div");
  createContainerTag.classList.add("timer");
  createContainerTag.id = id;
  bodyRef.append(createContainerTag);
}

const createGalleryItem = (atr) => {
  const createTag = document.createElement("div");
  createTag.classList.add("field");
  const createSpan = document.createElement("span");
  createSpan.classList.add("value");
  createSpan.setAttribute("data-value", atr.atributetext);
  const createLabel = document.createElement("span");
  createLabel.classList.add("label");
  createLabel.innerText = atr.text;
  createTag.append(createSpan, createLabel);
  return createTag;
};

const galleryItem = atrr.map((atr) => createGalleryItem(atr));

export { atrr, createContainer, createGalleryItem, galleryItem };
