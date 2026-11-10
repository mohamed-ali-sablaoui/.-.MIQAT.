
/* =========================================
   1. GOVERNORATES AND CITIES
========================================= */

const locations = {
    "Ariana":{
        "Ariana":[36.8625,10.1956],
        "La Soukra":[36.8775,10.2464],
        "Raoued":[36.9569,10.1881],
        "Ettadhamen":[36.8328,10.1022]
    },
    "Béja":{
        "Béja":[36.7256,9.1817],
        "Medjez el-Bab":[36.6497,9.6122],
        "Testour":[36.5514,9.4436],
        "Nefza":[36.9667,9.0833]
    },
    "Ben Arous":{
        "Ben Arous":[36.7544,10.2189],
        "Radès":[36.7681,10.2753],
        "Hammam Lif":[36.7281,10.3417],
        "Mégrine":[36.7694,10.2319]
    },
    "Bizerte":{
        "Bizerte":[37.2744,9.8739],
        "Menzel Bourguiba":[37.1536,9.7858],
        "Mateur":[37.0403,9.6656],
        "Ras Jebel":[37.2153,10.1186]
    },
    "Gabès":{
        "Gabès":[33.8815,10.0982],
        "Mareth":[33.6208,10.2908],
        "El Hamma":[33.8914,9.7964],
        "Métouia":[33.9614,10.0061]
    },
    "Gafsa":{
        "Gafsa":[34.425,8.7842],
        "Métlaoui":[34.3208,8.4019],
        "Redeyef":[34.3833,8.1556],
        "Moularès":[34.4833,8.2833]
    },
    "Jendouba":{
        "Jendouba":[36.5011,8.7803],
        "Tabarka":[36.9544,8.758],
        "Aïn Draham":[36.7761,8.6833],
        "Ghardimaou":[36.4472,8.4397]
    },
    "Kairouan":{
        "Kairouan":[35.6781,10.0963],
        "Haffouz":[35.6333,9.6667],
        "Sbikha":[35.9333,10.0167],
        "Bou Hajla":[35.3892,10.0833]
    },
    "Kasserine":{
        "Kasserine":[35.1676,8.8365],
        "Sbiba":[35.5447,9.0733],
        "Sbeitla":[35.2271,9.1195],
        "Fériana":[34.9514,8.5686],
        "Thala":[35.5722,8.6708],
        "Foussana":[35.25,8.7]
    },
    "Kébili":{
        "Kébili":[33.7044,8.969],
        "Douz":[33.4667,9.0167],
        "Souk Lahad":[33.8833,8.9333]
    },
    "Le Kef":{
        "Le Kef":[36.1742,8.7049],
        "Dahmani":[35.95,8.8333],
        "Tajerouine":[35.8917,8.5528],
        "Sakiet Sidi Youssef":[36.2222,8.3556]
    },
    "Mahdia":{
        "Mahdia":[35.5047,11.0622],
        "Ksour Essef":[35.4181,10.9942],
        "Chebba":[35.2372,11.1147],
        "El Jem":[35.3008,10.7167]
    },
    "Manouba":{
        "Manouba":[36.8101,10.0953],
        "Douar Hicher":[36.8322,10.0867],
        "Oued Ellil":[36.8342,9.9989],
        "Tebourba":[36.8328,9.8439]
    },
    "Médenine":{
        "Médenine":[33.3549,10.5055],
        "Djerba Houmt Souk":[33.8758,10.8575],
        "Zarzis":[33.5031,11.1122],
        "Ben Guerdane":[33.1378,11.2197]
    },
    "Monastir":{
        "Monastir":[35.777,10.8262],
        "Moknine":[35.6333,10.9],
        "Jemmal":[35.6223,10.7561],
        "Ksar Hellal":[35.6477,10.8905]
    },
    "Nabeul":{
        "Nabeul":[36.4513,10.7357],
        "Hammamet":[36.4,10.6167],
        "Korba":[36.5786,10.8586],
        "Kelibia":[36.8476,11.0939]
    },
    "Sfax":{
        "Sfax":[34.7406,10.7603],
        "Sakiet Ezzit":[34.8022,10.7117],
        "Agareb":[34.7447,10.4617],
        "Jebeniana":[35.0358,10.9083]
    },
    "Sidi Bouzid":{
        "Sidi Bouzid":[35.0382,9.4858],
        "Regueb":[34.8583,9.7861],
        "Meknassy":[34.6097,9.6081],
        "Jilma":[35.2731,9.4231]
    },
    "Siliana":{
        "Siliana":[36.0849,9.3708],
        "Makthar":[35.8572,9.2003],
        "Gaâfour":[36.32,9.325],
        "Bou Arada":[36.3528,9.6219]
    },
    "Sousse":{
        "Sousse":[35.8256,10.6411],
        "Msaken":[35.7292,10.58],
        "Enfidha":[36.1361,10.3808],
        "Hammam Sousse":[35.86,10.6031]
    },
    "Tataouine":{
        "Tataouine":[32.9297,10.4518],
        "Ghomrassen":[33.0608,10.3453],
        "Bir Lahmar":[33.25,10.2],
        "Remada":[32.3167,10.4]
    },
    "Tozeur":{
        "Tozeur":[33.9197,8.1335],
        "Nefta":[33.8731,7.8778],
        "Degache":[33.9761,8.2167],
        "Tameghza":[34.3833,7.95]
    },
    "Tunis":{
        "Tunis":[36.8065,10.1815],
        "La Marsa":[36.8782,10.3247],
        "Carthage":[36.8528,10.3233],
        "Le Bardo":[36.8092,10.1406],
        "Sidi Bou Saïd":[36.8703,10.3417]
    },
    "Zaghouan":{
        "Zaghouan":[36.4029,10.1429],
        "Fahs":[36.3736,9.9061],
        "Bir Mcherga":[36.5319,9.9719],
        "Nadhour":[36.1,10.15]
    }
};


