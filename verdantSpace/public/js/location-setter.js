
function locationSetter(){
    const locationContainer=document.getElementById('location-container');
    var cities=['Ahmedabad','Mumbai','Bengaluru','Hydrabad','Pune','Delhi','Kolkata','Lucknow','And coming...'];
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