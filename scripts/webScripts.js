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
	xhr.open('GET', 'http://api.fitbit.com/1/user/'+ userId +'/activities/heart/date/today/1w.json');
	xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
	xhr.onload = function() {
	   if (xhr.status === 200) {
	      console.log(xhr.responseText);
	      document.write(xhr.responseText);
	   }
	};
	xhr.send();
}