/* =========================================
   2. GLOBAL VARIABLES
========================================= */

const $ = id => document.getElementById(id);

let latitude = 35.5447;
let longitude = 9.0733;

let selectedCity = "Sbiba";
let selectedGovernorate = "Kasserine";

let currentPrayerData = null;
let countdownInterval = null;
let prayerCheckInterval = null;

let weatherCache = null;
let prayerCache = {};

const CACHE_DURATION = 10 * 60 * 1000;

const PRAYERS = [
    {name:"Fajr",label:"Fajr",icon:"fa-cloud-moon"},
    {name:"Dhuhr",label:"Dohr",icon:"fa-sun"},
    {name:"Asr",label:"Asr",icon:"fa-cloud-sun"},
    {name:"Maghrib",label:"Maghrib",icon:"fa-cloud-moon"},
    {name:"Isha",label:"Icha",icon:"fa-moon"}
];


/* =========================================
   3. DATE AND CLOCK
========================================= */

function updateDate() {
    const now = new Date();
    const options = { timeZone:"Africa/Tunis", day:"numeric", month:"long", year:"numeric" };
    $("currentDate").textContent = now.toLocaleDateString("fr-FR", options);
    $("currentDay").textContent = now.toLocaleDateString("fr-FR", {
        timeZone:"Africa/Tunis", weekday:"long"
    });
}

updateDate();


/* =========================================
   4. LOCATION
========================================= */

function initializeLocations() {

    Object.keys(locations).forEach(governorate => {

        const option = document.createElement("option");

        option.value = governorate;
        option.textContent = governorate;

        $("governorate").appendChild(option);

    });

    $("governorate").value = selectedGovernorate;

    updateCities();

    const saved = localStorage.getItem("weatherPrayerLocation");

    if (saved) {
        try {
            const data = JSON.parse(saved);

            if (
                locations[data.governorate] &&
                locations[data.governorate][data.city]
            ) {
                selectedGovernorate = data.governorate;
                selectedCity = data.city;

                latitude = locations[data.governorate][data.city][0];
                longitude = locations[data.governorate][data.city][1];

                $("governorate").value = selectedGovernorate;
                updateCities();
                $("city").value = selectedCity;
            }
        } catch(error) {
            console.error("Location storage error:",error);
        }
    }

    $("locationDescription").textContent =
        selectedCity + ", " + selectedGovernorate;
    $("city").disabled = false;

}

function updateCities() {
    const governorate = $("governorate").value;
    const citySelect = $("city");
    citySelect.innerHTML = '<option value="">Ville</option>';

    if (!locations[governorate]) {
        citySelect.disabled = true;
        return;
    }

    citySelect.disabled = false;
    Object.keys(locations[governorate]).forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });

    const preferredCity = locations[governorate][selectedCity]
        ? selectedCity
        : Object.keys(locations[governorate])[0];
    citySelect.value = preferredCity;
}

function saveLocation() {
    try {
        localStorage.setItem("weatherPrayerLocation", JSON.stringify({
            governorate:selectedGovernorate,
            city:selectedCity
        }));
    } catch (error) {
        console.warn("Impossible d'enregistrer la localisation :", error);
    }
}

function selectLocation() {

    selectedGovernorate = $("governorate").value;
    selectedCity = $("city").value;

    if (!locations[selectedGovernorate]?.[selectedCity]) return;

    [latitude,longitude] =
        locations[selectedGovernorate][selectedCity];

    saveLocation();

    $("locationDescription").textContent =
        selectedCity + ", " + selectedGovernorate;

    weatherCache = null;
    prayerCache = {};

    loadAllData();

}


