/*
Create a function that detects when the screen reach certain dimensions.
Below that dimension, the iframes should disappear and only show an external link.
*/

export function checkScreenWidth() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth; // screenWidth is equal to the window width or the document width.
    const YTvideo = document.getElementById("youtube-iframe"); // We obtain the HTML element and assign it to a variable.
    const map = document.getElementById("maps-iframe"); // We obtain the HTML element and assign it to a variable.

    if (screenWidth <= 768) { // If screenWidth is equal or lower than 768 pixels...
        YTvideo.innerHTML = '<a href="https://www.youtube.com/watch?v=PPOIS1XBTX0" target="_blank">YouTube Video</a>'; // The content of YTvideo will be the link of the video.
        map.innerHTML = '<a href="https://maps.app.goo.gl/rg1yPkVZ5uiYYVS78" target="_blank">Google Maps</a>'; // The content of map will be the link to Google Maps.
    } else { // If screenWidth is greater than 768 pixels...
        // The content of YTvideo will be the iframe of the YouTube video.
        YTvideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/PPOIS1XBTX0?si=7LIICgn01-w1pPnS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        // The content of map will be the iframe of Google Maps.
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11039.025178542921!2d6.037743971004225!3d46.2351909298827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c62fcec737b11%3A0x81bef3ae7a885e31!2sCERN!5e0!3m2!1ses!2smx!4v1694711200167!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
}