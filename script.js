var wrapper = document.querySelector(".countryName");
var wrapper1 = document.querySelector(".statesName");
var wrapper2 = document.querySelector(".citesName");

var requestOptions = {
  method: "GET",
  headers: {
    "X-CSCAPI-KEY": "Z2w2QktSSm9uaVlYd1NVbnFLclc5cjFvTldGcndiTDNHQ0s1cklJVA==",
  },
  redirect: "follow",
};

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  .then((response) => response.json())
  .then((result) => setData(result));

function setData(apiData) {
  for (var i = 0; i < apiData.length; i++) {
    var wrapperDiv = `<div data-iso2="${apiData[i].iso2}"  class=countryName1>${apiData[i].name}</div>`;

    wrapper.innerHTML += wrapperDiv;
    // wrapper2.innerHTML += wrapperDiv2;
  }

  document.querySelectorAll(".countryName1").forEach((elm) => {
    // console.log(elm.dataset.iso2);
    elm.addEventListener("click", function () {
      // console.log(elm.textContent)
      fetch(
        `https://api.countrystatecity.in/v1/countries/${elm.dataset.iso2}/states`,
        requestOptions
      )
        .then((res) => res.json())

        .then((result) => {
          // console.log(elm);
          for (var i = 0; i < result.length; i++) {
            var wrapperDiv1 = `<div data-state_code="${result[i].iso2}" class="statesNew">${result[i].name}</div>`; //iso2 why
            document.querySelectorAll(".statesNew");
            wrapper1.innerHTML += wrapperDiv1;
          }

          document.querySelectorAll(".statesNew").forEach((elem) => {
            // console.log(elem);

            elem.addEventListener("click", function () {
              // console.log("hi");
              fetch(
                `https://api.countrystatecity.in/v1/countries/${elm.dataset.iso2}/states/${elem.dataset.state_code}/cities`, //sate code and api
                requestOptions
              )
                .then((res) => res.json())
                .then((resultNew) => {
                  console.log(resultNew);
                  for (var i = 0; i < resultNew.length; i++) {
                    var wrapperDiv2 = `<div data-state_code="${resultNew[i].state_code}" class="citesNew">${resultNew[i].name}</div>`;
                    document.querySelectorAll(".citesNew");
                    wrapper2.innerHTML += wrapperDiv2;
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
    });
  });
}
