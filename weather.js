function search(){

   place=s1.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5b4bee0ba241d092159faf007e166080`).then(data=>data.json()).then(data1=>displaydata(data1))
    
} 
function convertion(val){
    return Math.floor(val - 273)
}

function displaydata(item){
name2=item.name
weath=item.main.temp
main=item.weather[0].description


visible=item.visibility
wind=item.wind.speed
humi=item.main.humidity
press=item.main.pressure



n.innerHTML=`${name2}`
cli.innerHTML=`${main} `
temp.innerHTML= `${(convertion(weath))}°C`
w.innerHTML=`${wind}kmh `
v1.innerHTML=`${visible/1000}km`
h1.innerHTML=`${humi}%`
p1.innerHTML=`${press} hpa`

time1=item.timezone

obj=new time(time1)
}
