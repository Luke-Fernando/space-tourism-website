$(document).ready(() => {
  // const planetName = $(".planet-name");
  // const planetImage = $(".planet-image");
  // const planetDescription = $(".planet-details-paragraph");
  // const planetDistance = $(".avg-distance");
  // const planetTravelTime = $(".travel-time");

  // let loadPlanet = (clickedId, jsonIndex) => {
  //     $(`#${clickedId}`).click(e => {
  //         $(".planet-nav-tab-item").not(e.target).removeClass("active-planet-link");
  //         $(e.target).addClass("active-planet-link");
  //         $.get("https://competent-ptolemy-d4ab42.netlify.app/db.json", data => {
  //             planetName.text(data.destinations[jsonIndex].name);
  //             planetImage.attr("src", data.destinations[jsonIndex].images.webp);
  //             planetDescription.text(data.destinations[jsonIndex].description);
  //             planetDistance.text(data.destinations[jsonIndex].distance);
  //             planetTravelTime.text(data.destinations[jsonIndex].travel);
  //         })
  //     })
  // };

  // loadPlanet("moon", 0);
  // loadPlanet("mars", 1);
  // loadPlanet("europa", 2);
  // loadPlanet("titan", 3);

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
