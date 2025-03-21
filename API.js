const APIKEY = ' '; // got to https://newsapi.org and get your APIKEY
const date =  'from=2025-03-10&';
const query = "tesla";
const queryRequest = `q=${query}&`;
const url = `https://newsapi.org/v2/everything?${queryRequest}${date}apiKey=${APIKEY}`;
