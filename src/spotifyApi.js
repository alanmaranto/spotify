const config = {
  REACT_APP_AUTH_ENDPOINT: process.env.REACT_APP_AUTH_ENDPOINT,
  REACT_APP_REDIRECTURI: process.env.REACT_APP_REDIRECTURI,
  REACT_APP_CLIENTID: process.env.REACT_APP_CLIENTID,
  REACT_APP_CLIENTSECRET: process.env.REACT_APP_CLIENTSECRET,
};

console.log(config)

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${config.REACT_APP_AUTH_ENDPOINT}?client_id=${
  config.REACT_APP_CLIENTID
}&redirect_uri=${config.REACT_APP_REDIRECTURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
