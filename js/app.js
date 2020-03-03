function getIcon() {
  return {
    url: `data:image/svg+xml;utf-8, <svg width="22px" height="29px" viewBox="2px 0px 22px 29px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <path d="M8,0 C3.57714286,0 0,3.57714286 0,8 C0,14 8,22.8571429 8,22.8571429 C8,22.8571429 16,14 16,8 C16,3.57714286 12.4228571,0 8,0 Z M8,10.8571429 C6.42285714,10.8571429 5.14285714,9.57714286 5.14285714,8 C5.14285714,6.42285714 6.42285714,5.14285714 8,5.14285714 C9.57714286,5.14285714 10.8571429,6.42285714 10.8571429,8 C10.8571429,9.57714286 9.57714286,10.8571429 8,10.8571429 Z" id="path-1"></path> <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-2"> <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset> <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur> <feColorMatrix values="0 0 0 0 0.117647059 0 0 0 0 0.149019608 0 0 0 0 0.176470588 0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix> </filter> </defs> <g id="ic_location_on_white_24px" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(5.000000, 2.000000)"> <ellipse id="Oval" fill="%23222C33" cx="8" cy="8" rx="3.42857143" ry="3.42857143"></ellipse> <g id="Shape" fill-rule="nonzero"> <use fill="black" fill-opacity="1" filter="url(%23filter-2)" xlink:href="%23path-1"></use> <use fill="%23ffffff" fill-rule="evenodd" xlink:href="%23path-1"></use> </g> </g> </svg>`
  };
}

function getContentString(info) {
  return `
  <div class="map-infoWindow">
  <h3>${info.name}</h3>

  <p class="location text-lite">
  ${info.location} &mdash; ${info.date}
  </p>

  <p class="text-lite">
   ${info.talks.join('<br>')}
  </p>

  </div>
  `;
}

