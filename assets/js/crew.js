$(document).ready(() => {
    const crewNavBtn = $(".crew-nav-btn");
    const profesion = $(".profesion");
    const crewMemName = $(".crew-member-name");
    const crewMemDetails = $(".crew-member-details");
    const crewPerImg = $(".crew-person-image");

    crewNavBtn.click(e => {
        crewNavBtn.not(e.target).removeClass("crew-active");
        $(e.target).addClass("crew-active");

        $.get("../data.json", data => {
            console.log(data.crew[crewNavBtn.index(e.target)]);
            profesion.text(data.crew[crewNavBtn.index(e.target)].role);
            crewMemName.text(data.crew[crewNavBtn.index(e.target)].name);
            crewMemDetails.text(data.crew[crewNavBtn.index(e.target)].bio);
            crewPerImg.attr("src", data.crew[crewNavBtn.index(e.target)].images.webp);
        })

        console.log(crewNavBtn.index(e.target));
    })
})