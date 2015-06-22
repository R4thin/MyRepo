<!-- Login code -->
<script type="text/javascript">
$(document).ready(function(){
	$("#login_a").click(function(){
        $("#shadow").fadeIn("normal");
         $("#LoginForm").fadeIn("normal");
         $("#username-1").focus();
    });
	$("#cancel_hide").click(function(){
        $("#loginForm").fadeOut("normal");
        $("#shadow").fadeOut();
   });
   $("#login").click(function(){
    
        username=$("#username-1").val();
        password=$("#password-2").val();
         $.ajax({
            type: "POST",
            url: "login.php",
            data: "username-1="+username+"&password-2="+password,
            success: function(html){
              if(html=='true')
              {
                $("#loginForm").fadeOut("normal");
				$("#shadow").fadeOut();
				$("#main").html("<a href='#main' id='logout'>Logout</a>");
				
              }
              else
              {
                    $("#result").html("Wrong username or password");
              }
            },
            beforeSend:function()
			{
                 $("#result").html("Loading...")
            }
        });
         return false;
    });
});
</script>
