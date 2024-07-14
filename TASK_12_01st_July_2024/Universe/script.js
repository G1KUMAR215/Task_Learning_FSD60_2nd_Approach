let api_key = "mbnseP9wZhqxEwfZiIBvYeajBkGdTl9botm0K3kH";
let universeContainer = document.createElement("div");
async function getSolarSystemData() {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
  let data = await fetch(url);
  let res = await data.json();
  console.log(res);
  console.log(
    res.date,
    res.explanation,
    res.hdurl,
    res.media_type,
    res.service_version,
    res.title,
    res.url
  );
  universeContainer.innerHTML = `
    <div> 
        <hr>                    
        <h5 class="text-center text-primary">DATE:${res.date} Event:${res.title} </h5>
        <hr>
        <img src="${res.url}" class="img-fluid alt="Solar System">
        <hr>
        <a href="${res.hdurl}" target="_blank">Click Here to get HD Image</a>
        <hr>
        <p class="card-text w-3 h-2 m-0">${res.explanation}</p>
        <hr>
    </div>
    `;
  document.body.append(universeContainer);
}
// getSolarSystemData();
