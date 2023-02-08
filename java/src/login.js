var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

const element = document.getElementById("loginButton");
element.addEventListener("click", loginButton);
function loginButton() 
{
    var client_id = 'd497ce9d1c024b0e89b504b0a79d3926'; // Your client id
    var redirect_uri = 'https://www.spotifytogether.com/'; // Your redirect uri

    var state = generateRandomString(16);
    var stateKey = 'spotify_auth_state';

    localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    window.location = url;
}