/* =========================================
   5. GEOLOCATION
========================================= */

function useMyLocation() {

    if (!navigator.geolocation) {
        alert("La géolocalisation n'est pas disponible.");
        return;
    }

    $("geoBtn").disabled = true;
    $("geoBtn").textContent = "Localisation...";

    navigator.geolocation.getCurrentPosition(

        position => {

            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            selectedCity = "Ma position";
            selectedGovernorate = "Tunisie";

            $("governorate").value = "";
            $("city").innerHTML = '<option value="">Ville</option>';
            $("city").disabled = true;
            $("weatherCity").textContent = "Ma position";

            $("locationDescription").textContent =
                "Position GPS détectée";

            localStorage.removeItem("weatherPrayerLocation");

            weatherCache = null;
            prayerCache = {};

            $("geoBtn").disabled = false;
            $("geoBtn").innerHTML =
                '<i class="fa-solid fa-location-crosshairs"></i> Ma position';

            loadAllData();

        },

        error => {

            let message = "Impossible de déterminer votre position.";

            if (error.code === 1) {
                message = "Autorisez la géolocalisation dans votre navigateur.";
            }

            alert(message);

            $("geoBtn").disabled = false;
            $("geoBtn").innerHTML =
                '<i class="fa-solid fa-location-crosshairs"></i> Ma position';

        },

        {
            enableHighAccuracy:false,
            timeout:10000,
            maximumAge:300000
        }

    );

}


/* =========================================
   6. WEATHER INFORMATION
========================================= */

function getWeatherInfo(code,isDay=1) {

    const conditions = {
        0:["Ciel dégagé",isDay?"fa-sun":"fa-moon","sunny"],
        1:["Principalement dégagé","fa-cloud-sun","sunny"],
        2:["Partiellement nuageux","fa-cloud-sun","cloudy"],
        3:["Couvert","fa-cloud","cloudy"],
        45:["Brouillard","fa-smog","cloudy"],
        48:["Brouillard givrant","fa-smog","cloudy"],
        51:["Bruine légère","fa-cloud-rain","rainy"],
        53:["Bruine modérée","fa-cloud-rain","rainy"],
        55:["Bruine dense","fa-cloud-showers-heavy","rainy"],
        56:["Bruine verglaçante","fa-cloud-rain","rainy"],
        57:["Bruine verglaçante dense","fa-cloud-rain","rainy"],
        61:["Pluie légère","fa-cloud-rain","rainy"],
        63:["Pluie modérée","fa-cloud-showers-heavy","rainy"],
        65:["Forte pluie","fa-cloud-showers-heavy","rainy"],
        66:["Pluie verglaçante","fa-cloud-rain","rainy"],
        67:["Forte pluie verglaçante","fa-cloud-showers-heavy","rainy"],
        71:["Neige légère","fa-snowflake","snowy"],
        73:["Neige modérée","fa-snowflake","snowy"],
        75:["Forte neige","fa-snowflake","snowy"],
        77:["Grains de neige","fa-snowflake","snowy"],
        80:["Averses légères","fa-cloud-rain","rainy"],
        81:["Averses modérées","fa-cloud-showers-heavy","rainy"],
        82:["Fortes averses","fa-cloud-showers-heavy","rainy"],
        85:["Averses de neige","fa-snowflake","snowy"],
        86:["Fortes averses de neige","fa-snowflake","snowy"],
        95:["Orage","fa-cloud-bolt","stormy"],
        96:["Orage avec grêle","fa-cloud-bolt","stormy"],
        99:["Orage violent avec grêle","fa-cloud-bolt","stormy"]
    };

    return conditions[code] ||
        ["Conditions inconnues","fa-cloud","cloudy"];

}


/* =========================================
   7. WEATHER API WITH CACHE
========================================= */

async function getWeatherData() {

    if (
        weatherCache &&
        Date.now()-weatherCache.time < CACHE_DURATION
    ) {
        return weatherCache.data;
    }

    const params = new URLSearchParams({

        latitude,
        longitude,

        current:[
            "temperature_2m",
            "relative_humidity_2m",
            "apparent_temperature",
            "is_day",
            "precipitation",
            "weather_code",
            "surface_pressure",
            "wind_speed_10m",
            "wind_direction_10m"
        ].join(","),

        hourly:[
            "temperature_2m",
            "precipitation_probability",
            "precipitation",
            "weather_code",
            "wind_speed_10m"
        ].join(","),

        daily:[
            "weather_code",
            "temperature_2m_max",
            "temperature_2m_min",
            "sunrise",
            "sunset",
            "uv_index_max",
            "precipitation_probability_max",
            "precipitation_sum",
            "wind_speed_10m_max"
        ].join(","),

        timezone:"Africa/Tunis",
        forecast_days:"2"

    });

    const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?"+params
    );

    if (!response.ok) {
        throw new Error("Erreur lors du chargement de la météo.");
    }

    const data = await response.json();

    weatherCache = {
        time:Date.now(),
        data
    };

    return data;

}


