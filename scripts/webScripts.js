var url = window.location.href;
if (url.length <= 26) {
	console.log(url);
}
else {
	var access_token = url.split("#")[1].split("=")[1].split("&")[0];

	var userId = url.split("#")[1].split("=")[2].split("&")[0];

	console.log(access_token);
	console.log(userId);
}