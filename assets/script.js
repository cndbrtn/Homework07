// $(".container").show(500, "linear");
$(".container").attr("style", "display: flex;");

$(document).ready(function () {
    $('.portfolio-carousel').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 3,
  slidesToScroll: 1,
  appendArrows: $('.arrows'),
  addaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});

// $(document).on("click touch", "#contact", function (event) {
//     event.stopPropagation();

//     console.log("hit")
//     console.log($(".modal").attr("style"))

//     if ($(".modal").attr("style") === "display: block;") {
//         $(".modal").hide();
//         $("#contact").attr("style", "")
//     }
//     else {
//         $(".modal").show()
//         $("#contact").attr("style", "background: #4fe22a; color: #000;")
//     }
// })


// $("#clear").on("click touch", function (event) {
//     console.log("hit clear")
//     $("#comments").val("");
//     $("input").val("")


// })


// $(".hover").hover(
//     function () {
//         console.log("hover test", $(this).attr("data-value"))
//         if ($(this).attr("data-value") === "folio1") {
//             $("#hover-text").html("<span><b>Dessert Search</b><span><br><span>Love dessert? Of course you do! Here's a handy app to search for dessert recipes to satisfy that craving</span>")
//             $("#folio1").attr("src", "assets/img/projectone.jpg")
//         }
//         if ($(this).attr("data-value") === "folio2") {
//             $("#hover-text").html("<span><b>The JavaScript Quiz!</b></span><br><span>A timed quiz about JS, using JS (and also one about my dog Gertie). Test your knowledge and try to beat your last high score!</span>")
//             $("#folio2").attr("src", "assets/img/jsquiz.jpg");
//         }
//         if ($(this).attr("data-value") === "folio3") {
//             $("#hover-text").html("<span><b>Weather App</b></span><br><span>A weather app for people on the go. Find the weather in any city, including a 5 day projected forcast</span>")
//             $("#folio3").attr("src", "assets/img/weatherapp.jpg");
//         }
//         // if ($(this).attr("data-value") === "folio4") {
//         //     $("#hover-text").text("This is some new text for blah4!")
//         // }
//         // if ($(this).attr("data-value") === "folio5") {
//         //     $("#hover-text").text("This is some new text for blah5!")
//         // }
//     }, function () {
//         $("#hover-text").text("Hover over an image for more information")
//         $("#folio1").attr("src", "assets/img/projectone-green.jpg")
//         $("#folio2").attr("src", "assets/img/jsquiz-green.jpg");
//         $("#folio3").attr("src", "assets/img/weatherapp-green.jpg");
//     });


