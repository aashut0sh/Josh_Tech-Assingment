var container = document.querySelector(".modal__Box");
var closeBtn = document.querySelector(".close-modal");
var modalBoxContent = document.querySelector(".modal__Box--content");
var modalBoxContentIMG = document.querySelector(
  ".modal__Box--content-active-img"
);

var images = document.querySelectorAll(".image-slider");
var videos = document.querySelectorAll(".video-slider");

var videosSource = [
  "https://www.youtube.com/embed/DHt0cnSk0Ww",
  "https://www.youtube.com/embed/oyzJsfGbd4A",
  "https://www.youtube.com/embed/yOcYRh6cvqk",
  "https://www.youtube.com/embed/JrjpYGoAbnk",
];

closeBtn.addEventListener("click", () => {
  container.style.display = "none";
  modalBoxContentIMG.innerHTML = "";
});

function nextImg() {
  var modalActiveImg = document.querySelector(".modal-active-image");
  var id = modalActiveImg.getAttribute("id");
  let currSlide = Number(id.substr(-1));
  if (currSlide < images.length - 1) {
    modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${
      currSlide + 1
    }" src="${images[currSlide + 1].src}">`;
  } else {
    modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${0}" src="${
      images[0].src
    }">`;
  }
}

function nextVid() {
  var modalActiveImg = document.querySelector(".modal-active-image");
  var id = modalActiveImg.getAttribute("id");
  let currSlide = Number(id.substr(-1));
  if (currSlide < images.length - 1) {
    modalBoxContentIMG.innerHTML = `<iframe class="modal-active-image" id="video-${
      currSlide + 1
    }" src="${videosSource[currSlide + 1]}"></iframe>`;
  } else {
    modalBoxContentIMG.innerHTML = `<iframe class="modal-active-image" id="video-${0}" src="${
      videosSource[0]
    }"></iframe>`;
  }
}

function prevImg() {
  var modalActiveImg = document.querySelector(".modal-active-image");
  var id = modalActiveImg.getAttribute("id");
  let currSlide = Number(id.substr(-1));
  if (currSlide > 0) {
    modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${
      currSlide - 1
    }" src="${images[currSlide - 1].src}">`;
  } else {
    modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${
      images.length - 1
    }" src="${images[0].src}">`;
  }
}

function prevVid() {
  var modalActiveImg = document.querySelector(".modal-active-image");
  var id = modalActiveImg.getAttribute("id");
  let currSlide = Number(id.substr(-1));
  if (currSlide > 0) {
    modalBoxContentIMG.innerHTML = `<iframe class="modal-active-image" id="video-${
      currSlide - 1
    }" src="${videosSource[currSlide - 1]}"></iframe>`;
  } else {
    modalBoxContentIMG.innerHTML = `<iframe class="modal-active-image" id="video-${
      videos.length - 1
    }" src="${videosSource[videosSource.length - 1]}"></iframe>`;
  }
}

function openModal(name) {
  container.style.display = "flex";
  if (name.id.charAt(0) == "p") {
    modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="${name.id}" src="${name.src}">`;
  } else {
    modalBoxContentIMG.innerHTML = `<iframe class="modal-active-image" id="${
      name.id
    }" src="${videosSource[Number(name.id.substr(-1))]}"></iframe>`;
  }
}

function changeModal(img) {
  openModal(img);
}

function prev(e) {
  var modalActiveImg = document.querySelector(".modal-active-image");
  var id = modalActiveImg.getAttribute("id");
  if (id.charAt(0) == "p") {
    prevImg();
  } else {
    prevVid();
  }
}

function next(e) {
  var modalActiveImg = document.querySelector(".modal-active-image");
  var id = modalActiveImg.getAttribute("id");
  if (id.charAt(0) == "p") {
    nextImg();
  } else {
    nextVid();
  }
}


document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if(e.keyCode == '37') {
    prev(e);
  } 
  else if(e.keyCode == '39') {
    next(e);
  }
}