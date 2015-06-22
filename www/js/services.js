// JavaScript Document
function init() {
document.addEventListener("deviceready", deviceReady, true);
delete init;
}

function deviceReady() {

$("#loginForm").on("submit",function(e) {
//disable the button so we can't resubmit while we wait
$("#submitButton",this).attr("disabled","disabled");
var u = $("#username", this).val();
var p = $("#password", this).val();
if(u != '' && p!= '') {
$.post("https://admin:1.Admin%23@testing.vle.getsmarter.co.za/webservice/rest/server.php?method=login&returnformat=json", {username:u,password:p}, function(res) {
if(res == true) {
$.mobile.changePage("Chat.html");
} else {
navigator.notification.alert("Your login failed", function() {});
}
$("#submitButton").removeAttr("disabled");
},"json");
}
return false;
});

}
    $('#sigin').css('color', '#90C');
	$( document ).on( "pageinit", "#page", function() {
    $( document ).on( "swipeleft swiperight ", "#page", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});

/// Rememember me code
     $(function() {
 
                if (localStorage.chkbx && localStorage.chkbx != '') {
                    $('#remember_me').attr('checked', 'checked');
                    $('#username').val(localStorage.usrname);
                    $('#pass').val(localStorage.pass);
                } else {
                    $('#remember_me').removeAttr('checked');
                    $('#username').val('');
                    $('#pass').val('');
                }
 
                $('#remember_me').click(function() {
 
                    if ($('#remember_me').is(':checked')) {
                        // save username and password
                        localStorage.usrname = $('#username').val();
                        localStorage.pass = $('#pass').val();
                        localStorage.chkbx = $('#remember_me').val();
                    } else {
                        localStorage.usrname = '';
                        localStorage.pass = '';
                        localStorage.chkbx = '';
                    }
                });
            });
			
