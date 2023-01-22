const key='62ff20019d30985f024a9ac24a8a2989';

const getWeather=async(city)=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}`;
    const response =await fetch(url);
    const data=await response.jsonp();
    if(data.cod!='200'){
        alert("enter valid city name");
    }
    else{
        displayContent(data)
    }
    return;
    
}
let button=document.getElementById('btn');


button.addEventListener('click',()=>{
    const input=document.getElementById('val')
    getWeather(input.value);
}
)

// const displayContent=(data)=>{
//     document.getElementById('icon').innerHTML=`<img src=""`
// }