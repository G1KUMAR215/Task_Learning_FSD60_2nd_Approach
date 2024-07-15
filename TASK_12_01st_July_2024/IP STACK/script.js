let apikey="f43dafcad8ef284500f7f28ce7d2f732"


let IPContainer = document.createElement("div");
async function getIPStackData() {
  let url=`https://api.ipstack.com/${apikey}`
  let data = await fetch(url);
  console.log(data)
}
getIPStackData()