/* =========================================
   8. DISPLAY CURRENT WEATHER
========================================= */

function displayCurrentWeather(data) {

    const current = data.current;

    const info = getWeatherInfo(
        current.weather_code,
        current.is_day
    );

    $("temperature").textContent =
        Math.round(current.temperature_2m);

    $("weatherDescription").textContent = info[0];

    $("weatherIcon").innerHTML =
        `<i class="fa-solid ${info[1]}"></i>`;

    $("weatherMain").className = "weather-main "+info[2];

    $("weatherCity").textContent =
        selectedCity + ", Tunisie";

    $("humidity").textContent =
        current.relative_humidity_2m;

    $("wind").textContent =
        Math.round(current.wind_speed_10m);

    $("feelsLike").textContent =
        Math.round(current.apparent_temperature)+"°";

    $("pressure").textContent =
        Math.round(current.surface_pressure)+" hPa";

    $("rainCurrent").textContent =
        current.precipitation > 0
        ? current.precipitation+" mm"
        : "Aucune";

    $("uv").textContent =
        data.daily.uv_index_max[0];

    displayRain(data);
    displayWeatherAlert(data);

}


/* =========================================
   9. RAIN INFORMATION
========================================= */

function displayRain(data) {

    const probability =
        data.daily.precipitation_probability_max[0];

    const amount =
        data.daily.precipitation_sum[0];

    const rainBox = $("rainInfo");

    if (
        probability === null ||
        probability === undefined ||
        probability <= 0
    ) {
        rainBox.classList.remove("show");
        rainBox.textContent = "";
        return;
    }

    rainBox.classList.add("show");

    rainBox.innerHTML =
        `<i class="fa-solid fa-cloud-rain"></i>
        Probabilité de pluie aujourd'hui : <strong>${probability}%</strong>.
        Quantité prévue : <strong>${amount ?? 0} mm</strong>.`;

}


/* =========================================
   10. SEVERE WEATHER ALERT
========================================= */

function displayWeatherAlert(data) {

    const currentCode = data.current.weather_code;

    const wind = data.current.wind_speed_10m;

    const maxWind = data.daily.wind_speed_10m_max[0];

    const codes = data.hourly.weather_code;

    const severeCodes = [65,67,75,82,86,95,96,99];

    const severeNow = severeCodes.includes(currentCode);

    const severeForecast = codes.some(
        (code,index) =>
            index < 24 && severeCodes.includes(code)
    );

    const strongWind = Math.max(wind,maxWind) >= 50;

    const box = $("weatherAlert");

    if (!severeNow && !severeForecast && !strongWind) {
        box.classList.remove("show");
        box.textContent = "";
        return;
    }

    let messages = [];

    if (severeNow) {
        messages.push("Conditions météorologiques difficiles actuellement.");
    } else if (severeForecast) {
        messages.push("Un phénomène météorologique potentiellement intense est prévu dans les prochaines 24 heures.");
    }

    if (strongWind) {
        messages.push("Vents forts prévus ou observés.");
    }

    box.innerHTML =
        '<i class="fa-solid fa-triangle-exclamation"></i>' +
        '<strong>Attention :</strong> ' +
        messages.join(" ");

    box.classList.add("show");

}


/* =========================================
   11. HOURLY FORECAST
========================================= */

function displayHourly(data) {

    const grid = $("hourlyGrid");

    grid.innerHTML = "";

    const times = data.hourly.time;

    const currentTime = data.current.time;

    let startIndex = times.findIndex(
        time => time >= currentTime
    );

    if (startIndex < 0) startIndex = 0;

    for (
        let i=startIndex;
        i<Math.min(startIndex+24,times.length);
        i++
    ) {

        const time = times[i].split("T")[1];

        const hourTimestamp = new Date(times[i]).getTime();
        const dayIndex = Math.max(0, data.daily.time.indexOf(times[i].split("T")[0]));
        const sunrise = new Date(data.daily.sunrise[dayIndex]).getTime();
        const sunset = new Date(data.daily.sunset[dayIndex]).getTime();
        const isDay = hourTimestamp >= sunrise && hourTimestamp < sunset ? 1 : 0;
        const info = getWeatherInfo(data.hourly.weather_code[i], isDay);

        const temperature =
            Math.round(data.hourly.temperature_2m[i]);

        const rain =
            data.hourly.precipitation_probability[i];

        const card = document.createElement("div");

        card.className = "hour-card";

        card.innerHTML = `
            <p>${time}</p>
            <i class="fa-solid ${info[1]}"></i>
            <strong>${temperature}°</strong>
            ${
                rain > 0
                ? `<small class="rain-label">${rain}% pluie</small>`
                : `<small>Pas de pluie</small>`
            }
        `;

        grid.appendChild(card);

    }

}


