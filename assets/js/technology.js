$(document).ready(() => {
  const techDetails = $(".tech-details-texts");
  const techImags = $(".tech-image");
  const techImg1 = $(".tech-img-1");
  const techImg2 = $(".tech-img-2");
  const techImg3 = $(".tech-img-3");
  const techBtns = $(".tech-nav-btn");
  const techBtn1 = $(".tech-btn-1");
  const techBtn2 = $(".tech-btn-2");
  const techBtn3 = $(".tech-btn-3");
  var screenWidth = $(window).width();

  console.log(screenWidth);

  function detectScreenWidth() {
    $(window).resize(function () {
      screenWidth = $(this).width();
      console.log(screenWidth);
    });
  }

  detectScreenWidth();

  function bigScreenData(position) {
    techDetails.each(function () {
      $(this).css("top", position);
    });
    techImags.each(function () {
      $(this).css("left", position);
    });
  }

  function smallScreenData(position) {
    techDetails.each(function () {
      $(this).css("top", "0");
      $(this).css("left", position);
    });
    techImags.each(function () {
      $(this).css("left", position);
    });
  }

  function changeDetails(clickedBtn, position) {
    clickedBtn.click(function () {
      if (screenWidth > 815) {
        $(this).css("left", "0");
        smallScreenData(position);
      } else {
        smallScreenData(position);
      }
      $(this).addClass("tech-nav-btn-active");
      techBtns.not(this).each(function () {
        $(this).removeClass("tech-nav-btn-active");
      });
    });
  }

  function changeTechImg() {
    if (screenWidth <= 1024) {
      techImg1.attr(
        "src",
        "./assets/technology/image-launch-vehicle-landscape.jpg"
      );
      techImg2.attr("src", "./assets/technology/image-spaceport-landscape.jpg");
      techImg3.attr(
        "src",
        "./assets/technology/image-space-capsule-landscape.jpg"
      );
    } else {
      techImg1.attr(
        "src",
        "./assets/technology/image-launch-vehicle-portrait.jpg"
      );
      techImg2.attr("src", "./assets/technology/image-spaceport-portrait.jpg");
      techImg3.attr(
        "src",
        "./assets/technology/image-space-capsule-portrait.jpg"
      );
    }
  }

  changeDetails(techBtn1, "0");
  changeDetails(techBtn2, "-100%");
  changeDetails(techBtn3, "-200%");
  changeTechImg();
  $(window).resize(function () {
    changeTechImg();
  });
});
