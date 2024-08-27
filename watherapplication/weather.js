const apikey="a6f26118f682954f2ef74b80bf63639a";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkweather(city)
{
    const responce =await fetch(apiurl + city +`&appid=${apikey}`)
    if(responce.status ==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else
    {
         
    var data=await responce.json(); 

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
   weatherIcon.src="clouds.png";
}
else if(data.weather[0].main == "Clear"){
   weatherIcon.src="clear.png";
}
else if(data.weather[0].main == "Rain"){
   weatherIcon.src="rain.png";
}
else if(data.weather[0].main == "Drizzle"){
   weatherIcon.src="drizzle.png";
}
else if(data.weather[0].main == "Mist"){
   weatherIcon.src="mist.png";
}
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";

}
}
searchBtn.addEventListener("click",()=>{
checkweather(searchBox.value);
})
checkweather();