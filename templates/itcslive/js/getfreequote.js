var getfreequote = new function()
{
	this.validateform =function(formid)
	{
		var input=document.getElementById(formid);
		var phoneno = /^\d{10}$/;  
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		jQuery(".error-empty").hide();
       if(input.name.value=="")
		{
			input.name.focus();
			jQuery("#error_name").show();
			return false;
		}
		else if(input.email.value=="" || !regex.test(input.email.value))
		{
			input.email.focus();
			jQuery("#error_email").show();
			return false;
		}
		else if(input.phone.value=="" || isNaN(input.phone.value) || !input.phone.value.match(phoneno))
		{
			input.phone.focus();
			jQuery("#error_phonenunber").show();
			return false;
		}
		else if(input.city.value=="")
		{
			input.city.focus();
			jQuery("#error_city").show();
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
					getfreequote.refreshCaptcha();
				}
			});
		}

	}
	this.refreshCaptcha=function(){
	var img = document.images['captchaimg'];
	img.src = img.src.substring(0,img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;
	}

}