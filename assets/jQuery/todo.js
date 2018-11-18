$(document).ready(function () {
    $(".add-task").click(function () {
        var data = $("#add_task").val();
        var priority = $(".priority").val();
        //console.log(data);
        if (data == "") {
            $("#add_task").css({
                "border-color": "red",
                "background-color": "rgb(255, 255, 255, 0)"
            });
        } else {
            console.log("All Good");
        }


    });


    $(".add-task").click(function () {
        var data = $("#add_task").val();
        var priority = $(".priority").val();
        var saveTask = $(".save-task").val();
        var list = $(".task-list").val();

        //        console.log(data);
        //        console.log(priority);

        if (data && priority) {
            localStorage.setItem(data, priority);
            $(".task-list").append("<div class=\"row\"><li class=\"list-item\">" +data +" - " +priority +"<button type=\"button\" class=\"btn btn-danger remove-list\">X</button></li></div>");
        } else {
            console.log("Input required");
        }

        /*
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(data);
            $(".task-list").html("<div class=\"row\"><li class=\"list-item\">" + data + " - " + priority +"<button type=\"button\" class=\"btn btn-danger remove\">X</button></li></div>");
        }
        */
    });



    //    localStorage.setItem("name", "savi");
    //    localStorage.removeItem("name");
    //    localStorage.setItem("age", "30");
    //    localStorage.setItem("name", "savi");
    //    console.log(localStorage.getItem("name"));
    //    console.log(localStorage.key(0));
});