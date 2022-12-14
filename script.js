var wrapper = document.querySelector(".countryName");
var wrapper1 = document.querySelector(".statesName");
var wrapper2 = document.querySelector(".citesName");
var array=[];

var requestOptions = {
  method: "GET",
  headers: {
    "X-CSCAPI-KEY": "Z2w2QktSSm9uaVlYd1NVbnFLclc5cjFvTldGcndiTDNHQ0s1cklJVA==",
  },
  redirect: "follow",
};
// var api=["https://api.countrystatecity.in/v1/countries","https://api.countrystatecity.in/v1/states","https://api.countrystatecity.in/v1/countries/IN/states/MH/cities"]
//  api.forEach((elm)=>{
//     console.log(elm);
// })

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  .then((response) => response.json())
  .then((result) => setData(result));

//   .then(function () {
//     return fetch('https://api.countrystatecity.in/v1/states' ,requestOptions); // Second request
// })
// .then(function (response) {
//   return response.json();
// })
// .then((result) => console.log(result))

// .catch((error) => console.log("error", error));

function setData(apiData) {
  for (var i = 0; i < apiData.length; i++) {
    var wrapperDiv = `<div data-iso2="${apiData[i].iso2}" class=countryName1>${apiData[i].name}</div>`;
    // var wrapperDiv = `<div data-iso2="${apiData[i].iso2}" class=countryName1>${apiData[i].name}</div>`;


    var wrapperDiv1 = `<div    data-iso2="${apiData[i].iso2}" class=states>${apiData[i].result}</div>`; 
    var wrapperDiv2 = `<div class=cities></div>`;

    wrapper.innerHTML += wrapperDiv;
    wrapper1.innerHTML += wrapperDiv1;
    wrapper2.innerHTML += wrapperDiv2;
  }

  document
    .querySelectorAll(".countryName1")
    .forEach((elm) =>   {
      // console.log(elm.dataset.iso2);
      elm.addEventListener("click", function () {
        // console.log(elm.textContent)
        fetch(
          `https://api.countrystatecity.in/v1/countries/${elm.dataset.iso2}/states`,
          requestOptions
        )
          .then((res) => res.json())


          .then((result) => {
          document.querySelectorAll(".states")
              // console.log(elm);
            for ( var data in result){
                 console.log(result[data].name);
                }
                
             
          });
      });

    
      // elm.addEventListener("click",function(){
      //   fetch(
      //     `https://api.countrystatecity.in/v1/countries/${elm.dataset.iso2}/states/`
      //   )
      // })

    });
  // console.log(countryName);
}



















//   fetch("https://api.countrystatecity.in/v1/states", requestOptions)
//   .then((response) => response.json())
//   .then((result) => setData(result))
//   .catch((error) => console.log("error", error));

//   function setData(apiData1) {
//     for (var i = 0; i < apiData1.length; i++) {
//       var wrapperDiv1 = `<div class=countryName>${apiData[i].name}</div>`;
//       wrapper1.innerHTML += wrapperDiv1;
//     }
//   }
