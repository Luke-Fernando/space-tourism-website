$(document).ready(() => {
    console.log("Tech Working");

    const techNavBtnGuard = $(".tech-nav-btn-guard");
    const techNavBtn = $(".tech-nav-btn");
    const techSubTopic = $(".tech-details-sub-topic");
    const techTopic = $(".tech-details-topic");
    const techPara = $(".tech-details-para");
    const techImg = $(".tech-image");


    techNavBtnGuard.click(e => {
        $(e.target).parent().addClass("tech-nav-btn-active");
        techNavBtnGuard.not(e.target).parent().removeClass("tech-nav-btn-active");
        console.log($(e.target).index(".tech-nav-btn-guard"));
        $.get("../data.json", data => {
            console.log(data.technology[$(e.target).index(".tech-nav-btn-guard")]);
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
            console.log("OK");
            techImg.attr("src", "./assets/technology/image-launch-vehicle-landscape.jpg")
        } else {
            techImg.attr("src", "./assets/technology/image-launch-vehicle-portrait.jpg")
        }
        console.log("Resize()");
    })
})