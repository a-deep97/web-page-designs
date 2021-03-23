

function locationSetter(){
    const locationContainer=document.getElementById('location-container');
    var cities=['Mumbai','Bengaluru','Pune','Delhi','Kolkata','Lucknow'];
    for(var i=0;i<cities.length;i++){
        var cityContainerHTML=document.createElement('div');
        cityContainerHTML.className="city-container";
        var cityImageHTML=document.createElement('div');
        cityImageHTML.className="city-image";
        var imgHTML=document.createElement('img');
        imgHTML.src="./public/img/cities/"+cities[i]+".jpeg";
        var cityNameHTML=document.createElement('div');
        cityNameHTML.className="city-name";
        cityNameHTML.innerHTML=cities[i];

        cityImageHTML.appendChild(imgHTML);
        cityContainerHTML.appendChild(cityImageHTML);
        cityContainerHTML.appendChild(cityNameHTML);
        
        locationContainer.appendChild(cityContainerHTML);
    }
}
locationSetter();