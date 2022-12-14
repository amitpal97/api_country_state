// var headers = new Headers();
// headers.append("X-CSCAPI-KEY", "API_KEY");
// console.log(headers);
var wrapper=document.querySelectorAll(".wrapper1")
console.log(wrapper);
var requestOptions = {
  method: "GET",
  // headers: headers,
  headers: {
    "X-CSCAPI-KEY": "API_KEY" ,
  },
  redirect: "follow",
};
// console.log(requestOptions);

fetch("https://api.countrystatecity.in/v1/countries/IN", requestOptions)

  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
