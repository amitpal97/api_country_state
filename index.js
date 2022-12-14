// // {first , second, third, four}=[one,two]=one=show
// var country = {
//   contName: {
//     one: [{}],
//     two: [{}],
//   },
//   second: {
//     one: [{}],
//     two: [{}],
//   },
//   third: {
//     one: [{}],
//     two: [{}],
//   },
//   four: {
//     one: [{}],
//     two: [{}],
//   },
// };

// creating  a country variable.
var country = {
  // array of object for countries name
  countries: [
    {
      countryName: ["india","Afghanistan"]
    },
    {
      india: [
        {
          state: ["maharashatra", "aandra"],
        },
        {
          cites: {
            maharashatra: ["mumbai", "naviMumbai"],
            aandra: ["demo", "demo1"],
          },
        },
      ],
    },

    {
      Afghanistan: [
        {
          state: ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamian"],
        },

        {
          cites: {
            Badakhshan: ["demo", "demo1"],
            Badghis: ["demo", "demo1"],
          },
        },
      ],
    },
  ],
};
// var countryName = document.querySelector(".countryName");
var data = country.countries.forEach((elm)=>{
console.log(elm.countryName.forEach((elm)=>{
    console.log(elm);
   var contryname = "<p></p> "
   contryname.
}));
});

var newData=data


// forEach((elm,index,array)=>{
    // var name=console.log(elm.countryName);
    // console.log(index);
    // console.log(array);
    // console.log(data);
    // });
    // console.log(data.countryName);