/* =========================================
   12. TWO-DAY FORECAST
========================================= */

function displayForecast(data) {

    const grid = $("forecastGrid");

    grid.innerHTML = "";

    data.daily.time.forEach((date,index) => {

        const dateObject = new Date(date+"T12:00:00");

        const day = index===0
            ? "Aujourd'hui"
            : "Demain";

        const info = getWeatherInfo(
            data.daily.weather_code[index]
        );

        const max = Math.round(
            data.daily.temperature_2m_max[index]
        );

        const min = Math.round(
            data.daily.temperature_2m_min[index]
        );

        const rain = data.daily.precipitation_probability_max[index];

        const card = document.createElement("div");

        card.className = "forecast-card";

        card.innerHTML = `
            <div>
                <div class="forecast-day">${day}</div>
                <div class="forecast-description">${info[0]}</div>
                <div class="forecast-description">
                    Vent : ${Math.round(data.daily.wind_speed_10m_max[index])} km/h
                </div>
                ${
                    rain > 0
                    ? `<div class="forecast-description" style="color:#3986b6">
                        Pluie : ${rain}%
                       </div>`
                    : ""
                }
            </div>

            <div class="forecast-icon">
                <i class="fa-solid ${info[1]}"></i>
            </div>

            <div class="forecast-temp">
                ${max}°
                <small>${min}° min</small>
            </div>
        `;

        grid.appendChild(card);

    });

}


/* =========================================
   13. LOAD WEATHER
========================================= */

async function loadWeather() {

    const data = await getWeatherData();

    displayCurrentWeather(data);
    displayHourly(data);
    displayForecast(data);

}


/* =========================================
   14. PRAYER API WITH CACHE
========================================= */

function getLocalDate(offsetDays = 0) {
    const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Africa/Tunis",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(new Date());

    const values = {};
    parts.forEach(part => values[part.type] = part.value);

    const date = new Date(Date.UTC(
        Number(values.year),
        Number(values.month) - 1,
        Number(values.day) + offsetDays
    ));

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
}

async function getPrayerData(date = getLocalDate()) {
    const cacheKey = `${date}|${latitude.toFixed(4)}|${longitude.toFixed(4)}`;

    if (!prayerCache || typeof prayerCache !== "object") prayerCache = {};

    const cached = prayerCache[cacheKey];
    if (cached && Date.now() - cached.time < CACHE_DURATION) {
        return cached.data;
    }

    const url = new URL(`https://api.aladhan.com/v1/timings/${date}`);
    url.search = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude),
        method: "3"
    }).toString();

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Erreur lors du chargement des horaires de prière.");
    }

    const result = await response.json();
    if (result.code !== 200 || !result.data?.timings) {
        throw new Error("Horaires de prière indisponibles pour cette position.");
    }

    prayerCache[cacheKey] = {time: Date.now(), data: result.data};
    return result.data;
}

async function loadPrayerTimes() {
    const prayerStatus = $("prayerStatus");
    if (prayerStatus) prayerStatus.textContent = "Chargement des horaires de prière...";

    try {
        const todayData = await getPrayerData(getLocalDate());
        displayPrayerTimes(todayData);

        const now = tunisNow();
        const currentMinutes = now.hours * 60 + now.minutes;
        const todayPrayerMinutes = PRAYERS.map(prayer =>
            timeToMinutes(todayData.timings[prayer.name])
        );
        const afterLastPrayer = currentMinutes >= Math.max(...todayPrayerMinutes);

        if (afterLastPrayer) {
            const tomorrowData = await getPrayerData(getLocalDate(1));
            const tomorrowFajr = cleanTime(tomorrowData.timings.Fajr);
            const prayerTimes = PRAYERS.map(prayer => ({
                ...prayer,
                time: cleanTime(todayData.timings[prayer.name]),
                minutes: timeToMinutes(todayData.timings[prayer.name])
            }));
            updatePrayerCountdown(prayerTimes, tomorrowFajr);
        }

        if (prayerStatus) prayerStatus.textContent = "Horaires calculés pour votre position.";
    } catch (error) {
        console.error("Prayer loading error:", error);
        $("prayerGrid").innerHTML = '<p class="status error">Impossible de charger les horaires de prière. Vérifiez votre connexion puis actualisez.</p>';
        $("nextPrayer").textContent = "Indisponible";
        $("nextPrayerTime").textContent = "--:--";
        $("countdown").textContent = "Les horaires ne sont pas disponibles.";
        if (prayerStatus) prayerStatus.textContent = "Erreur de chargement des horaires.";
        throw error;
    }
}

