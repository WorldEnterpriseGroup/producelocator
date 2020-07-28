/*
function initialize() {

  var $ = jQuery;

  if ((ibr.mapDisabled != 'on') || ($('body').width() > 768)) {

    default_value = $.parseJSON(ibr.location_default);

    var mapOptions = {
      zoom: default_value['zoom'],
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: new google.maps.LatLng(default_value['lat'], default_value['lng']),
      scrollwheel: false,
      navigationControl: false,
      scaleControl: false,
      mapTypeControl: false,
      panControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      streetView: new google.maps.StreetViewPanorama(
        document.getElementById('map-canvas'),
        {
          addressControl: false,
          panControl: true,
          panControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
          },
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_CENTER
          },
          zoomControl: true,
          visible: false,
          enableCloseButton: true,
        }
      )
    }

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var markers = [];

    var infowindows = [];

    $('.properties-on-map > .property-on-map').each(function () {

      var location = $.parseJSON($(this).find('input[name=property_location]').val());

      var myLatlng = new google.maps.LatLng(location['lat'], location['lng']);

      var marker_id = 'marker_' + $(this).attr('id').replace('property-marker-', '');

      var element_selector = this;

      markers[marker_id] = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: $(this).find('input[name=property_title]').val(),
        //animation: google.maps.Animation.DROP,
        icon: ibr.uploadUrl + '/' + $(this).find('input[name=property_type]').val() + '.svg'
      });

      infowindows[marker_id] = new google.maps.InfoWindow();

      google.maps.event.addListener(markers[marker_id], "click", function(event) {
        infoWindowShow(element_selector, map, markers[marker_id], infowindows[marker_id]);
      });

    });

    var clusterStyles = [
      {
        opt_textColor: 'black',
        url: ibr.uploadUrl + '/ico.svg',
        height: 49,
        width: 49,
        textSize: 15,
      },
      {
        opt_textColor: 'black',
        url: ibr.uploadUrl + '/ico.svg',
        height: 49,
        width: 49,
        textSize: 15,
      },
      {
        opt_textColor: 'black',
        url: ibr.uploadUrl + '/ico.svg',
        height: 49,
        width: 49,
        textSize: 15,
      }
    ];

    var mcOptions = {styles: clusterStyles};
    var mc = new MarkerClusterer(map, markers, mcOptions);
  }

}

google.maps.event.addDomListener(window, 'load', initialize);

function infoWindowShow(element_selector, map, marker, infowindow) {

  var $ = jQuery;

  infowindow.close();

  var content = $(element_selector).find('.property-tile-on-map').html();

  infowindow.setContent(content);
  infowindow.open(map, marker);
}
*/

////////////////////////////////////////////

// Hardcoded some mock vendors
var vendors = [
  // Times Square
  ['vendor #1', 40.7580, -73.9855, 4],
  // Brooklyn
  ['vendor #2', 40.6782, -73.9442, 5],
  // Bronx
  ['vendor #3', 40.8448, -73.8648, 3],
  // Queens
  ['vendor #4', 40.7282, -73.7949, 2],
  // Hempstead
  ['vendor #5', 40.7062, -73.6187, 1],
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 11,
    // New York, NY by default
    center: { lat: 40.7580, lng: -73.9855 }
  });
  const geocoder = new google.maps.Geocoder();
  document.getElementById("search-btn").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
  });

  setMarkers(map);
}

function geocodeAddress(geocoder, resultsMap) {
  const address = document.getElementById("search-bar").value;
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      resultsMap.setCenter(results[0].geometry.location);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}


function setMarkers(map) {
  const image = {
    url: './images/markers/produce-locator.svg',
  };
  // Adds markers to the map.
  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];
    var marker = new google.maps.Marker({
      position: { lat: vendor[1], lng: vendor[2] },
      map: map,
      icon: image,
      // shape: shape,
      animation: google.maps.Animation.DROP,
      title: vendor[0],
      zIndex: vendor[3]
    });
  }
}