const config = {
  AUTH_ENDPOINT: process.env.AUTH_ENDPOINT,
  REDIRECTURI: process.env.REDIRECTURI,
  CLIENTID: process.env.CLIENTID,
  CLIENTSECRET: process.env.CLIENTSECRET,
};

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${config.AUTH_ENDPOINT}?client_id=${
  config.CLIENTID
}&redirect_uri=${config.REDIRECTURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
