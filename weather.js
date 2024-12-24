let input=document.querySelector("input");
let btn=document.querySelector(".search-icon");
let temp=document.querySelector(".temp");
let city=document.querySelector(".city");
async function  getDetails(link){
    let response= await fetch(link);
    let details=await response.json();
return details;
};
function Update(){
    if(input.value==''){alert('Enter Valid City');return;}
    let city_entered=input.value;
    
    let weather_link=`https://api.openweathermap.org/data/2.5/weather?q=${city_entered}&appid=c8a106e89f57905e091343a8e8de97c5&units=metric`;
    getDetails(weather_link).then((details)=>{
        let weather_img=details.weather[0].main.toLowerCase();
        console.log(weather_img);
        city.innerText=details.name;
        document.querySelector('.speed').innerText=`${details.wind.speed}Km/h`;
        document.querySelector('.main_image').setAttribute('src','images/'+weather_img+'.png');
        document.querySelector('.humidity_percent').innerText=`${details.main.humidity}%`;
        temp.innerText=`${details.main.temp}°C`;
        document.querySelector('.middle').style.display='flex';
        document.querySelector('.bottom').style.display='flex';
        }).catch((err)=>{alert('Enter Valid City');

            document.querySelector('.middle').style.display='none';
            document.querySelector('.bottom').style.display='none';
        });
    input.value='';
   

}
input.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        Update();
    }
})
btn.addEventListener("click",Update);
