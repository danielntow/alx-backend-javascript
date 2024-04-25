import getResponseFromAPI from "./pr";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
