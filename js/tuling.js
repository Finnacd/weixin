var xmlHttp = null;

function send(str){
	try{
	xmlHttp = new XMLHttpRequest();
	}catch(e){
		try{
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	if (xmlHttp == null) {
		
		window.alert("您的浏览器不支持AJAx");
		return;
		
	}
	


	console.log(str);
	var url = "http://www.tuling123.com/openapi/api?key=4093a4dddca64a4dba809c64bba59574";
	url = url + "&info=" + str;
	url = url + "&userid=mt_rand	";
	xmlHttp.onreadystatechange = stateChange;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);


    var self = $('<div class="chat-item-right">\n' +
        '                <div class="chat-content-right">\n' +
        '                    <div class="chat-message-right">'+$("#input-text").val()+'</div>\n' +
        '                </div>\n' +
        '                <div class="chat-pic">\n' +
        '                    <img src="../img/person/mylogo.jpg" alt="">\n' +
        '                </div>\n' +
        '            </div>');

    $("#chat-list").append(self);


	document.getElementById("input-text").value = "";
}
function stateChange(){
	
	if(xmlHttp.readyState == 4){
		var msg = eval('('+xmlHttp.responseText+')');
		//document.getElementById("outputID").innerHTML = msg.text;
		
		var robot = $('<div class="chat-item-left">\n' +
            '                <div class="chat-pic">\n' +
            '                    <img src="../img/person/liu2.jpg" alt="">\n' +
            '                </div>\n' +
            '                <div class="chat-content-left">\n' +
            '                    <div class="chat-message-left">'+msg.text+'</div>\n' +
            '                </div>\n' +
            '            </div>');
		$("#chat-list").append(robot);
		
	}
	
}