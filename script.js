gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
var crsr = document.querySelector("#crsr")
var page1 = document.querySelector("#page-one")

function btns() {
  var toggle = document.querySelector("#toggle");
  var toggleOpen = document.querySelector("#toggleOpen");
  var toggleClose = document.querySelector("#toggleClose");

  toggleOpen.addEventListener("click", function () {
    toggle.style.right = 0;
    toggleOpen.style.display = "none";
    toggleClose.style.display = "block";
  });

  toggleClose.addEventListener("click", function () {
    toggle.style.right = "-20%";
    toggleOpen.style.display = "block";
    toggleClose.style.display = "none";
  });

  document.getElementById("home").addEventListener("click", function () {
    window.location.href = "#page-one";
  });

  document.getElementById("menswear").addEventListener("click", function () {
    window.location.href = "#page-four";
    toggleOpen.style.display = "none";
    toggleClose.style.display = "none";
    toggle.style.right = "-20%"
    toggleOpen.style.display = "block";
  });

  document.getElementById("womenwear").addEventListener("click", function () {
    window.location.href = "#page-five";
    toggleOpen.style.display = "none";
    toggleClose.style.display = "none";
    toggle.style.right = "-20%"
    toggleOpen.style.display = "block";
  });

  document.getElementById("homedecor").addEventListener("click", function () {
    window.location.href = "#page-six";
    toggleOpen.style.display = "none";
    toggleClose.style.display = "none";
    toggle.style.right = "-20%"
    toggleOpen.style.display = "block";
  });

  document.getElementById("aboutus").addEventListener("click", function () {
    window.location.href = "#page-seven";
    toggleOpen.style.display = "none";
    toggleClose.style.display = "none";
    toggle.style.right = "-20%"
    toggleOpen.style.display = "block";
  });

  document.getElementById("social-1").addEventListener("click", function () {
    window.open("https://www.instagram.com/hm/", '_blank');
  });
  document.getElementById("social-2").addEventListener("click", function () {
    window.open("https://www.facebook.com/hm", '_blank');
  });
  document.getElementById("social-3").addEventListener("click", function () {
    window.open("https://www.youtube.com/user/hennesandmauritz", '_blank');
  });
  document.getElementById("social-4").addEventListener("click", function () {
    window.open("https://in.pinterest.com/hm/", '_blank');
  });

  document.getElementById("footermenswear").addEventListener("click", function () {
    window.location.href = "#page-four";
  });
  document.getElementById("footerwomenwear").addEventListener("click", function () {
    window.location.href = "#page-five";
  });
  document.getElementById("footerhomedecor").addEventListener("click", function () {
    window.location.href = "#page-six";
  });
  document.getElementById("footeraboutus").addEventListener("click", function () {
    window.location.href = "#page-seven";
  });
}
btns();

function imgHover(){
  var AllImgsHover = document.querySelectorAll(".hover");

  AllImgsHover.forEach(function(img) {
    img.addEventListener("mouseenter", function() {
      crsr.style.height = "4vw";
      crsr.style.width = "4vw";
      crsr.innerHTML = 'View More';
      img.style.filter = "grayscale(100%)";
    });
  
    img.addEventListener("mouseleave", function() {
      crsr.style.height = "";
      crsr.style.width = "";
      crsr.innerHTML = '';
      img.style.filter = "";
    });
  });
}
imgHover()

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.5,
      // delay:.2,
      ease: "power2.out"
    });
  });
}
cursorAnimation();


function loadingAnimation() {
  tl.set(document.body, {
    overflow: "hidden",
  });

  tl.from(".texth1 h1",{
    y:"300px",
    duration:1,
    opacity:1
  })
  tl.from(".imgcontainer img",{
    y:"-120%",
    delay:.5,
    duration:1,
    stagger:.2,
    opacity:1
  })

  tl.to(".imgcontainer img",{
    y:"120%",
    delay:.5,
    duration:1,
    // stagger:.5,
    opacity:0
  })

  tl.to("#loader", {
    y: "-100%",
    delay:.3,
    duration: 1,
    // delay: 1.5,
  },"one");

  tl.to("#loader", {
    display: "none",
  });
  tl.set(document.body, {
    overflow: "visible",
  });
}
loadingAnimation();

