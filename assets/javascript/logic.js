
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





$('#submitSearch').click(() => {

});


$('#submitContact').click(() => {

});


$('#submitLegal').click(() => {
	
});


$('#submitPayment').click(() => {
	
});