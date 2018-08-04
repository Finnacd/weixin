




$(function(){

    $("#dynamic").load("./page/message.html");
    // $("#dynamic").load("../page/contact.html");
    // $("#dynamic").load("../page/find.html");
    // $("#dynamic").load("../page/me.html");



    //切换
    $(".menu-item").click(function() {

        $("#dynamic").load($(this).data("page"))

    })


})


