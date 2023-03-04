const apiKey =`059edfb5a8ad909e782c88ddf0019d92`;


const loadTempareture = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}







const displayTemperature = data => {
    // const tempareture = document.getElementById('temperature');
   
    // tempareture.innerText = data.main.temp;

    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)
    


    console.log(data.weather[0].main)
}






const setInnerTextById = (id, text) => {
    const tempareture = document.getElementById(id);
   
    tempareture.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;

    document.getElementById('city').innerText = city;


    loadTempareture(city);
})









loadTempareture('city')



