"use strict";
//main screen
const switches = document.querySelectorAll(".switches-card");
const switchesCard1 = document.querySelector(".switches-card1");
const switchesCard2 = document.querySelector(".switches-card2");
const switchesCard3 = document.querySelector(".switches-card3");

for (const switchh of switches) {
  switchh.addEventListener("click", () => {
    clearSwitchActiveClass();
    switchh.classList.add("active");
  });
}
function clearSwitchActiveClass() {
  switches.forEach((switchh) => {
    switchh.classList.remove("active");
  });
}

const mainSlides = document.querySelectorAll(".main-slide");
const mainSlide1 = document.querySelector(".main-slide1");
const mainSlide2 = document.querySelector(".main-slide2");
const mainSlide3 = document.querySelector(".main-slide3");

switchesCard1.addEventListener("click", () => {
  clearSlidesVisibleClass();
  mainSlide1.classList.add("visible");
});
switchesCard2.addEventListener("click", () => {
  clearSlidesVisibleClass();
  mainSlide2.classList.add("visible");
});

switchesCard3.addEventListener("click", () => {
  clearSlidesVisibleClass();
  mainSlide3.classList.add("visible");
});

function clearSlidesVisibleClass() {
  mainSlides.forEach((slide) => {
    slide.classList.remove("visible");
    slide.classList.add("displaynone");
  });
}

