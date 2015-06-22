// JavaScript Document
$(document).ready(function () {

    $.ajax({
        dataType: 'json',
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        jsonp: 'jsoncallback',
        url: 'https://testing.vle.getsmarter.co.za/webservice/rest/server.php',
        data: {
            'wstoken': '05f016b053766accaa6b275c6487f9ce',
            'moodlewsrestformat': 'json',
            'wsfunction': 'core_user_get_users_by_field',
            'field': 'username',
            'values[0]': 'gustavandreas8@gmail.com' //Replace this with a getitem from local storage code to access any user when you click remember me.
        },
        ContentType: " application/json",
        success: function (data, status) {
            $.each(data, function (i, item) {
                var data =
                  $('#name').val(item.firstname)
                + $('#surname').val(item.lastname)
                + $('#email1').val(item.email)
                + $('#birth').val(item.customfields[2].value)
                + $('#work').val(item.customfields[8].value)
                + $('#mobile').val(item.customfields[9].value)
                + $('#1').val(item.customfields[10].value)
                + $('#2').val(item.customfields[11].value)
                + $('#3').val(item.customfields[12].value)
                + $('#postc').val(item.customfields[13].value)
                + $('#city1').val(item.city)
                + $('#country1').val(item.country);

                // Please assign the top items to a text box
                output.append(data);  // Displays details
            });
        },
        error: function () {
            output.text('There was an error loading the data.');
        }
    });
});