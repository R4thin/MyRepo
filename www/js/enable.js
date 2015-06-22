// JavaScript Document
function change() {
    $('#name').textinput('enable');
    $('#surname').textinput('enable');
    $('#work').textinput('enable');
    $('#mobile').textinput('enable');
    $('#1').textinput('enable');
    $('#2').textinput('enable');
    $('#3').textinput('enable');
    $('#postc').textinput('enable');
    $('#email1').textinput('enable');
    $('#birth').textinput('enable');
    $('#city1').textinput('enable');
    $('#country1').textinput('enable');
    $('#change').css('visibility', 'hidden');
    $('#back').css('visibility', 'hidden');
    $('#save').css('visibility', 'visible');
    $('#cancel').css('visibility', 'visible');
}

function save() {
    document.getElementById("name").disabled = true;
    document.getElementById("surname").disabled = true;
    document.getElementById("mobile").disabled = true;
    document.getElementById("city1").disabled = true;
    document.getElementById("country1").disabled = true;
}

function cancel() {
    document.getElementById("name").disabled = true;
    document.getElementById("surname").disabled = true;
    document.getElementById("mobile").disabled = true;
    document.getElementById("city1").disabled = true;
    document.getElementById("country1").disabled = true;
    $('#save').css('visibility', 'hidden');
    $('#cancel').css('visibility', 'hidden');
    $('#change').css('visibility', 'visible');
    $('#back').css('visibility', 'visible');
}

$('#password-2').hideShowPassword({
    // Make the password visible right away.
    show: true,
    // Create the toggle goodness.
    innerToggle: true,
    // Give the toggle a custom class so we can style it
    // separately from the previous example.
    toggleClass: 'my-toggle-class',
    // Don't show the toggle until the input triggers
    // the 'focus' event.
    hideToggleUntil: 'focus',
    // Enable touch support for toggle.
    touchSupport: Modernizr.touch
});
;


function enter() {
    $( "#send" ).keypress();
}