/* =========================================
   15. TIME UTILITIES
========================================= */

function cleanTime(value) {
    return value.split(" ")[0].substring(0,5);
}

function timeToMinutes(value) {

    const [hours,minutes] =
        cleanTime(value).split(":").map(Number);

    return hours*60+minutes;

}

function tunisNow() {

    const parts = new Intl.DateTimeFormat("en-GB",{
        timeZone:"Africa/Tunis",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hourCycle:"h23"
    }).formatToParts(new Date());

    const values = {};

    parts.forEach(part => values[part.type]=part.value);

    return {
        hours:Number(values.hour),
        minutes:Number(values.minute),
        seconds:Number(values.second)
    };

}


/* =========================================
   16. PRAYER DISPLAY
========================================= */

function displayPrayerTimes(data) {

    currentPrayerData = data;

    const timings = data.timings;

    const grid = $("prayerGrid");

    grid.innerHTML = "";

    const now = tunisNow();

    const currentMinutes =
        now.hours*60+now.minutes;

    const prayerTimes = PRAYERS.map(prayer => ({
        ...prayer,
        time:cleanTime(timings[prayer.name]),
        minutes:timeToMinutes(timings[prayer.name])
    }));

    const foundNextIndex = prayerTimes.findIndex(
        prayer => prayer.minutes > currentMinutes
    );
    const nextIndex = foundNextIndex === -1 ? 0 : foundNextIndex;

    prayerTimes.forEach((prayer,index) => {

        const isNext = index===nextIndex;

        const card = document.createElement("div");

        card.className =
            "prayer-card"+(isNext?" active":"");

        card.innerHTML = `
            <i class="fa-solid ${prayer.icon}"></i>
            <h3>${prayer.label}</h3>
            <strong>${prayer.time}</strong>
            <p>${isNext?"Prochaine prière":"Heure locale"}</p>
        `;

        grid.appendChild(card);

    });

    $("sunrise").textContent =
        cleanTime(timings.Sunrise);

    $("sunset").textContent =
        cleanTime(timings.Sunset);

    $("hijriDate").textContent =
        `${data.date.hijri.day} ${data.date.hijri.month.ar} ${data.date.hijri.year} هـ`;

    $("gregorianDate").textContent =
        data.date.readable;

    displayRamadan(data);
    updatePrayerCountdown(prayerTimes);

}


/* =========================================
   17. RAMADAN
========================================= */

function displayRamadan(data) {

    const hijriMonth = Number(data.date.hijri.month.number);

    const box = $("ramadanBox");

    if (hijriMonth !== 9) {
        box.classList.remove("show");
        return;
    }

    const fajr = timeToMinutes(data.timings.Fajr);

    const imsakMinutes = (fajr-10+1440)%1440;

    const imsakHours =
        String(Math.floor(imsakMinutes/60)).padStart(2,"0");

    const imsakMins =
        String(imsakMinutes%60).padStart(2,"0");

    $("imsakTime").textContent =
        `${imsakHours}:${imsakMins}`;

    $("iftarTime").textContent =
        cleanTime(data.timings.Maghrib);

    box.classList.add("show");

}


/* =========================================
   18. PRAYER COUNTDOWN
========================================= */

function updatePrayerCountdown(prayerTimes, tomorrowFajr = null) {
    clearInterval(countdownInterval);

    function update() {
        const now = tunisNow();
        const currentSeconds = now.hours * 3600 + now.minutes * 60 + now.seconds;
        const currentMinutes = now.hours * 60 + now.minutes;
        const nextIndexToday = prayerTimes.findIndex(prayer => prayer.minutes > currentMinutes);
        const isTomorrow = nextIndexToday === -1;
        const nextIndex = isTomorrow ? 0 : nextIndexToday;
        const nextPrayer = prayerTimes[nextIndex];
        const targetTime = isTomorrow && tomorrowFajr ? tomorrowFajr : nextPrayer.time;
        const targetMinutes = timeToMinutes(targetTime);
        let targetSeconds = targetMinutes * 60;

        if (isTomorrow) targetSeconds += 86400;
        const difference = Math.max(0, targetSeconds - currentSeconds);
        const hours = Math.floor(difference / 3600);
        const minutes = Math.floor((difference % 3600) / 60);
        const seconds = difference % 60;

        $("nextPrayer").textContent = isTomorrow
            ? `${nextPrayer.label} (demain)`
            : nextPrayer.label;
        $("nextPrayerTime").textContent = targetTime;
        $("countdown").textContent =
            `Temps restant : ${String(hours).padStart(2, "0")}h ` +
            `${String(minutes).padStart(2, "0")}m ` +
            `${String(seconds).padStart(2, "0")}s`;

        [...$("prayerGrid").children].forEach((card, index) => {
            card.classList.toggle("active", index === nextIndex);
            const note = card.querySelector("p");
            if (note) note.textContent = index === nextIndex
                ? (isTomorrow ? "Prochaine prière · demain" : "Prochaine prière")
                : "Heure locale";
        });
    }

    update();
    countdownInterval = setInterval(update, 1000);
}

