// JavaScript Document
$(document).ready(function(){
	$("#submit").click(function(){
    //disable the button so we can't resubmit while we wait
  $("#submit",this).attr("disabled","disabled");
         $("#username").focus();
    });
	$("#cancelhide").click(function(){
        $("#loginform").fadeOut("normal");
        $("#shadow").fadeOut();
   });$("#submitt").click(function(){
    
        username=$("#username").val();
        password=$("#password-2").val();
         $.ajax({
            type: "POST",
            url: "https://testing.vle.getsmarter.co.za/login/index.php",
            data: "name="+username+"&pwd="+password,
            success: function(html){
              if(html=='true')
              {
                $("#loginform").fadeOut("normal");
				        $("#shadow").fadeOut();
				        $("#main").html("<a href='#main' id='logout'>Logout</a>");
                $.mobile.changePage("#main");
                 alert("login successfull");
				
              }
              else
              {
                    navigator.notification.alert("Your login failed", function() {});
                    }
                    $("#submitButton").removeAttr("disabled");
                    },"json");
              }
            },
            beforeSend:function()
			{
                 $("#add_err").html("Loading...")
            }
        });
         return false;
    });
