$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var isDevoured = $(this).data("isdevoured");

        var newDevouredState = {
            devoured: isDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("Changed devoured state to", isDevoured);
                location.reload();
            }
        );
    });

    $(".butt").on("click", function (event) {
        event.preventDefault();

        var newBurg = {
            burger_name: $("#newBurg").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(function () {
            console.log("Created new burger");
            location.reload();
        });
    });
});