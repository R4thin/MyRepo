// JavaScript Document
$(document).ready(function() {
$.ajax({
  dataType: 'json',
	//cache:true,
	timeout: 25000,
	crossDomain:true,
  type: "GET",
	jsonp: 'jsoncallback',
    url: 'https://testing.vle.getsmarter.co.za/webservice/rest/server.php',
    data: {
      'wstoken': '05f016b053766accaa6b275c6487f9ce',
      'moodlewsrestformat': 'json',
      'wsfunction': 'core_user_get_users_by_field',
      'field': 'username',  // Fields to be targetted
      'values[0]': 'gustavandreas8@gmail.com' // User details
    },
    success: function(data, status) {
      // 1st & 2nd D array being called and set in text boxes
      $.each(data, function (i, item) {
                //var pic  = json.profileimageurlsmall;
				var data =
				  $('#id1').val(item.id)
        + $('#pass').val(item.password)
				+ $('#user').val(item.username)
        + $('#name').val(item.firstname)
        + $('#surname').val(item.lastname)
        + $('#email1').val(item.email)
			  + $('#city1').val(item.city)
				+ $('#country1').val(item.country)
        + $('#birth').val(item.customfields[2].value)
        + $('#work').val(item.customfields[8].value)
        + $('#mobile').val(item.customfields[9].value)
        + $('#1').val(item.customfields[10].value)
        + $('#2').val(item.customfields[11].value)
				+ $('#country2').val(item.customfields[15].value)
        + $('#3').val(item.customfields[12].value)
        + $('#pro').val(item.customfields[14].value)
				//+ $('#avator').html(pic)
        + $('#postc').val(item.customfields[13].value);
                
				  // Displays details
            });
        },
    error: function() {
      alert('Connection lost.');
    }
  });
});
