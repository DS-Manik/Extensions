navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    document.querySelector("p").textContent = "Your Latitude is " + latitude + " and  longitude is " + longitude;



    var NodeGeocoder = 'node-geocoder';

    var options = {
        provider: 'google',
        httpAdapter: 'https', // Default
        apiKey: ' ', // for Mapquest, OpenCage, Google Premier
        formatter: 'json' // 'gpx', 'string', ...
    };

    var geocoder = NodeGeocoder(options);

    geocoder.reverse({ lat: latitude, lon: longitude }, function(err, res) {
        console.log(res);
    });

});

//----------------------------------



// // Step 1: Get user coordinates
// function getCoordintes() {
//     var options = {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//     };

//     function success(pos) {
//         var crd = pos.coords;
//         var lat = crd.latitude.toString();
//         var lng = crd.longitude.toString();
//         var coordinates = [lat, lng];
//         console.log(`Latitude: ${lat}, Longitude: ${lng}`);
//         getCity(coordinates);
//         return;

//     }

//     function error(err) {
//         console.warn(`ERROR(${err.code}): ${err.message}`);
//     }

//     navigator.geolocation.getCurrentPosition(success, error, options);
// }

// // Step 2: Get city name
// function getCity(coordinates) {
//     var xhr = new XMLHttpRequest();
//     var lat = coordinates[0];
//     var lng = coordinates[1];

//     // Paste your LocationIQ token below.
//     xhr.open('GET', "https: //us1.locationiq.com/v1/reverse.php?key=YOUR_PRIVATE_TOKEN&lat=" + lat + "&lon=" + lng + "&format=json", true);
//     xhr.send();
//     xhr.onreadystatechange = processRequest;
//     xhr.addEventListener("readystatechange", processRequest, false);

//     function processRequest(e) {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var response = JSON.parse(xhr.responseText);
//             var city = response.address.city;
//             console.log(city);
//             return;
//         }
//     }
// }

// getCoordintes();