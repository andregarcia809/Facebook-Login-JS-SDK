// FB login user
var user = {
	userID: '',
	name: '',
	accessToken: '',
	picture: '',
	email: ''
};

// FB Login function
function logIn() {
	FB.login(
		function(response) {
			if (response.status === 'connected') {
				// Insert Facebook user's data into our user OBJ
				user.userID = response.authResponse.userID;
				user.accessToken = response.authResponse.accessToken;

				// Get data from Facebook user
				FB.api('/me?fields=id, name, email, picture.type(large)', function(userData) {
					user.name = userData.name;
					user.email = userData.email;
					user.picture = userData.picture.data.url;
				});

				// Send data to be handle by server
				$ajax({
					url: 'login.php',
					method: 'POST',
					data: 'user',
					dataType: 'text',
					success: function(serverResponse) {
						if (serverResponse === 'success') {
							window.location = 'index.php';
						}
					}
				});
			}
		},
		{ scope: 'public_profile, email' }
	);
}

window.fbAsyncInit = function() {
	FB.init({
		appId: '2180866302012353',
		xfbml: true,
		version: 'v3.3'
	});
	FB.AppEvents.logPageView();
};

(function(d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk.js';
	fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
