$(document).ready(() => {

    const planetName = $(".planet-name");
    const planetImage = $(".planet-image");
    const planetDescription = $(".planet-details-paragraph");
    const planetDistance = $(".avg-distance");
    const planetTravelTime = $(".travel-time");

    let loadPlanet = (clickedId, jsonIndex) => {
        $(`#${clickedId}`).click(e => {
            $(".planet-nav-tab-item").not(e.target).removeClass("active-planet-link");
            $(e.target).addClass("active-planet-link");
            $.get("https://competent-ptolemy-d4ab42.netlify.app/db.json", data => {
                planetName.text(data.destinations[jsonIndex].name);
                planetImage.attr("src", data.destinations[jsonIndex].images.webp);
                planetDescription.text(data.destinations[jsonIndex].description);
                planetDistance.text(data.destinations[jsonIndex].distance);
                planetTravelTime.text(data.destinations[jsonIndex].travel);
            })
        })
    };

    loadPlanet("moon", 0);
    loadPlanet("mars", 1);
    loadPlanet("europa", 2);
    loadPlanet("titan", 3);
})