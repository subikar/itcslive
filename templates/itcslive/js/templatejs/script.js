$(document).ready(function(){var screenwidth=$(document).width();if(screenwidth<=320)jQuery(".get-free-quote").colorbox({iframe:true,width:"97%",height:"60%"});else
jQuery(".get-free-quote").colorbox({iframe:true,width:"50%",height:"60%"});});
var clicks = 0;
jQuery(document).ready(function(){
 var screenwidth = jQuery(document).width();
 if(screenwidth <= 320)
 jQuery(".clientlogin").colorbox({iframe:true, width:"97%", height:"60%"});	 
 else
 jQuery(".clientlogin").colorbox({iframe:true, width:"40%", height:"60%"});	 
 
 jQuery('.toggle-menu').jPushMenu();
 jQuery(".jPushMenuBtn").click(function(){
					clicks = clicks+1;
					if(clicks%2==0)
				 	 jQuery('.toggle-menu').removeClass('tgclose');
					else
				 	 jQuery('.toggle-menu').addClass('tgclose');
				}); 
 }); 
var FreeQuote=new function()
{
	this.validateEnquery=function(input_id)
	{
		var input=document.getElementById(input_id);
		var phoneno = /^\d{10}$/;  
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		jQuery(".error_tag").hide();
		
		if(input.name.value=="")
		{
			input.name.focus();
			jQuery("#error_name").html("Name Can't Left Blank!").show();
			return false;
		}
		else if(input.email.value=="" || !regex.test(input.email.value))
		{
			input.email.focus();
			jQuery("#error_email").html("Email Invalid!").show();
			return false;
		}
		else if(input.phone.value=="" || isNaN(input.phone.value) || !input.phone.value.match(phoneno))
		{
			input.phone.focus();
			jQuery("#error_phonenunber").show();
			return false;
		}
		else if(input.message.value=="" || input.message.value==" ")
		{
			input.message.focus();
			jQuery("#error_message").html("<small>Message Can't Left Blank!</small>").show();
			return false;
		}
		else if(input.message.value.length < 5)
		{
			input.message.focus();
			jQuery("#error_message").html("<small>The message is too short!</small>").show();
			return false;		
		}
		else
		{
			jQuery("#captcha_error").html("");
			var formURL="contact?view=contact&task=varifyCaptcha";
			jQuery.post(formURL,{ captcha:input.captcha_code.value},
			function(data){
				var result=JSON.parse(data);
				if(parseInt(result["status"])==1)
				{
					input.submit();
				}
				else
				{
					jQuery("#captcha_error").html(result["message"]);
					FreeQuote.refreshCaptcha();
				}
			});
		}
	}
	this.refreshCaptcha=function(){
	var img = document.images['captchaimg'];
	img.src = img.src.substring(0,img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;
	}


}