function hero() {
  // var tl2 = gsap.timeline()
 
  tl.from(
    "#img-container",
    {
      // y: "100%",
      opacity:0,
      // delay:1.2,
      duration: .5,
      ease: "power2.out",
    },"hero");
  tl.from(".hero-texts h1",{
    y:300,
  },"hero")
  tl.from(".hero-texts2 p",{
    y:150,
  },"hero")
  tl.from(".hero-texts-circle",{
    opacity:0,
  },"hero")

  // const mediaQuery = window.matchMedia("(max-width: 600px)");
  //   if (mediaQuery.matches) {
  //     tl.from(
  //       "#img-container",
  //       {
  //         ease: "power2.out",
  //       },
  //       "one"
  //     );
    
  //   }

  // tl.from(
  //   "#nav",
  //   {
  //     y: "-100px",
  //     duration: 1,
  //     ease: "power2.out",
  //   },
  //   "one"
  // );

  gsap.to("#img-container video", {
    scale: 1, // Scale down to original size
    duration: 2,
    ease: "none",
    scrollTrigger: {
      trigger: "#page-two",
      scroller: "body",
      markers: false,
      start: "top 70%",
      end: "+=400px",
      scrub: 1,
    },
  });

  gsap.to("#img-container", {
    top: 0,
    borderRadius:"0 0 0 0",
    width:"100%",
    height:"100%",
    duration: 2,
    ease: "none",
    scrollTrigger: {
      trigger: "#page-two",
      scroller: "body",
      markers: false,
      start: "top 100%",
      // end: "+=650px",
      end:"top 20%",
      scrub: 1,
    },
  });
}
hero();



// MEN
function men(){
  gsap.from("#men-section-imgcontainer1 img", {
    y:-800,
    // duration:1,
    // stagger:.3,
    ease:"power5.out",
    scrollTrigger: {
      trigger: "#mens-section",
      scroller: "body",
      markers: false,
      start: "top 80%",
      end: "top 60%",
      scrub: 5,
    },
  },"men");
  gsap.from("#men-section-imgcontainer", {
    y:"-150%",
    // duration:.5,
    // stagger:.3,
    ease:"power5.out",
    scrollTrigger: {
      trigger: "#mens-section",
      scroller: "body",
      markers: false,
      start: "top 80%",
      end: "top 60%",
      scrub: 5,
    },
  },"men");

  // gsap.to("#men2", {
  //   filter: "grayscale(0%)",
  //   delay:.2,
  //   // stagger:.3,
  //   ease:"power5.out",
  //   scrollTrigger: {
  //     trigger: "#mens-section",
  //     scroller: "body",
  //     markers: false,
  //     start: "top 0%",
  //     end: "top 20%",
  //     scrub: 5,
  //   },
  // });
  // gsap.to("#men1", {
  //   filter: "grayscale(0%)",
  //   delay:.2,
  //   // stagger:.3,
  //   ease:"power5.out",
  //   scrollTrigger: {
  //     trigger: "#mens-section",
  //     scroller: "body",
  //     markers: false,
  //     start: "top 0%",
  //     end: "top 20%",
  //     scrub: 5,
  //   },
  // });
}
men()

// WOMEN
function women() {
  gsap.from(
    ".women-section-imgcontainer",
    {
      y: "-120%",
      // duration:.5,
      // stagger:.3,
      ease: "power5.out",
      scrollTrigger: {
        trigger: "#women-section",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 60%",
        scrub: 5,
      },
    },
    "women"
  );

  // gsap.to(
  //   ".women-section-imgcontainer img",
  //   {
  //     filter: "grayscale(0%)",
  //     delay: 1,
  //     // duration:.5,
  //     // stagger:.3,
  //     ease: "power5.out",
  //     scrollTrigger: {
  //       trigger: "#women-section",
  //       scroller: "body",
  //       markers: false,
  //       start: "top 0%",
  //       end: "top 60%",
  //       scrub: 5,
  //     },
  //   },
  //   "women"
  // );

  gsap.from(
    "#women-section-heading h1",
    {
      y: 500,
      delay: 1.5,
      opacity: 0,
      // duration:.5,
      // stagger:.3,
      ease: "power5.out",
      scrollTrigger: {
        trigger: "#women-section",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 60%",
        scrub: 5,
      },
    },
    "women"
  );
  gsap.from(
    "#women-section-para h3",
    {
      y: 500,
      opacity: 0,
      // duration:.5,
      // stagger:.3,
      ease: "power5.out",
      scrollTrigger: {
        trigger: "#women-section",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 60%",
        scrub: 5,
      },
    },
    "women"
  );
}
women();

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  var cards = document.querySelectorAll(".shirt");
  var cardOverlays = document.querySelectorAll(".overlayimg");

  cards.forEach((card, index) => {
    var cardOverlay = cardOverlays[index];

    card.addEventListener("mouseenter", function () {
      card.style.opacity = 0;
      cardOverlay.style.opacity = 1;
    });

    card.addEventListener("mouseleave", function () {
      card.style.opacity = 1;
      cardOverlay.style.opacity = 0;
    });
  });


  var swiperSection = document.querySelectorAll(".swiper");

  swiperSection.forEach(function(img) {
    img.addEventListener("mouseenter", function() {
      crsr.style.height = "4vw";
      crsr.style.width = "4vw";
      crsr.innerHTML = 'drag';
    });
  
    img.addEventListener("mouseleave", function() {
      crsr.style.height = "";
      crsr.style.width = "";
      crsr.innerHTML = '';
    });
  });
}
swiper();

