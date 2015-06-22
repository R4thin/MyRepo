// JavaScript Document
function Update_user(){
  $.ajax({
  dataType: 'json',
	type: 'POST',
	cache:true,
    beforeSend: function() {$.mobile.loading('show')},
    complete: function() {$.mobile.loading('hide')},
    url: 'https://testing.vle.getsmarter.co.za/webservice/rest/server.php',
    data: {
      'wstoken': '05f016b053766accaa6b275c6487f9ce',
      'moodlewsrestformat': 'json',
      'wsfunction': 'core_user_update_users',
      'users[0][id]': '2328',
      'users[0][firstname]': $('#name').val(),
	    'users[0][lastname]': $('#surname').val(),
	    'users[0][fullname]': $('#full').val(),
	    'users[0][city]': $('#city1').val(),
      //
      'users[0][customfields][0][type]': 'postalcode',
      'users[0][customfields][0][value]': $('#postc').val(),
      //
/*      'users[0][customfields][0][type]': 'dateofbirth',
      'users[0][customfields][0][value]': $('#birth').val(),
      //*/
      // 'users[0][customfields][0][name]': 'phonemobile',
      // 'users[0][customfields][0][value]': $('#mobile').attr('value'),
      // //
      'users[0][customfields][0][type]': 'phonework',
      'users[0][customfields][0][value]': $('#work').val(),
      // //
      'users[0][customfields][0][type]': 'addressline1',
      'users[0][customfields][0][value]': $('#1').val(),
      
      'users[0][customfields][0][type]': 'addressline2',
      'users[0][customfields][0][value]': $('#2').val(),

      'users[0][customfields][0][type]': 'country',
      'users[0][customfields][0][value]': $('#country2').val(),

    },
    success: function(data, status) {
      // do something with the json object
   // $('#enable').css('visibility', 'visible');
    //$('#back').css('visibility', 'visible');
    //$('#save').css('visibility', 'hidden');
    //$('#cancel').css('visibility', 'hidden')
    alert("Updated." );
    },
    error: function(data, status) {
      alert('An error occurred.');
    }
  });
  
}