//sliders
const newsSlider = new Swiper(".news-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//documents
const docSwitches = document.querySelectorAll(".doc-switches-card");
const docSwitchesCard1 = document.querySelector(".doc-switches-card1");
const docSwitchesCard2 = document.querySelector(".doc-switches-card2");
const docSwitchesCard3 = document.querySelector(".doc-switches-card3");
for (const docswitch of docSwitches) {
  docswitch.addEventListener("click", () => {
    clearDocActiveClass();
    docswitch.classList.add("active");
  });
}

function clearDocActiveClass() {
  docSwitches.forEach((docswitch) => {
    docswitch.classList.remove("active");
  });
}

const docPics = document.querySelectorAll(".doc-pic");
const docPic1 = document.querySelector(".doc-pic1");
const docPic2 = document.querySelector(".doc-pic2");
const docPic3 = document.querySelector(".doc-pic3");
docSwitchesCard1.addEventListener("click", () => {
  clearDocPicActiveClass();
  docPic1.classList.add("active");
  docPic1.classList.remove("none");
});
docSwitchesCard2.addEventListener("click", () => {
  clearDocPicActiveClass();
  docPic2.classList.add("active");
  docPic2.classList.remove("none");
});
docSwitchesCard3.addEventListener("click", () => {
  clearDocPicActiveClass();
  docPic3.classList.add("active");
  docPic3.classList.remove("none");
});

function clearDocPicActiveClass() {
  docPics.forEach((pics) => {
    pics.classList.remove("active");
    pics.classList.add("none");
  });
}

//buttons
//1
const button = document.querySelector(".btn-with-arrow");
const greyArrow = document.querySelector(".grey-arrow");
button.setAttribute("data-full", "false");
button.addEventListener("click", () =>
  textChanger(button.getAttribute("data-full"))
);

function textChanger(full) {
  if (full == "false") {
    button.innerText = "Показать основные";
    button.setAttribute("data-full", "true");
    greyArrow.classList.add("rotate");
  } else {
    button.innerText = "Показать все";
    button.setAttribute("data-full", "false");
    greyArrow.classList.remove("rotate");
  }
}
//2
const button2 = document.querySelector(".btn-with-arrow2");
const greyArrow2 = document.querySelector(".grey-arrow2");
button2.setAttribute("data-full", "false");
button2.addEventListener("click", () =>
  textChanger2(button2.getAttribute("data-full"))
);

function textChanger2(full) {
  if (full == "false") {
    button2.innerText = "Показать основные";
    button2.setAttribute("data-full", "true");
    greyArrow2.classList.add("rotate");
  } else {
    button2.innerText = "Показать все новости";
    button2.setAttribute("data-full", "false");
    greyArrow2.classList.remove("rotate");
  }
}

//mobile documents
const mobSwitches = document.querySelectorAll(".mob-switches-card");
const mobSwitchesCard1 = document.querySelector(".mob-switches-card1");
const mobSwitchesCard2 = document.querySelector(".mob-switches-card2");
const mobSwitchesCard3 = document.querySelector(".mob-switches-card3");
for (const mobswitch of mobSwitches) {
  mobswitch.addEventListener("click", () => {
    clearMobActiveClass();
    mobswitch.classList.add("active");
  });
}

function clearMobActiveClass() {
  mobSwitches.forEach((mobswitch) => {
    mobswitch.classList.remove("active");
  });
}

const mobPics = document.querySelectorAll(".mob-pic");
const mobPic1 = document.querySelector(".mob-pic1");
const mobPic2 = document.querySelector(".mob-pic2");
const mobPic3 = document.querySelector(".mob-pic3");
mobSwitchesCard1.addEventListener("click", () => {
  clearMobPicActiveClass();
  mobPic1.classList.add("active");
  mobPic1.classList.remove("none");
});
mobSwitchesCard2.addEventListener("click", () => {
  clearMobPicActiveClass();
  mobPic2.classList.add("active");
  mobPic2.classList.remove("none");
});
mobSwitchesCard3.addEventListener("click", () => {
  clearMobPicActiveClass();
  mobPic3.classList.add("active");
  mobPic3.classList.remove("none");
});

function clearMobPicActiveClass() {
  mobPics.forEach((pics) => {
    pics.classList.remove("active");
    pics.classList.add("none");
  });
}
//buttons
//1
const button3 = document.querySelector(".btn-with-arrow3");
const greyArrow3 = document.querySelector(".grey-arrow3");
button3.setAttribute("data-full", "false");
button3.addEventListener("click", () =>
  textChanger3(button3.getAttribute("data-full"))
);

function textChanger3(full) {
  if (full == "false") {
    button3.innerText = "Показать основные";
    button3.setAttribute("data-full", "true");
    greyArrow3.classList.add("rotate");
  } else {
    button3.innerText = "Показать все";
    button3.setAttribute("data-full", "false");
    greyArrow3.classList.remove("rotate");
  }
}
//2
const button4 = document.querySelector(".btn-with-arrow4");
const greyArrow4 = document.querySelector(".grey-arrow4");
button4.setAttribute("data-full", "false");
button4.addEventListener("click", () =>
  textChanger4(button4.getAttribute("data-full"))
);

function textChanger4(full) {
  if (full == "false") {
    button4.innerText = "Показать основные";
    button4.setAttribute("data-full", "true");
    greyArrow4.classList.add("rotate");
  } else {
    button4.innerText = "Показать все новости";
    button4.setAttribute("data-full", "false");
    greyArrow4.classList.remove("rotate");
  }
}
//slider mob
const newsSlider2 = new Swiper(".mob-news-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//form
const form = document.getElementById("form-request");
const formButton = document.getElementById("form-button");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(this);
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.id === 101) {
        const message = document.querySelector(".success");
        message.classList.add("visible");
        formButton.classList.add("displaynone");
      }

      console.log(json);
    })
    .catch((err) => console.log(err));
});
//mobile form
const formMob = document.getElementById("mob-form-request");
const formMobButton = document.getElementById("mob-form-button");
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const data1 = new FormData(this);
  const url1 = "https://jsonplaceholder.typicode.com/posts";
  fetch(url1, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data1,
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.id === 101) {
        const message1 = document.querySelector(".mob-success");
        message1.classList.add("visible");
        formMobButton.classList.add("displaynone");
      }

      console.log(json);
    })
    .catch((err) => console.log(err));
});