// PAGE 3
function pageThree() {
  gsap.from(".page-three-h1s h1", {
    y:300,
    // duration:.5,
    // stagger:.3,
    // ease:"power5.out",
    scrollTrigger: {
      trigger: "#page-three",
      scroller: "body",
      markers: false,
      start: "top 80%",
      end: "top 60%",
      scrub: 5,
    },
  });
}
pageThree()

// PAGE 6
function pageSix(){
  gsap.from(".h1s h1", {
    y:300,
    // duration:.5,
    // stagger:.3,
    // ease:"power5.out",
    scrollTrigger: {
      trigger: "#page-six",
      scroller: "body",
      markers: false,
      start: "top 70%",
      end: "top 60%",
      scrub: 5,
    },
  });
  gsap.from(
    ".img img",
    {
      y: "-150%",
      delay:.7,
      duration:1,
      // stagger:.3,
      // ease:"power5.out",
      scrollTrigger: {
        trigger: "#page-six",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 60%",
        scrub: 5,
      },
    },
  );
}
pageSix()


// PAGE 7
function pageSeven() {
  gsap.from(
    ".page-seven-h1s h1",
    {
      y: 300,
      // duration:.5,
      // stagger:.3,
      // ease:"power5.out",
      scrollTrigger: {
        trigger: "#page-seven",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 60%",
        scrub: 5,
      },
    },
    "pageseven"
  );
  gsap.from(
    ".page-seven-h1s h3",
    {
      y: 300,
      // duration:.5,
      // stagger:.3,
      // ease:"power5.out",
      scrollTrigger: {
        trigger: "#page-seven",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 60%",
        scrub: 5,
      },
    },
    "pageseven"
  );
  gsap.from(
    "#seven1 img",
    {
      y: "-200%",
      // duration:.5,
      // stagger:.3,
      // ease:"power5.out",
      scrollTrigger: {
        trigger: "#page-seven",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
      },
    },
    "founder"
  );
  gsap.from(".page-seven-p p", {
    y: 300,
    // duration:.5,
    // stagger:.3,
    // ease:"power5.out",
    scrollTrigger: {
      trigger: "#page-seven-2",
      scroller: "body",
      // markers: true,
      start: "top 70%",
      end: "top 60%",
      scrub: 5,
    },
  });
}
pageSeven();


























// function pageThree() {
//   const mediaQuery = window.matchMedia("(min-width: 600px)");
//   if (mediaQuery.matches) {
//     gsap.from(".page-three-h1s h1", {
//       y:300,
//       // duration:.5,
//       // stagger:.3,
//       // ease:"power5.out",
//       scrollTrigger: {
//         trigger: "#page-three",
//         scroller: "body",
//         markers: false,
//         start: "top 80%",
//         end: "top 60%",
//         scrub: 5,
//       },
//     });
//   }
// }
// pageThree()

// function men() {
//   const mediaQuery = window.matchMedia("(min-width: 600px)");
//   if (mediaQuery.matches) {
//     gsap.from("#men-section-imgcontainer1 img", {
//       y:-800,
//     // duration:1,
//     // stagger:.3,
//     ease:"power5.out",
//     scrollTrigger: {
//       trigger: "#mens-section",
//       scroller: "body",
//       markers: false,
//       start: "top 80%",
//       end: "top 60%",
//       scrub: 5,
//     },
//     }, "men");
//     gsap.from("#men-section-imgcontainer", {
//       y:"-120%",
//     // duration:.5,
//     // stagger:.3,
//     ease:"power5.out",
//     scrollTrigger: {
//       trigger: "#mens-section",
//       scroller: "body",
//       markers: false,
//       start: "top 80%",
//       end: "top 60%",
//       scrub: 5,
//     },
//     }, "men");
//   }
// }
// men()

