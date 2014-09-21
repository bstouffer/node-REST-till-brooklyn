$("#navbar-item-home").addClass("active");

var GOOGLE_CLIENT_ID = '117055496737-itqqf2jbif29a6ols0l3itcsa9joa81a.apps.googleusercontent.com';

hello.init({ 
	google   : GOOGLE_CLIENT_ID
},{redirect_uri:'http://localhost:3000/oauth2callback'});

updateAuthStatus();

//Signin button click handler
function login(network){
	hello.login(network, { scope: "" }, function(e){
		console.info("callback",e);
		updateAuthStatus();
	});
}

function logout(network){
	hello(network).logout().then(function(){
		alert("Signed out");
		updateAuthStatus();
	}, function(e){
		alert( "Signed out error:" + e.error.message );
		updateAuthStatus();
	});
}

function updateAuthStatus() {
	var session = hello("google").getAuthResponse();
	var current_time = (new Date()).getTime() / 1000;
	if (session && session.access_token && session.expires > current_time) {
		$("#btnLogin").hide();
		$("#btnLogoff").show();
	} else {
		$("#btnLogin").show();
		$("#btnLogoff").hide();
	}
}