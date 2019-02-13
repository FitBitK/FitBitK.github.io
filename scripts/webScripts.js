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
	//GET https://api.fitbit.com/1/user/[user-id]/body/log/[goal-type]/goal.json
	xhr.open('GET', 'https://api.fitbit.com/1/user/'+ userId +'/body/log/weight/goal.json');
	xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
	xhr.onload = function() {
	   if (xhr.status === 200) {
	      var myArray = JSON.parse(xhr.responseText);
	      document.write("test0:"+ "<br>");

	      document.write("test3:" + myArray[0] + "<br>");
	      document.write("test3:" + myArray + "<br>");
	      //document.write("test2:" + myArray.activities-heart + "<br>");

	   }
	};
	xhr.send();
}