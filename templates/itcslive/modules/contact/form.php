<?php defined ('ITCS') or die ("Go away."); 
global $Config;
?>
<link rel="stylesheet" href="<?php echo $this->site; ?>templates/itcslive/css/form.css">
<div>
       <h3 class="bot-1 ptm">Quick Quote</h3>
            <div class="success_wrapper">
            <div style="display: none;" class="success">Contact form submitted!<br>
            <strong>We will be in touch soon.</strong> </div></div>
            <fieldset> 
			<form action="" method="post"  name="TicketContactForm" id="TicketContactForm" class="form" >
		    <input type="hidden" name="view" value="contact" />
			<input type="hidden" name="task" value="createticket" />
			<input type="hidden" name="category" value="15" />
            <label class="name">
            <input type="text" name="name"  placeholder="Enter Name" />
            <br class="clear">
            <span class="error_tag" id="error_name" ></span>
			</label>
			
            <label class="email">
             <input type="text" name="email"  placeholder="Enter Email" />
            <br class="clear">
            <span class="error_tag" id="error_email" ></span></label>
			
            <label class="phone">
            <input type="text" name="phone"  placeholder="Enter Phone" />
            <br class="clear">
            <span style="display: none;" class="error error-empty">*This is not a valid phone number.</span></label>
            <label class="message">
            <textarea name="message" placeholder="Enter Message"></textarea>
            <br class="clear">
			   <span class="error_tag" id="error_message" ></span></label>
            <label class="captcha">				  
			<input id="captcha_code" name="captcha_code" type="text" placeholder="Type Text ->" />
				  <span class="captchaimage">
                  <img src="<?php echo $Config->site ?>classes/external/captcha/captcha.php?rand=<?php echo rand();?>" id='captchaimg'>
				  <a href='javascript: Ticket.refreshCaptcha();'><span class="fa fa-refresh"></span></a>
				  </span>
				  <br clear="all" />
			      <span id="captcha_error"></span></label>
            <div class="clear"></div>
            <label class="message">
            I understand and agree to the rules and restrictions and the <a href="/term-and-condition" target="_blank">Terms & Conditions</a> of iTCSLive.
		    </label>			
			<div class="btns">
			<a class="button-1" data-type="reset" onclick="document.getElementById('TicketContactForm').reset();" href="javascript:void(0);"><span></span>Clear</a>
			<div class="none"></div>
			<a onclick="Ticket.validateEnquery('TicketContactForm');" class="button-1" data-type="submit" href="javascript:void(0);"><span></span>Send</a>
            <div class="clear"></div>
            </div>
			</form>
			</fieldset>
</div>			
 <script type="text/javascript">
var Ticket=new function()
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
					Ticket.refreshCaptcha();
				}
			});
		}
	}
	this.refreshCaptcha=function(){
	var img = document.images['captchaimg'];
	img.src = img.src.substring(0,img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;
	}


}
</script>
<style>
.error_tag{ color:#CC0000; font-size:10px;}
</style>