/* =========================================
   19. PRAYER NOTIFICATIONS
========================================= */

function notificationEnabled() {
    return localStorage.getItem("prayerNotifications")==="true";
}

function updateNotificationUI() {

    $("notificationToggle").checked =
        notificationEnabled();

    if (!("Notification" in window) || typeof Notification === "undefined") {

        $("notificationStatus").textContent =
            "Votre navigateur ne prend pas en charge les notifications.";

        $("notificationToggle").disabled = true;

        return;

    }

    if (typeof Notification === "undefined") {
        $("notificationStatus").textContent =
            "Votre navigateur ne prend pas en charge les notifications.";
        $("notificationToggle").disabled = true;
        return;
    }

    $("notificationToggle").disabled = false;

    if (Notification.permission==="granted") {

        $("notificationStatus").textContent =
            "Notifications autorisées.";

    } else if (Notification.permission==="denied") {

        $("notificationStatus").textContent =
            "Notifications bloquées dans les paramètres du navigateur.";

    } else {

        $("notificationStatus").textContent =
            "Autorisez les notifications pour recevoir les rappels.";

    }

}

async function requestNotificationPermission() {

    if (!("Notification" in window) || typeof Notification === "undefined") {
        alert("Notifications non prises en charge.");
        return;
    }

    try {

        const permission =
            await Notification.requestPermission();

        if (permission==="granted") {

            localStorage.setItem("prayerNotifications","true");

            $("notificationToggle").checked = true;

            $("notificationStatus").textContent =
                "Notifications activées avec succès.";

        } else {

            $("notificationStatus").textContent =
                "Autorisation non accordée.";

        }

    } catch(error) {

        console.error(error);

    }

    updateNotificationUI();

}

function sendPrayerNotification(prayer) {

    if (
        !notificationEnabled() ||
        typeof Notification === "undefined" ||
        Notification.permission !== "granted"
    ) return;

    const today = getLocalDate();

    const key =
        `notified-${today}-${prayer.name}`;

    if (localStorage.getItem(key)==="true") return;

    new Notification("Météo & Prières",{
        body:`C'est l'heure de la prière ${prayer.label}.`,
        icon:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/svgs/solid/mosque.svg",
        tag:key
    });

    localStorage.setItem(key,"true");

}

function checkPrayerNotifications() {

    if (!currentPrayerData) return;

    if (!notificationEnabled()) return;

    const now = tunisNow();

    const currentMinutes =
        now.hours*60+now.minutes;

    PRAYERS.forEach(prayer => {

        const prayerMinutes =
            timeToMinutes(currentPrayerData.timings[prayer.name]);

        if (currentMinutes === prayerMinutes) {
            sendPrayerNotification(prayer);
        }

    });

}


/* =========================================
   20. QIBLA DIRECTION
========================================= */

function calculateQibla() {

    const kaabaLat = 21.4225*Math.PI/180;
    const kaabaLon = 39.8262*Math.PI/180;

    const userLat = latitude*Math.PI/180;
    const userLon = longitude*Math.PI/180;

    const deltaLon = kaabaLon-userLon;

    const y = Math.sin(deltaLon);

    const x =
        Math.cos(userLat)*Math.tan(kaabaLat)-
        Math.sin(userLat)*Math.cos(deltaLon);

    let bearing =
        Math.atan2(y,x)*180/Math.PI;

    bearing = (bearing+360)%360;

    $("qiblaDegree").textContent =
        Math.round(bearing)+"°";

    $("qiblaDirection").textContent =
        "Par rapport au nord géographique";

    $("qiblaArrow").style.transform =
        `rotate(${bearing}deg)`;

}


/* =========================================
   21. DAILY DHIKR
========================================= */

