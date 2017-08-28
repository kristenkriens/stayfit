function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    disableDefaultUI: true,
    scrollwheel: false,
    center: {lat: 40.8, lng: -73.8}
  });

  var center;
    function calculateCenter() {
      center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
      calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(center);
    });
};
