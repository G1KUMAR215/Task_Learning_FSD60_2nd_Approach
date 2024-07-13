async function getCountries(){
  let data = await fetch('https://restcountries.com/v3.1/all')
  let res = await data.json()
  console.log(res)
  displayCountries(res)
 }

 getCountries();


 function displayCountries(countryDetails){
  document.body.style.backgroundColor="black";
  console.log(countryDetails)

  let wrapper =document.getElementById('wrapper');
  
  //wrapper.classList.add('d-flex','flex-wrap','gap-2','mx-2','w-100','text-center');

  countryDetails.map((elements,index)=>{
      let div=document.createElement('div');//card m-0 p-0
     // div.style.background=lineargradient(rgba(10, 115, 164, 0.267))#efda02e0
      div.innerHTML=`
      <div class="col-lg-4 col-sm-12 card card-header card-body" style="width:15.1rem;height:300px;background: linear-gradient(#D2B087, #decf7d);">
           <h5 class="card card-header card-body" style="font-family: Helvetica, Trebuchet MS, Verdana, sans-serif;"><small>${elements.name.common}</small></h5>
          <img src=${elements.flags.png} class="card-img-top" alt="..." height="140px">
          <div class='card-body mb-1 p-0' style="background: linear-gradient(#D2B087, #decf7d);">
              <label class="" style="font-family: Helvetica, Trebuchet MS, Verdana, sans-serif;"><small>Capital:${elements.capital}</small></label><br>
              <label class="" style="font-family: Helvetica, Trebuchet MS, Verdana, sans-serif;"><small>Region:${elements.region}</small></label><br>
              <label class="" style="font-family: Helvetica, Trebuchet MS, Verdana, sans-serif;"><small>CountyCode:${elements.cca3}</small></label><br>
              <button  class="btn btn-primary p-0 px-2" onclick=getWeather(${elements.latlng[0]},${elements.latlng[1]})><b>Click for Weather</b></button>
          </div>
      </div>
      `
      wrapper.append(div)
      document.body.append(wrapper)
  })
 }
 // <p class="card-text p-0 mb-1"><small>${elements.name.common} capital is ${elements.capital}.
 // The area is ${elements.area} and population of this country is ${elements.population}.</small></p>
  async function getWeather(lat,lon){
     // var key ='121218e2f5a1829885974f02787a68e1'
      console.log(lat,lon)
     // let data =await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${key}`)
     // let res = await data.json();
     // console.log(res)
  }