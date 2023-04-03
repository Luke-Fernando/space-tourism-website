$(document).ready(() => {
  const planetImg = $(".planet-image-margine");
  const planetName = $(".planet-name-margin");
  const planetDes = $(".planet-description-margin");
  const planetNumDetails = $(".planet-num-details-margin");
  const planetNavBtns = $(".planet-nav-tab-item");
  const moonBtn = $("#moon");
  const marsBtn = $("#mars");
  const europaBtn = $("#europa");
  const titanBtn = $("#titan");

  function changePlanet(planetBtn, marginChange) {
    planetBtn.click(function () {
      $(this).addClass("active-planet-link");
      planetNavBtns.not(this).each(function () {
        $(this).removeClass("active-planet-link");
      });
      planetImg.css("margin-left", marginChange);
      planetName.css("margin-left", marginChange);
      planetDes.css("margin-left", marginChange);
      planetNumDetails.css("margin-left", marginChange);
    });
  }

  changePlanet(moonBtn, "0");
  changePlanet(marsBtn, "-100%");
  changePlanet(europaBtn, "-200%");
  changePlanet(titanBtn, "-300%");
});
