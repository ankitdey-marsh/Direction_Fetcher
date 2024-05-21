let map;
const directionsRendererOptions = {
  polylineOptions: {
    strokeColor: 'red'
  }
};
const directionsRenderer = new google.maps.DirectionsRenderer(directionsRendererOptions);
const directionsService = new google.maps.DirectionsService();


async function initMap() {
  const response = await fetch('./latlng.txt');
  const data = await response.text();
  const lat1 = parseFloat(parseFloat(data.split('\n')[0]).toFixed(7));
  const lng1 = parseFloat(parseFloat(data.split('\n')[1]).toFixed(7));
  const lat2 = parseFloat(parseFloat(data.split('\n')[2]).toFixed(7));
  const lng2 = parseFloat(parseFloat(data.split('\n')[3]).toFixed(7));
  const dist = parseFloat(parseFloat(data.split('\n')[4]).toFixed(7));
  const div = document.getElementById('distance');
  const textfield = document.createElement('p');
  textfield.textContent = dist+" km";
  textfield.classList.add('highlight');
  div.appendChild(textfield);
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: lat1, lng: lng1 },
    zoom: 19,
  });
  
  const destination = { lat: lat2, lng: lng2 }; // replace with the destination coordinates

  directionsService.route({
    origin: { lat: lat1, lng: lng1 },
    destination: destination,
    travelMode: 'TRANSIT' // you can change this to 'WALKING', 'BICYCLING', or 'TRANSIT'
  }, (result, status) => {
    if (status === 'OK') {
      directionsRenderer.setDirections(result);

      // Get the distance of the route
      const distance = result.routes[0].legs[0].distance.text;

      // Create a distance overlay
      const distanceOverlay = new DistanceOverlay(distance);

      // Set the position of the distance overlay to the midpoint of the route
      const midPoint = new google.maps.LatLng(
        (result.routes[0].bounds.getNorthEast().lat() + result.routes[0].bounds.getSouthWest().lat()) / 2,
        (result.routes[0].bounds.getNorthEast().lng() + result.routes[0].bounds.getSouthWest().lng()) / 2
      );
      distanceOverlay.setPosition(midPoint);

      // Add the distance overlay to the map
      distanceOverlay.setMap(map);
    }
  });

  directionsRenderer.setMap(map);
}

initMap();