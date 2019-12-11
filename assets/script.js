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