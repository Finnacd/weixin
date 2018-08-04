
$("#message").click(function () {
    $("#message img").attr('src','./img/message_weixin_01.svg')
    $("#connector img").attr('src',"./img/connector_01.svg")
    $("#find img").attr('src','./img/find_weixin_02.svg')
    $("#me img").attr('src','./img/me_weixin_02.svg')
})

$("#connector").click(function () {
    $("#message img").attr('src','./img/message_weixin_02.svg')
    $("#connector img").attr('src',"./img/connector_02.svg")
    $("#find img").attr('src','./img/find_weixin_02.svg')
    $("#me img").attr('src','./img/me_weixin_02.svg')
})

$("#find").click(function () {
    $("#message img").attr('src','./img/message_weixin_02.svg')
    $("#connector img").attr('src',"./img/connector_01.svg")
    $("#find img").attr('src','./img/find_weixin_01.svg')
    $("#me img").attr('src','./img/me_weixin_02.svg')
})

$("#me").click(function () {
    $("#message img").attr('src','./img/message_weixin_02.svg')
    $("#connector img").attr('src',"./img/connector_01.svg")
    $("#find img").attr('src','./img/find_weixin_02.svg')
    $("#me img").attr('src','./img/me_weixin_01.svg')
})

$("#more").click(function () {
    $(".pop").toggle();
})