const adhkar = [

    {
        arabic:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        translation:"Gloire et louange à Allah."
    },

    {
        arabic:"أَسْتَغْفِرُ اللَّهَ",
        translation:"Je demande pardon à Allah."
    },

    {
        arabic:"الْحَمْدُ لِلَّهِ",
        translation:"Louange à Allah."
    },

    {
        arabic:"سُبْحَانَ اللَّهِ",
        translation:"Gloire à Allah."
    },

    {
        arabic:"لَا إِلَهَ إِلَّا اللَّهُ",
        translation:"Il n'y a de divinité qu'Allah."
    }

];

let dhikrIndex = 0;

function displayDhikr() {

    const dhikr = adhkar[dhikrIndex];

    $("dhikrArabic").textContent =
        dhikr.arabic;

    $("dhikrTranslation").textContent =
        dhikr.translation;

    $("dhikrNumber").textContent =
        `${dhikrIndex+1} / ${adhkar.length}`;

}

$("nextDhikr").addEventListener("click",() => {

    dhikrIndex =
        (dhikrIndex+1)%adhkar.length;

    displayDhikr();

});


/* =========================================
   22. DARK MODE
========================================= */

function toggleTheme() {

    const dark =
        document.body.classList.toggle("dark-mode");

    $("themeBtn").innerHTML = dark
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';

    localStorage.setItem("darkMode",dark?"true":"false");

}

function initializeTheme() {

    if (localStorage.getItem("darkMode")==="true") {
        document.body.classList.add("dark-mode");

        $("themeBtn").innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    }

}


/* =========================================
   23. LOAD ALL DATA
========================================= */

let loadRequestId = 0;

async function loadAllData() {
    const requestId = ++loadRequestId;
    $("refreshBtn").disabled = true;
    $("globalStatus").textContent = "Actualisation des informations...";
    $("globalStatus").classList.remove("error");

    const results = await Promise.allSettled([loadWeather(), loadPrayerTimes()]);

    // Ignore les réponses d'une ancienne localisation/actualisation.
    if (requestId !== loadRequestId) return;

    $("refreshBtn").disabled = false;
    const errors = results.filter(result => result.status === "rejected");

    if (errors.length) {
        $("globalStatus").textContent =
            "Certaines données sont indisponibles. Vérifiez votre connexion puis réessayez.";
        $("globalStatus").classList.add("error");
        console.error(errors);
    } else {
        $("globalStatus").textContent = "Dernière actualisation : " +
            new Date().toLocaleTimeString("fr-FR", {timeZone:"Africa/Tunis"});
        $("globalStatus").classList.remove("error");
    }

    calculateQibla();
}


/* =========================================
   24. EVENTS
========================================= */

$("governorate").addEventListener("change",() => {

    selectedGovernorate = $("governorate").value;

    if (!locations[selectedGovernorate]) return;

    const firstCity = Object.keys(locations[selectedGovernorate])[0];
    selectedCity = firstCity;

    updateCities();

    $("city").value = firstCity;

    selectLocation();

});

$("city").addEventListener("change",selectLocation);

$("refreshBtn").addEventListener("click",() => {

    weatherCache = null;
    prayerCache = {};

    loadAllData();

});

$("geoBtn").addEventListener("click",useMyLocation);

$("themeBtn").addEventListener("click",toggleTheme);

$("permissionBtn").addEventListener(
    "click",
    requestNotificationPermission
);

$("notificationToggle").addEventListener("change",async event => {

    if (event.target.checked) {

        await requestNotificationPermission();

        if (typeof Notification === "undefined" || Notification.permission !== "granted") {
            event.target.checked = false;
            localStorage.setItem("prayerNotifications", "false");
        }

    } else {

        localStorage.setItem("prayerNotifications","false");

        $("notificationStatus").textContent =
            "Notifications désactivées.";

    }

    updateNotificationUI();

});


/* =========================================
   25. AUTOMATIC UPDATES
========================================= */

// Vérification des notifications chaque seconde.
// Le navigateur doit garder la page ouverte.

prayerCheckInterval =
    setInterval(checkPrayerNotifications,1000);

// Actualisation des données toutes les 10 minutes.

setInterval(() => {

    weatherCache = null;
    prayerCache = {};

    loadAllData();

},10*60*1000);

// Actualisation de la date.

setInterval(updateDate,60000);

// Rechargement des horaires à minuit.

let lastLocalDate = getLocalDate();

setInterval(() => {

    const today = getLocalDate();

    if (today!==lastLocalDate) {

        lastLocalDate = today;

        weatherCache = null;
        prayerCache = {};

        loadAllData();

    }

},30000);


/* =========================================
   26. INITIALIZATION
========================================= */

initializeLocations();
initializeTheme();
updateNotificationUI();
displayDhikr();
loadAllData();

