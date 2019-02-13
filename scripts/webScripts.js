var url = window.location.href;
if (url.length <= 26) {
	console.log(url);
}
else {
	var access_token = url.split("#")[1].split("=")[1].split("&")[0];

	var userId = url.split("#")[1].split("=")[2].split("&")[0];

	//console.log(access_token);
	//console.log(userId);
	var xhr = new XMLHttpRequest();
	//GET https://api.fitbit.com/1/user/-/devices.json
	xhr.open('GET', 'https://api.fitbit.com/1/user/'+ userId +'/devices.json');
	xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
	xhr.onload = function() {
	   if (xhr.status === 200) {
	      var myObj = JSON.parse(xhr.responseText);
	      document.write(xhr.responseText + "<br>");
	      document.write("test0:"+ "<br>");

	      document.write("test3:" + myObj.goal + "<br>");
	      //document.write("test2:" + myArray.activities-heart + "<br>");

	   }
	};
	xhr.send();
}