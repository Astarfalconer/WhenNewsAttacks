const APIKEY = '427fecd4587a497f9c75a8eaa512defd';
const date =  'from=2025-03-10&';
const query = "tesla";
const queryRequest = `q=${query}&`;
const url = `https://newsapi.org/v2/everything?${queryRequest}${date}apiKey=${APIKEY}`;