const config = {
  REACT_APP_AUTH_ENDPOINT: process.env.REACT_APP_AUTH_ENDPOINT,
  REACT_APP_REDIRECT_URI: process.env.REACT_APP_REDIRECT_URI,
  REACT_APP_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
  REACT_APP_CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECRET,
};

console.log(config);

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${config.REACT_APP_AUTH_ENDPOINT}?client_id=${
  config.REACT_APP_CLIENT_ID
}&redirect_uri=${config.REACT_APP_REDIRECT_URI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessToken=mySecretJey&name=Alan
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
