/*
Build a function that obtains the geolocation data from the users web browser.
*/

export function geoDetection() {
    document.addEventListener("DOMContentLoaded", () => { // We add an EventListener of the type DOMContentLoaded.
        const getLocationButton = document.getElementById("getLocationButton"); // We obtain the HTML element and assign it to a variable.
        const locationInfo = document.getElementById("locationInfo"); // We obtain the HTML element and assign it to a variable.

        getLocationButton.addEventListener("click", () => { // We add an EventListener to the getLocationButton constant.
            if ("geolocation" in navigator) { // We verify if the geolocation is supported by the browser.
                navigator.geolocation.getCurrentPosition(function (position) {
                    // We request the current location and if the successfully obtain it, the anonymous function is executed.
                    // This function will receive the data from the object position, since the function stores them in there.
                    const latitude = position.coords.latitude; // The constant will store the latitude data.
                    const longitude = position.coords.longitude; // The constant will store the longitude data
                    const accuracy = position.coords.accuracy; // The constant will store the accuracy data given in meters.
                    const googleMapsLink = `https://maps.google.com/maps?q=${latitude},${longitude}`; // We build the Google Maps link.

                    locationInfo.innerHTML = `
                    <p><b>Latitude:</b> ${latitude}</p>
                    <p><b>Longitude:</b> ${longitude}</p>
                    <p><b>Precision:</b> ${accuracy} meters</p>
                    <p><a href="${googleMapsLink}" target="_blank">Open in Google Maps</a></p>
                `;
                    // We pass the obtained data to the HTML.
                }, function (error) { // If an error has occurred...
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            locationInfo.textContent = "The user has denied the geolocation request.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            locationInfo.textContent = "The geolocation info is not available.";
                            break;
                        case error.TIMEOUT:
                            locationInfo.textContent = "The geolocation request took too long to respond.";
                            break;
                        case error.UNKNOWN_ERROR:
                            locationInfo.textContent = "An unknown error occurred while obtaining geolocation.";
                            break;
                    }
                });
            } else { // The geolocation is not supported by the browser.
                locationInfo.textContent = "Your browser does not support geolocation.";
            }
        });
    });

}