    
    let apiKey = "9361bd03ec7175e9eea92fdf7a717518"  //api weather key

    let url = "http://api.openweathermap.org/data/2.5/weather?q=Houston";
    
    $.get(url + '&appid=' + apiKey).done((response) => {
        console.log(response)
        console.log(response.main.temp);
        console.log(response.name);
        console.log(response.weather[0].main)
        temperatureConversion(response.main.temp, response.name, response.weather[0].main);
    })



    function temperatureConversion(kelvin, city, weather){
        //create celsius
        let degC = kelvin - 273.15;
        let degCInt = Math.floor(degC);
        //create fahrenheit
        let degF = degC * 1.8 + 32;
        let degFInt = Math.floor(degF);
        //city name

        console.log(degCInt);
        console.log(degFInt);

        $('#temp').html(`<p>The temperature in ${city} is ${degCInt}&#176C and ${degFInt}&#176F. The weather is ${weather}`)

    }


        






//FETCH ALTERNATIVE TO GET
// fetch('http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=9361bd03ec7175e9eea92fdf7a717518')
// .then((result)=>{
//     return result.json()
// })
// .then((jsonObj)=>{
//     console.log(jsonObj)
// })