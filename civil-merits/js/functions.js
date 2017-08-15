(function ($) {


			$('.bxslider').bxSlider({
		  mode: 'fade',
		  captions: true
		});
		
		// portfolio
    if($('.isotopeWrapper').length){

        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }


            
        });

        $('#filter a').click(function(){



            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
        
        
        $(window).smartresize(function(){
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
        

}  


	// fancybox
	jQuery(".fancybox").fancybox();
	
		
	//Google Map
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');

    function initialize_google_map() {
        var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);	 

		

})(jQuery);
 var map;
      var infowindow;

      function initMap() {
        var pyrmont = {lat: 40.7484410, lng: -73.9856640};

        map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 15
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 1000,
          type: ['police']
        }, callback);
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
'use strict';

var vgaButton = document.querySelector('button#vga');
var qvgaButton = document.querySelector('button#qvga');
var hdButton = document.querySelector('button#hd');
var dimensions = document.querySelector('p#dimensions');
var video = document.querySelector('video');

navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function successCallback(stream) {
  window.stream = stream; // stream available to console
  video.src = window.URL.createObjectURL(stream);
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

function displayVideoDimensions() {
  dimensions.textContent = 'Actual video dimensions: ' + video.videoWidth +
    'x' + video.videoHeight + 'px.';
}

video.addEventListener('play', function() {
  setTimeout(function() {
    displayVideoDimensions();
  }, 500);
});

var qvgaConstraints = {
  video: {
    mandatory: {
      maxWidth: 320,
      maxHeight: 180
    }
  }
};

var vgaConstraints = {
  video: {
    mandatory: {
      maxWidth: 640,
      maxHeight: 360
    }
  }
};

var hdConstraints = {
  video: {
    mandatory: {
      minWidth: 1280,
      minHeight: 720
    }
  }
};

qvgaButton.onclick = function() {
  getMedia(qvgaConstraints);
};
vgaButton.onclick = function() {
  getMedia(vgaConstraints);
};
hdButton.onclick = function() {
  getMedia(hdConstraints);
};

function getMedia(constraints) {
  if (window.stream) {
    video.src = null;
    window.stream.getVideoTracks()[0].stop();
  }
  navigator.getUserMedia(constraints, successCallback, errorCallback);
}