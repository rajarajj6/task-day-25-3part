let url = "https://api.covid19api.com/total/dayone/country/india/status/confirmed"

function run() {
  fetch(url).then((result) => result.json()).then((data) => {
    // console.log(data)
    for (let value of data) {
      console.log("the number of active cases is" + value.Cases + " and status " + value.Status)
    }
  }).catch((error) => {
    console.log("data not fond")
    console.log(error)
  })
}