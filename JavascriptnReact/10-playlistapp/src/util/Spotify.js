import React from "react";

const accessToken = "a659494b83f74e7289950de6c356e4ba";
const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else if(!accessToken) {
        // Check the URL to see if it has a Spotify access token in it.
        // Use window.location.href and the .method to retrieve the access token and expiration time from the URL.
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/&expires_in=([^&]*)/);

        // If the access token and expiration time are in the URL, implement the following steps:
        // 1. Set the access token value
        // 2. Set a variable for expiration time
        // 3 Set the access token to expire at the value for expiration time.
        // 4. Clear the parameters from the URL, so the app doesn't try grabbing the access token after it expires.
        if (accessTokenMatch) {
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessTokenMatch[1];
        }
    }
  },
};

export default Spotify;
