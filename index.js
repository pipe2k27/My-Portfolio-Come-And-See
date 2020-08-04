// jshint esversion:6
if (screen.width > 1366) {
  $(".sm").remove();
  $(".md").remove();
} else if (screen.width < 1367 && screen.width > 700) {
  $(".lg").remove();
  $(".sm").remove();
} else {
  $(".lg").remove();
  $(".md").remove();
}

$(".pf").hover(function() {
  $(this).addClass("big");
  $(".pf .language").addClass("appear");
  $(".pf .logo").addClass("move-up");

}, function() {
  $(this).removeClass("big");
  $(".pf .language").removeClass("appear");
  $(".pf .logo").removeClass("move-up");

});

$(".pa").hover(function() {
  $(this).addClass("big");
  $(".pa .language").addClass("appear");
  $(".pa .logo").addClass("move-up");

}, function() {
  $(this).removeClass("big");
  $(".pa .language").removeClass("appear");
  $(".pa .logo").removeClass("move-up");

});

$(".pb").hover(function() {
  $(this).addClass("big");
  $(".pb .language").addClass("appear");
  $(".pb .logo").addClass("move-up");

}, function() {
  $(this).removeClass("big");
  $(".pb .language").removeClass("appear");
  $(".pb .logo").removeClass("move-up");


});

$(".pc").hover(function() {
  $(this).addClass("big");
  $(".pc .language").addClass("appear");
  $(".pc .logo").addClass("move-up");

}, function() {
  $(this).removeClass("big");
  $(".pc .language").removeClass("appear");
  $(".pc .logo").removeClass("move-up");

});

$(".pd").hover(function() {
  $(this).addClass("big");
  $(".pd .language").addClass("appear");
  $(".pd .logo").addClass("move-up");

}, function() {
  $(this).removeClass("big");
  $(".pd .language").removeClass("appear");
  $(".pd .logo").removeClass("move-up");

});

$(".pe").hover(function() {
  $(this).addClass("big");
  $(".pe .language").addClass("appear");
  $(".pe .logo").addClass("move-up");


}, function() {
  $(this).removeClass("big");
  $(".pe .language").removeClass("appear");
  $(".pe .logo").removeClass("move-up");

});

function mover() {
  $(".rocket-holder").addClass("moved");
  setTimeout(function() {
    $(".rocket-holder").removeClass("moved");
  }, 900);
  setTimeout(function() {
    mover();
  }, 1800);

}

mover();


$(".ins").on("click", function() {
  window.open("https://www.instagram.com/casamoma/", "");
});