function createMarker(map, info) {
  var contentString = getContentString(info);

  var marker = new google.maps.Marker({
    position: { lat: info.lat, lng: info.lng },
    map: map,
    icon: getIcon()
  });

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('mouseover', function () {
    infowindow.open(map, marker);
  });
  marker.addListener('mouseout', function () {
    infowindow.close(map, marker);
  });

}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {
      lat: 40,
      lng: 20
    },
    styles: getStyles(),
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false
  });


  var conferences = [
    {
      lat: 31.223133,
      lng: 120.916263,
      name: 'Juwai Shanghai',
      location: 'Shanghai, China',
      date: 'June, 2017',
      talks: ['The (Awesome) Future of Real Estate Apps']
    }, {
      lat: 14.567628,
      lng: 120.739749,
      name: 'Kickstart Innovation',
      location: 'Manila, Philippines',
      date: 'April, 2016',
      talks: ['The New Approach to Venture Building']
    }, {
      lat: 52.370216,
      lng: 4.895168,
      name: 'Dutch PHP Conference',
      location: 'Amsterdam, Netherlands',
      date: 'June, 2017',
      talks: ['The (Awesome) Future of Web Apps']
    },
    {
      lat: -33.868820,
      lng: 151.209296,
      name: 'NDC Sydney',
      location: 'Verona, Italy',
      date: 'August, 2017',
      talks: ['The (Awesome) Future of Web Apps', 'UX Patterns for web developers']
    },
    {
      lat: 40.416775,
      lng: -3.703790,
      name: 'JsDay ES',
      location: 'Madrid, Spain',
      date: 'May, 2017',
      talks: ['UX patterns for web developers']
    },
    {
      lat: 44.426767,
      lng: 26.102538,
      name: 'Bucharest JS',
      location: 'Bucharest, Romania',
      date: 'February, 2017',
      talks: ['The (Awesome) Future of Web Apps']
    },
    {
      lat: 51.507351,
      lng: -0.127758,
      name: 'NDC London',
      location: 'London, United Kingdom',
      date: 'January, 2017',
      talks: ['The (Awesome) Future of Web Apps', 'UX Patterns for developers']
    },
    {
      lat: 41.385064,
      lng: 2.173403,
      name: 'AngularBeers Cinema',
      location: 'Barcelona, Spain',
      date: 'December, 2016',
      talks: ['Building progressive web apps with Angular 2']
    },
    {
      lat: 39.469907,
      lng: -0.376288,
      name: 'Valencia JS',
      location: 'Valencia, Spain',
      date: 'December, 2016',
      talks: ['The (Awesome) Future of Web Apps']
    },
    {
      lat: 45.438384,
      lng: 10.991622,
      name: 'JS Day',
      location: 'Verona, Italy',
      date: 'May, 2016',
      talks: ['Blazing fast CSS3 transitions']
    }, {
      lat: 40.416775,
      lng: -3.703790,
      name: 'Madrid JS',
      location: 'Madrid, Spain',
      date: 'November, 2016',
      talks: ['The (Awesome) Future of Web Apps']
    }, {
      lat: 52.370216,
      lng: 4.895168,
      name: 'Frontend Revolution',
      location: 'Amsterdam, Netherlands',
      date: 'November, 2016',
      talks: ['Building progressive web apps with Angular 2']
    }, {
      lat: 33.748995,
      lng: -84.387982,
      name: 'Connect.Tech',
      location: 'Atlanta, USA',
      date: 'October, 2016',
      talks: [' UX Patterns for developers', 'Scaling Large Angular 1 Apps', 'Building a Progressive Web App with Angular 2']
    }, {
      lat: 33.748995,
      lng: -84.387982,
      name: 'ATL AngularJS',
      location: 'Atlanta, USA',
      date: 'October, 2016',
      talks: ['Building a Progressive Web App with Angular 2']
    }, {
      lat: 42.697708,
      lng: 23.321868,
      name: 'Bulgaria PHP',
      location: 'Sofia, Bulgaria',
      date: 'October, 2016',
      talks: ['Blazing fast CSS3 transitions']
    }, {
      lat: -33.868820,
      lng: 151.209296,
      name: 'NDC Sydney',
      location: 'Sydney, Australia',
      date: 'August, 2016',
      talks: ['Blazing fast CSS3 Transitions']
    }, {
      lat: 38.722252,
      lng: -9.139337,
      name: 'Le Wagon Lisbon',
      location: 'Lisbon, Portugal',
      date: 'July, 2016',
      talks: ['Introduction to JavaScript (workshop)']
    }, {
      lat: 51.507351,
      lng: -0.127758,
      name: 'FullStack London',
      location: 'London, United Kingdom',
      date: 'July, 2016',
      talks: ['Blazing fast CSS3 transitions', 'Introduction to Angular using ES2015']
    }, {
      lat: 45.438384,
      lng: 10.991622,
      name: 'NDC Oslo',
      location: 'Oslo, Norway',
      date: 'June, 2016',
      talks: ['Scaling large Angular apps']
    }, {
      lat: 45.438384,
      lng: 10.991622,
      name: 'JS Day',
      location: 'Verona, Italy',
      date: 'May, 2016',
      talks: ['Blazing fast CSS3 transitions']
    }, {
      lat: 33.880416,
      lng: 35.514302,
      name: 'Saint Joseph University',
      location: 'Beirut, Lebanon',
      date: 'February, 2016',
      talks: ['Break the Cycle']
    }, {
      lat: 52.343040,
      lng: 4.829280,
      name: 'B. Startup School Amsterdam',
      location: 'Amsterdam, Netherlands',
      date: 'February, 2016',
      talks: ['Blazing fast CSS3 transitions']
    }, {
      lat: 51.219448,
      lng: 4.402464,
      name: 'PHP Benelux',
      location: 'Antwerp, Belgium',
      date: 'January, 2016',
      talks: ['Introduction to Angular using EcmaScript 6']
    }, {
      lat: 42.360082,
      lng: -71.058880,
      name: 'Northeast PHP',
      location: 'Boston, USA',
      date: 'August, 2015',
      talks: ['Kickstarting a Laravel app']
    }, {
      lat: 52.370216,
      lng: 4.895168,
      name: 'Dutch PHP Conference',
      location: 'Amsterdam, Netherlands',
      date: 'June, 2015',
      talks: ['Blazing fast CSS3 transitions', 'Building real-time web apps (workshop)']
    }, {
      lat: 49.872906,
      lng: 8.658933,
      name: 'Enter JS',
      location: 'Darmstadt, Germany',
      date: 'June, 2017',
      talks: ['Web APIs you must know about in 2017', 'UX patterns for web developers']
    }]

  conferences.forEach(function (conference) {
    createMarker(map, conference);
  });

}

function getStyles() {
  return [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off",
        "saturation": 36
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 40
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off",
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off",
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "saturation": "-100"
      },
      {
        "lightness": "30"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "gamma": "0.00"
      },
      {
        "lightness": "74"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181e21"
      },
      {
        "lightness": 10
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "all",
    "stylers": [
      {
        "lightness": "3"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 21
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 18
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 19
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#222c33"
      },
      {
        "lightness": 0
      }
    ]
  }
  ];
}
