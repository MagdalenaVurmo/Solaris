const url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com"
console.log(url);

//Alla planeterna i solsystemet.(DOM)
const sunOne = document.getElementById('sun1');
const mercury = document.getElementById('mercury');
const venus = document.getElementById('venus');
const earth = document.getElementById('earth');
const mars = document.getElementById('mars');
const jupiter = document.getElementById('jupiter');
const saturnus = document.getElementById('saturnus');
const uranus = document.getElementById('uranus');
const neptunus = document.getElementById('neptunus');
const closeBTN = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
 const header = document.getElementById('header');
    const planets = document.getElementById('planets');

let dataSystem = []; // datasystem array


    closeBTN.addEventListener('click', () => {

    const sunTwo = document.getElementById('sun2');
    const sunThree = document.getElementById('sun3');
    const planetname = document.getElementById('planet-name');
    const latinName = document.getElementById('planet-latin-name');
    const planetinfo = document.getElementById('planet-info');
    const circumference = document.getElementById('circumference');
    const distance = document.getElementById('distance');
    const maxTemp = document.getElementById('max-temp');
    const Mintemp = document.getElementById('min-temp');
    const moons = document.getElementById('moons');
   
    
});
    
// This is my function to show planet info in overlay
    
    const sunTwo = document.getElementById('sun2');
    const sunThree = document.getElementById('sun3');
    const planetname = document.getElementById('planet-name');
    const latinName = document.getElementById('planet-latin-name');
    const planetinfo = document.getElementById('planet-info');
    const circumference = document.getElementById('circumference');
    const distance = document.getElementById('distance');
    const maxTemp = document.getElementById('max-temp');
    const Mintemp = document.getElementById('min-temp');
    const moons = document.getElementById('moons');
{
        // showing the overlay and its planet info
        closeBTN.addEventListener('click', () => {
        planets.style.visibility ='visible';
        sunTwo.style.display = 'none';
        sunThree.style.display = 'none';
        overlay.style.display = 'none';
        header.style.visibility ='visible';
    
})       
    // Hinding my overlay here and showing my main content.
    
   planets.style.display = 'none';
    sunTwo.style.visibility = 'visible';
   sunThree.style.visibility = 'visible';
   overlay.style.visibility = 'visible';
   header.style.display ='none';
};
    let planetinform = (PresentThisData) => {
    planetname.innerHTML = PresentThisData.name;
    latinName.innerHTML = PresentThisData.latinName;
    planetinfo.innerHTML = PresentThisData.desc;
    circumference.innerHTML = PresentThisData.circumference + ' km';
    distance.innerHTML = PresentThisData.distance + ' km';
    maxTemp.innerHTML = PresentThisData.temp.day + ' &#176 C';
    Mintemp.innerHTML = PresentThisData.temp.night + ' &#176 C';

        //Lägger till dom 3 blå månarna.
    let moonNames = '';

    if (PresentThisData.moons.length !== 0) {
        for (let name in PresentThisData.moons) {
         moonNames = moonNames + PresentThisData.moons[name]+ ', ';
        }

        moonNames = moonNames.substring(0, moonNames.length - 2);
    } else {
        moonNames = 'Inga';
    }
    moons.innerHTML = moonNames;
};

// Fetching my API key.
let ApiKey = () => {
    const keyEnd = '/keys';
    const KEYoptions = {
    method: 'POST'
    };


    fetch(url + keyEnd, KEYoptions)
    .then(res => res.json())
    .then(res => getPlanetaryInfo(res.key)) // Passing the key to get planet info.
    .catch(err => console.error(err));
};

//Här hämtas info med hjälp av nyckel.
let getPlanetaryInfo = (key) => { 
    const infoEND = '/bodies';
    const information = {
        method: 'GET',
        headers: {'x-zocom': key}
    };

    fetch(url + infoEND, information)
    .then(res => res.json())
    .then(res => LocalSave(res))
    .catch(err => console.error(err));
};

let LocalSave = (data) => {
        dataSystem = data.bodies;
        planetinform(dataSystem[0]);
    };

ApiKey();






/*
 let addPlanetListner = () => {
    sunOne.addEventListener ('click', () => {planetinform(dataSystem[0])});
    mercury.addEventListener ('click', () => {planetinform(dataSystem[1])});
    venus.addEventListener ('click', () => {planetinform(dataSystem[2])});
    earth.addEventListener ('click', () => {planetinform(dataSystem[3])});
    mars.addEventListener ('click', () => {planetinform(dataSystem[4])});
    jupiter.addEventListener ('click', () => {planetinform(dataSystem[5])});
    saturnus.addEventListener ('click', () => {planetinform(dataSystem[6])});
    uranus.addEventListener ('click', () => {planetinform(dataSystem[7])});
    neptunus.addEventListener ('click', () => {planetinform(dataSystem[8])});

};



 


    const sunTwo = document.getElementById('sun2');
    const sunThree = document.getElementById('sun3');

    const closeBTN = document.getElementById('close-btn');
    const planetname = document.getElementById('planet-name');
    const latinName = document.getElementById('planet-latin-name');
    const planetinfo = document.getElementById('planet-info');
    const circumference = document.getElementById('circumference');
    const distance = document.getElementById('distance');
    const maxTemp = document.getElementById('max-temp');
    const Mintemp = document.getElementById('min-temp');
let planetinform = (PresentThisData) => {
    sunOne.style.backgroundColor = 'rgba(66, 142, 212, 1)';
    sunTwo.style.display = 'block';
    sunThree.style.display = 'block';
    overlay.style.display = 'block';
    header.style.visibility ='hidden';
    planets.style.visibility ='hidden';
    
}
    // Funktion för att stänga overlayn
    

        closeBTN.addEventListener('click', 
            function () {
                sunOne.style.backgroundColor = 'rgba(255, 208, 41, 1)';
                sunTwo.style.display = 'none';
                sunThree.style.display = 'none';
                overlay.style.display = 'none';
                header.style.visibility = 'visible';
                planets.style.visibility = 'visible';

        });

    planetname.innerHTML = PresentThisData.name;
    latinName.innerHTML = PresentThisData.latinName;
    planetinfo.innerHTML = PresentThisData.desc;
    circumference.innerHTML = PresentThisData.circumference + ' km';
    distance.innerHTML = PresentThisData.distance + ' km';
    maxTemp.innerHTML = PresentThisData.temp.day + ' &#176 C';
    Mintemp.innerHTML = PresentThisData.temp.night + ' &#176 C';


    const moons = document.getElementById('moons');
    
    let moonNames = '';

    if (PresentThisData.moons.length !== 0) {
        for (let name in dataToPresent.moons) {
         moonNames = moonNames + dataToPresent.moons[name]+ ', ';
        }

        moonNames = moonNames.substring(0, (moonNames.length - 2));
    } else {
        moonNames = 'Inga';
    }
    moons.innerHTML = moonNames;
 }   
    ApiKey();

    sunOne.addEventListener ('click', () => {planetinform(dataSystem[0])});
    mercury.addEventListener ('click', () => {planetinform(dataSystem[1])});
    venus.addEventListener ('click', () => {planetinform(dataSystem[2])});
    earth.addEventListener ('click', () => {planetinform(dataSystem[3])});
    mars.addEventListener ('click', () => {planetinform(dataSystem[4])});
    jupiter.addEventListener ('click', () => {planetinform(dataSystem[5])});
    saturnus.addEventListener ('click', () => {planetinform(dataSystem[6])});
    uranus.addEventListener ('click', () => {planetinform(dataSystem[7])});
    neptunus.addEventListener ('click', () => {planetinform(dataSystem[8])});
    
*/