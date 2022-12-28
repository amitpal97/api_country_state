// var wrapper = document.querySelector(".countryName");
// var wrapper1 = document.querySelector(".statesName");
// var wrapper2 = document.querySelector(".citesName");
// var statNotFo = document.querySelector(".statesNotFound");
// // var obj = [{}];

// var requestOptions = {
//   method: "GET",
//   headers: {
//     "X-CSCAPI-KEY": "Z2w2QktSSm9uaVlYd1NVbnFLclc5cjFvTldGcndiTDNHQ0s1cklJVA==",
//   },
//   redirect: "follow",
// };

// function setData(apiData) {
//   for (var i = 0; i < apiData.length; i++) {
//     var wrapperDiv = `<option data-iso2="${apiData[i].iso2}"  class=countryName1>${apiData[i].name}</div>`;

//     wrapper.innerHTML += wrapperDiv;
//     // wrapper2.innerHTML += wrapperDiv2;
//   }

//   document.querySelectorAll(".countryName1").forEach((elm) => {
//     // elm.preventdefault();
//     // console.log(elm.dataset.iso2);
//     // console.log(elm);
//     elm.addEventListener("click", function () {
//       fetch(
//         `https://api.countrystatecity.in/v1/countries/${elm.dataset.iso2}/states`,
//         requestOptions
//       )
//         .then((res) => res.json())

//         .then((result) => {
//           // console.log(elm);
//           if (result.length > 0) {
//             var wrapperDiv1 = "";
//             for (var i = 0; i < result.length; i++) {
//               var x = `<div data-state_code="${result[i].iso2}" class="statesNew">${result[i].name}</div>`;
//               //  result[i].toString();
//               //  console.log(result[i]);
//               // if (result[i].length == 0) {
//               //   console.log("Empty state");
//               // } else {
//               //   console.log(result[i]);
//               // }
//               wrapperDiv1 += x;
//             }
//             wrapper1.innerHTML = wrapperDiv1;
//             // wrapper1.append(wrapperDiv1);
//           } else {
//             wrapper1.innerHTML = "Not found";
//           }

//           document.querySelectorAll(".statesNew").forEach((elem) => {
//             // console.log(elem);
//             // if(elem==""){
//             //   console.log("Empty data");
//             // }

//             elem.addEventListener("click", function () {
//               // console.log("hi");
//               //  console.log(elem.textContent)

//               fetch(
//                 `https://api.countrystatecity.in/v1/countries/${elm.dataset.iso2}/states/${elem.dataset.state_code}/cities`, //sate code and api
//                 requestOptions
//               )
//                 .then((res) => res.json())
//                 .then((resultNew) => {
//                   if (resultNew.length > 0) {
//                     var wrapperDiv2 = "";
//                     for (var i = 0; i < resultNew.length; i++) {
//                       var y = `<div data-state_code="${resultNew[i].state_code}" class="citesNew">${resultNew[i].name}</div>`;
//                       // console.log(resultNew[i]);
//                       document.querySelectorAll(".citesNew");
//                       wrapperDiv2 += y;
//                     }
//                     wrapper2.innerHTML = wrapperDiv2;
//                     // wrapper2.appendChild(wrapperDiv2);
//                   } else {
//                     wrapper2.innerHTML = "notFound";
//                   }
//                 });
//             });
//           });
//         });
//       // }
//     });
//   });
// }

// fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
//   .then((response) => response.json())
//   .then((result) => setData(result))
//   .catch((error) => console.log("error", error));

// by select tag

var countryName = document.querySelector(".countryName");
var statesName = document.querySelector(".statesName");
var citesName = document.querySelector(".citesName");
var para = document.querySelector(".notFoundState");
var paraCity = document.querySelector(".notFoundcities");
// console.log(paraCity);
// console.log(paraCity.classList);

requestData = {
  method: "GET",
  headers: {
    "X-CSCAPI-KEY": "Z2w2QktSSm9uaVlYd1NVbnFLclc5cjFvTldGcndiTDNHQ0s1cklJVA==",
  },
  redirect: "follow",
};

fetch("https://api.countrystatecity.in/v1/countries", requestData)
  .then((response) => response.json())
  .then((res) => resData(res))
  .catch((error) => console.log(error));

function resData(resCountry) {
  for (var i = 0; i < resCountry.length; i++) {
    var countryApi = `<option value="${resCountry[i].iso2}"  data-iso2="${resCountry[i].iso2}" class="countryApi">${resCountry[i].name}</option>`;
    // console.log(countryApi);
    countryName.innerHTML += countryApi;
  }
}
// console.log(countryName);
countryName.addEventListener("change", function (event) {
  // console.log(event.target.value);
  // console.log(event);
  // citesName.classList.add("dsb");
  statesName.classList.remove("dsp");
  para.classList.add("notFoundState");
  fetch(
    `https://api.countrystatecity.in/v1/countries/${event.target.value}/states`,
    //sate code and api
    requestData
  )
    .then((res) => res.json())
    .then((resState) => {
      if (resState.length > 0) {
        var resStateNew = "";
        for (var i = 0; i < resState.length; i++) {
          // console.log(resState[i]);
          var stateApi = `<option class="statesApi" value="${resState[i].iso2}"  data-iso2="${resState[i].iso2}">${resState[i].name}</option>`;
          resStateNew += stateApi;
        }
        statesName.innerHTML = resStateNew;
      } else {
        statesName.classList.add("dsp");
        para.classList.remove("notFoundState");
      }
      statesName.addEventListener("change", function (even) {
        // console.log(even.target.value);
        citesName.classList.remove("dsp");
        paraCity.classList.add("notFoundcities");

        fetch(
          `https://api.countrystatecity.in/v1/countries/${event.target.value}/states/${even.target.value}/cities`,
          requestData
        )
          .then((res) => res.json())
          .then((resCities) => {
            if (resCities.length > 0) {
              var resCitiesNew = "";
              for (var i = 0; i < resCities.length; i++) {
                var citiesApi = `<option value="${resCities[i].iso2}" data-iso2="${resCities[i].iso2}">${resCities[i].name}</option>`;
                resCitiesNew += citiesApi;
              }
              citesName.innerHTML = resCitiesNew;
            } else {
              citesName.classList.add("dsp");
              paraCity.classList.remove("notFoundcities");
              // paraCity.style.display="block"
            }
          });
      });
    });
});
