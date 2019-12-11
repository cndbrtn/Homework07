$(".container").show(500, "linear")
$(".container").attr("style", "display: flex;")

$(document).on("click touch", "#contact", function () {
    console.log("hit")
    console.log($(".modal").attr("style"))

    if ($(".modal").attr("style") === "display: block;") {
        $(".modal").hide();
    }
    else {
        $(".modal").show()
    }

})

$(".hover").hover(
    function () {
        console.log("hover test", $(this).attr("data-value"))
        if ($(this).attr("data-value") === "folio1") {
            $("#hover-text").text("This is some new text for blah1!")
        }
        if ($(this).attr("data-value") === "folio2") {
            $("#hover-text").text("This is some new text for blah2!")
        }
        if ($(this).attr("data-value") === "folio3") {
            $("#hover-text").text("This is some new text for blah3!")
        }
        if ($(this).attr("data-value") === "folio4") {
            $("#hover-text").text("This is some new text for blah4!")
        }
        if ($(this).attr("data-value") === "folio5") {
            $("#hover-text").text("This is some new text for blah5!")
        }
    }, function () {
        $("#hover-text").text("Hover over an image for more information")
    });


