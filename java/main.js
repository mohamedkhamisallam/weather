
//Today's Card Variables:
let today = document.getElementById("today"),
    todayDate = document.getElementById("today-date"),
    cityLocation = document.getElementById("location"),
    todayDegree = document.getElementById("today-degree"),
    todayIcon = document.getElementById("today-icon"),
    description = document.getElementById("today-description"),
    humidty = document.getElementById("humidty"),
    wind = document.getElementById("wind"),
    compass = document.getElementById("compass"),
    searchBar = document.getElementById("search-bar"),
   
   
    res,
    monthName = ['Jan','Feb','March','April','May','June','July','Aug','Spet','Oct','Nov','Dec'],
     days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

    //Next Days Variables:
let nextDay = document.getElementsByClassName("nextDay"),
nextDayIcon = document.getElementsByClassName("nextDay-icon"),
maxDegree = document.getElementsByClassName("max-degree"),
minDegree = document.getElementsByClassName("min-degree"),
minDegre=document.getElementsByClassName(`min-degree`),
nextDayDescription=document.getElementsByClassName(`nextDay-description`);




 async function getWeather (currentCity=`cairo`)
{
 
 let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${currentCity}&days=3`);
  res=await response.json();
 console.log(res);
 displayWeather();
 nextWeather ()

}

getWeather()


function displayWeather()
{
    let date = new Date ();

    today.innerHTML=days[date.getDay()];
    todayDate.innerHTML=`${date.getDate()} ${monthName[date.getMonth()]}`;
    cityLocation.innerHTML=res.location.name;
   todayDegree.innerHTML=res.current.temp_c;
   todayIcon.setAttribute(`src`,`http://${res.current.condition.icon}`);
   description.innerHTML= res.current.condition.text;
   humidty.innerHTML= res.current.humidity;
   wind.innerHTML =res.current.wind_kph;
   compass.innerHTML=res.current.wind_dir;

}


searchBar.addEventListener(`keyup`,function(){
    currentCity=searchBar.value;
    getWeather(currentCity);
})

function nextWeather ()
{
    for (let i = 0; i < nextDay.length; i++) {


        
        nextDay[i].innerHTML=days[new Date(res.forecast.forecastday[i+1].date).getDay()];
        nextDayIcon[i].setAttribute(`src`,`https://${res.forecast.forecastday[i+1].day.condition.icon}`);
        maxDegree[i].innerHTML=res.forecast.forecastday[i+1].day.maxtemp_c;
        minDegree [i].innerHTML=res.forecast.forecastday[i+1].day.mintemp_c;
        nextDayDescription[i].innerHTML =res.forecast.forecastday[i+1].day.condition.text;
      
        
        
    }


}