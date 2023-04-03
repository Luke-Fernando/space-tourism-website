$(document).ready(() => {
  const crewBtns = $(".crew-nav-btn");
  const crewBtn1 = $("#first-crew-member-btn");
  const crewBtn2 = $("#second-crew-member-btn");
  const crewBtn3 = $("#third-crew-member-btn");
  const crewBtn4 = $("#fourth-crew-member-btn");
  const crewTexts = $(".crew-texts-margin");
  const crewPerson = $(".crew-person-margin");

  function changePerson(crewBtn, marginChange) {
    crewBtn.click(function () {
      $(this).addClass("crew-active");
      crewBtns.not(this).each(function () {
        $(this).removeClass("crew-active");
      });
      crewTexts.css("margin-left", marginChange);
      crewPerson.css("margin-left", marginChange);
    });
  }

  changePerson(crewBtn1, "0");
  changePerson(crewBtn2, "-100%");
  changePerson(crewBtn3, "-200%");
  changePerson(crewBtn4, "-300%");
});
