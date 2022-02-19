$(document).ready(() => {

    const techNavBtnGuard = $(".tech-nav-btn-guard");
    const techTopic = $(".tech-details-topic");
    const techPara = $(".tech-details-para");
    const techImg = $(".tech-image");


    techNavBtnGuard.click(e => {
        $(e.target).parent().addClass("tech-nav-btn-active");
        techNavBtnGuard.not(e.target).parent().removeClass("tech-nav-btn-active");
        $.get("https://my-json-server.typicode.com/Ishan-Sanjaya/space-tourism-data/db", data => {
            techTopic.text(data.technology[$(e.target).index(".tech-nav-btn-guard")].name);
            techPara.text(data.technology[$(e.target).index(".tech-nav-btn-guard")].description);
            if ($(window).width() > 815) {
                techImg.attr("src", data.technology[$(e.target).index(".tech-nav-btn-guard")].images.portrait);
            } else {
                techImg.attr("src", data.technology[$(e.target).index(".tech-nav-btn-guard")].images.landscape)
            }
        })
    });
    $(window).resize(() => {
        if ($(window).width() < 815) {
            techImg.attr("src", "./assets/technology/image-launch-vehicle-landscape.jpg")
        } else {
            techImg.attr("src", "./assets/technology/image-launch-vehicle-portrait.jpg")
        }
    })
})