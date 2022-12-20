var wrapper = document.querySelector(".countryName");
var wrapper1 = document.querySelector(".statesName");
var wrapper2 = document.querySelector(".citesName");
var statNotFo = document.querySelector(".statesNotFound");
// var obj = [{}];

var requestOptions = {
  method: "GET",
  headers: {
    "X-CSCAPI-KEY": "Z2w2QktSSm9uaVlYd1NVbnFLclc5cjFvTldGcndiTDNHQ0s1cklJVA==",
  },
  redirect: "follow",
};

function setData(apiData) {
  for (var i = 0; i < apiData.length; i++) {
    var wrapperDiv = `<option data-iso2="${apiData[i].iso2}"  class=countryName1>${apiData[i].name}</option>`;

    wrapper.innerHTML += wrapperDiv;
    // wrapper2.innerHTML += wrapperDiv2;
  }

  document.querySelectorAll(".countryName1").forEach((elm) => {
    // console.log(elm.dataset.iso2);
    // console.log(elm);
    elm.addEventListener("click", function () {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${elm.dataset.iso2}/states`,
        requestOptions
      )
        .then((res) => res.json())

        .then((result) => {
          // console.log(elm);
          if (result.length > 0) {
            var wrapperDiv1 = "";
            for (var i = 0; i < result.length; i++) {
              var x = `<div data-state_code="${result[i].iso2}" class="statesNew">${result[i].name}</div>`;
              //  result[i].toString();
              //  console.log(result[i]);
              // if (result[i].length == 0) {
              //   console.log("Empty state");
              // } else {
              //   console.log(result[i]);
              // }
              wrapperDiv1 += x;
            }
            wrapper1.innerHTML = wrapperDiv1;
            // wrapper1.append(wrapperDiv1);
          } else {
            wrapper1.innerHTML = "Not found";
          }

          document.querySelectorAll(".statesNew").forEach((elem) => {
            // console.log(elem);
            // if(elem==""){
            //   console.log("Empty data");
            // }

            elem.addEventListener("click", function () {
              // console.log("hi");
              //  console.log(elem.textContent)

              fetch(
                `https://api.countrystatecity.in/v1/countries/${elm.dataset.iso2}/states/${elem.dataset.state_code}/cities`, //sate code and api
                requestOptions
              )
                .then((res) => res.json())
                .then((resultNew) => {
                  if (resultNew.length > 0) {
                    var wrapperDiv2="";
                    for (var i = 0; i < resultNew.length; i++) {
                      var y = `<div data-state_code="${resultNew[i].state_code}" class="citesNew">${resultNew[i].name}</div>`;
                      // console.log(resultNew[i]);
                      document.querySelectorAll(".citesNew");
                      wrapperDiv2 += y;
                    }
                    wrapper2.innerHTML = wrapperDiv2;
                    // wrapper2.appendChild(wrapperDiv2);
                  } else {
                    wrapper2.innerHTML = "notFound";
                  }
                  // document.querySelectorAll(".citesNew").forEach((elm) => {
                  //   // console.log(elm);
                  //   fetch(
                  //     `https://api.countrystatecity.in/v1/countries/${elm.dataset.iso2}/states/${elem.dataset.state_code}/cities/`,
                  //     requestOptions
                  //   )
                  //     .then((res) => res.json())
                  //     .then((resultCitiesJson) => {
                  //       for (var i = 0; i < resultCitiesJson.length; i++) {
                  //         var wrapperDivJson = `<div data-state_code="${resultCitiesJson[i].iso2}" class="cityJson">${resultCitiesJson[i].name}</div>`; //iso2 why

                  //         console.log(hii);
                  //       }
                  //       console.log(resultCitiesJson);
                  //     });
                  // });
                });
            });
          });
        });
      // }
    });
  });
}

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  .then((response) => response.json())
  .then((result) => setData(result))
  .catch((error) => console.log("error", error));