// function women() {
//   const mediaQuery = window.matchMedia("(min-width: 600px)");
//   if (mediaQuery.matches) {
//     gsap.from(
//       ".women-section-imgcontainer",
//       {
//         y: "-120%",
//         // duration:.5,
//         // stagger:.3,
//         ease: "power5.out",
//         scrollTrigger: {
//           trigger: "#women-section",
//           scroller: "body",
//           markers: false,
//           start: "top 80%",
//           end: "top 60%",
//           scrub: 5,
//         },
//       },
//       "women"
//     );
//     gsap.from(
//       "#women-section-heading h1",
//       {
//         y: 500,
//         delay: 1.5,
//         opacity: 0,
//         // duration:.5,
//         // stagger:.3,
//         ease: "power5.out",
//         scrollTrigger: {
//           trigger: "#women-section",
//           scroller: "body",
//           markers: false,
//           start: "top 80%",
//           end: "top 60%",
//           scrub: 5,
//         },
//       },
//       "women"
//     );
//     gsap.from(
//       "#women-section-para h3",
//       {
//         y: 500,
//         opacity: 0,
//         // duration:.5,
//         // stagger:.3,
//         ease: "power5.out",
//         scrollTrigger: {
//           trigger: "#women-section",
//           scroller: "body",
//           markers: false,
//           start: "top 80%",
//           end: "top 60%",
//           scrub: 5,
//         },
//       },
//       "women"
//     );
//   }
// }

// function swiper() {
//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1.5,
//     spaceBetween: 10,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       600: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 40,
//       },
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 50,
//       },
//     },
//   });

//   var cards = document.querySelectorAll(".shirt");
//   var cardOverlays = document.querySelectorAll(".overlayimg");

//   cards.forEach((card, index) => {
//     var cardOverlay = cardOverlays[index];

//     card.addEventListener("mouseenter", function () {
//       card.style.opacity = 0;
//       cardOverlay.style.opacity = 1;
//     });

//     card.addEventListener("mouseleave", function () {
//       card.style.opacity = 1;
//       cardOverlay.style.opacity = 0;
//     });
//   });


//   var swiperSection = document.querySelectorAll(".swiper");

//   swiperSection.forEach(function(img) {
//     img.addEventListener("mouseenter", function() {
//       crsr.style.height = "4vw";
//       crsr.style.width = "4vw";
//       crsr.innerHTML = 'drag';
//     });
  
//     img.addEventListener("mouseleave", function() {
//       crsr.style.height = "";
//       crsr.style.width = "";
//       crsr.innerHTML = '';
//     });
//   });
// }
// swiper();

// function pageSix() {
//   const mediaQuery = window.matchMedia("(min-width: 600px)");
//   if (mediaQuery.matches) {
//     gsap.from(".h1s h1", {
//       y:300,
//       // duration:.5,
//       // stagger:.3,
//       // ease:"power5.out",
//       scrollTrigger: {
//         trigger: "#page-six",
//         scroller: "body",
//         markers: false,
//         start: "top 70%",
//         end: "top 60%",
//         scrub: 5,
//       },
//     });
//     gsap.from(
//       ".img img",
//       {
//         y: "-100%",
//         delay:.7,
//         duration:1,
//         // stagger:.3,
//         // ease:"power5.out",
//         scrollTrigger: {
//           trigger: "#page-six",
//           scroller: "body",
//           markers: false,
//           start: "top 50%",
//           end: "top 60%",
//           scrub: 5,
//         },
//       },
//     );
//   }
// }
// pageSix()

// function pageSeven() {
//   const mediaQuery = window.matchMedia("(min-width: 600px)");
//   if (mediaQuery.matches) {
//     gsap.from(
//       ".page-seven-h1s h1",
//       {
//         y: 300,
//         // duration:.5,
//         // stagger:.3,
//         // ease:"power5.out",
//         scrollTrigger: {
//           trigger: "#page-seven",
//           scroller: "body",
//           markers: false,
//           start: "top 70%",
//           end: "top 60%",
//           scrub: 5,
//         },
//       },
//       "pageseven"
//     );
//     gsap.from(
//       ".page-seven-h1s h3",
//       {
//         y: 300,
//         // duration:.5,
//         // stagger:.3,
//         // ease:"power5.out",
//         scrollTrigger: {
//           trigger: "#page-seven",
//           scroller: "body",
//           markers: false,
//           start: "top 70%",
//           end: "top 60%",
//           scrub: 5,
//         },
//       },
//       "pageseven"
//     );
//     gsap.from(
//       "#seven1 img",
//       {
//         y: "-200%",
//         // duration:.5,
//         // stagger:.3,
//         // ease:"power5.out",
//         scrollTrigger: {
//           trigger: "#page-seven",
//           scroller: "body",
//           markers: false,
//           start: "top 60%",
//           end: "top 60%",
//           scrub: 5,
//         },
//       },
//       "founder"
//     );
//     gsap.from(".page-seven-p p", {
//       y: 300,
//       // duration:.5,
//       // stagger:.3,
//       // ease:"power5.out",
//       scrollTrigger: {
//         trigger: "#page-seven-2",
//         scroller: "body",
//         // markers: true,
//         start: "top 70%",
//         end: "top 60%",
//         scrub: 5,
//       },
//     });
//   }
  
// }
// pageSeven();