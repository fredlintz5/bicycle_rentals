
const googleAPI_Key = "AIzaSyDl-ZCWcyUrNHqbqj4kwahbHv_NhNyj_As";

var placeSearch, autocomplete;
// var componentForm = {
// 	street_number: 'short_name',
// 	route: 'long_name',
// 	locality: 'long_name',
// 	administrative_area_level_1: 'short_name',
// 	country: 'long_name',
// 	postal_code: 'short_name'
// };


function initAutocomplete() {
	// Create the autocomplete object, restricting the search to geographical
	// location types.
	autocomplete = new google.maps.places.Autocomplete(
	    /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
	    {types: ['geocode']});

	// When the user selects an address from the dropdown, populate the address
	// fields in the form.
	autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
        // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    console.log(place);
    const info = place.address_components;

    let street_number = info[0].short_name;
    let street_name = info[1].short_name;
    $('#route').val(street_number + " " + street_name);
    $('#locality').val(info[2].long_name);
    $('#state').val(info[4].short_name);
    $('#postal_code').val(info[6].short_name);
}


function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
}


$('#submitLegal').click(() => {
	 if ($("#checkbox").is(':checked')) {
    $('#search').addClass('hide');
    $('#contact').addClass('hide');
    $('#legal').addClass('hide');
    $('#agree').addClass('hide');
    $('#paypal').removeClass('hide'); 
    $('#goBackButton').removeClass('hide');
    $('#shoppingCart').removeClass('hide');
   } 
});

$('#agreeStatement').click(() => {
  if ($("#checkbox").prop('checked')) {
    $('#checkbox').prop('checked', '');
  } else {
    $('#checkbox').prop('checked', 'true');
  }
  
});

$('#goBack').click(() => {
  $('#search').removeClass('hide');
    $('#contact').removeClass('hide');
    $('#legal').removeClass('hide');
    $('#agree').removeClass('hide');
    $('#paypal').addClass('hide'); 
    $('#goBackButton').addClass('hide');
    $('#shoppingCart').addClass('hide');
});





