<?php 
  defined ('ITCS') or die ("Go away.");
  global $Config;
  ?>
<div class="wrapper">
  <div class="grid_8">
            <h3 class="bot-1">Contact Information</h3>
            <div class="bot">
				<iframe  id="map_canvas" 
					src="https://maps.google.com/maps?f=q&amp;
					source=s_q&amp;
					hl=en&amp;
					geocode=&amp;
					q=iTCSLIVE, Dum Dum kolkata 700074 India West Bengal&amp;
					aq=1&amp;
					oq=333&amp;
					sll=22.614167,88.418479&amp;
					sspn=22.614167,88.418479&amp;
					ie=UTF8&amp;
					hq=&amp;
					hnear=Dum Dum Private Road&amp;
					t=m&amp;
					z=14&amp;
					ll=22.614167,88.418479&amp;
					z=10&amp;
					output=embed">
			</iframe>
            </div>
            <span class="dis-block bot">Any Query! Please Call Us at: 033-68888449 to Talk with one of our Technical Executive.</span>
            <dl class="adress">
	            <!--<dt class="title1">8901 Marmora Road, Glasgow, D04 89GR.</dt>-->
                <dd><span>Freephone:</span> 033-68888449</dd>
                <dd><span>Telephone:</span>+919051158812</dd>
                <dd><span>Telephone:</span>+91 9836892283 </dd>
                <dd><strong>E-mail:</strong> <a href="#">pradip1@itcslive.com</a></dd>
                <dd><strong>E-mail:</strong> <a href="#">subikar.web@gmail.com</a></dd>
                <dd><strong>E-mail:</strong> <a href="#">support@itcslive.com</a></dd>
                <dd><strong>skype:</strong> <a href="#">itcslive</a></dd>
            </dl>
            
        </div>
        
        <div class="grid_4">
            
            <h5 class="bot">A. Can we help you in anyway?</h5>
            <div class="success_wrapper">
            <div style="display: none;" class="success">Contact form submitted!<br>
            <strong>We will be in touch soon.</strong> </div></div>
            <fieldset>
			<form id="contactForm" name="contactForm" method="post" class="form" enctype="multipart/form-data">
            <label class="message">
            <textarea  name="message" placeholder="Enter your messege...." required="true"></textarea>
            <br class="clear">
            <span style="display: none;" class="error">*The message is too short.</span>
			<span style="display: none;" id="error_message" class="empty">*This field is required.</span> </label>
            <label class="message">
			<br />
			<span>Pick any category so that we can process your request</span>
			<br clear="all" />
            <select name="category" required="true">
			  <?php foreach($this->Category as $Cat):?>
				 <option value="<?php echo $Cat->id; ?>"><?php echo $Cat->category_name; ?></option>
				 <?php endforeach; ?>
			</select>            
			<br class="clear">
            </label>
            <div class="clear"></div>
			<br />
            <h5 class="bot">B. Please furnished the following details.</h5>
			<label class="name">
            <input type="text" name="name"  placeholder="Enter Name" required="true"/>
            <br class="clear">
            <span style="display: none;" class="error error-empty">*This is not a valid name.</span>
			<span style="display: none;" id="error_name" class="empty error-empty">*This field is required.</span> </label>
            <label class="email">
            <input type="text" name="email"  placeholder="Enter Email" required="true" />
            <br class="clear">
            <span style="display: none;" class="error error-empty">*This is not a valid email address.</span>
			<span style="display: none;" id="error_email" class="empty error-empty">*This field is required.</span> </label>
            <label class="phone">
            <input type="text" name="phonenunber"  placeholder="Enter Phone" required="true">
            <br class="clear">
            <span style="display: none;" class="error error-empty">*This is not a valid phone number.</span>
			<span style="display: none;" id="error_phonenunber" class="empty error-empty">*This field is required.</span> </label>
            <label class="organisation">
            <input type="text" name="organization"  placeholder="Enter Company" required="true">
            <br class="clear">
            <span style="display: none;" class="error error-empty">*This is not a valid Company.</span>
			<span style="display: none;" id="error_company" class="empty error-empty">*This field is required.</span>
			</label>
            <label class="country">
            <input type="text" name="country"  placeholder="Enter Country" required="true" >
            <br class="clear">
            <span style="display: none;" class="error error-empty">*This is not a valid country.</span>
			<span style="display: none;" id="error_country" class="empty error-empty">*This field is required.</span>
			</label>
            <label class="captcha">				  
			<input id="captcha_code" name="captcha_code" type="text" placeholder="Type Text ->" />
				  <span class="captchaimage">
                  <img src="<?php echo $Config->site ?>classes/external/captcha/captcha.php?rand=<?php echo rand();?>" id='captchaimg'>
				  <a href='javascript: Ticket.refreshCaptcha();'><span class="fa fa-refresh"></span></a>
				  </span>
				  <br clear="all" />
			      <span id="captcha_error"></span></label>			
            <div class="clear"></div>
			<br />
            <h5 class="bot">C. Please convey the necessary details.</h5>
            <label class="respondtype">
			<ul>
            <li><input name="respondtype" value="Phone" checked="checked" type="radio"></li><li>&nbsp;Phone</li>
			<li>&nbsp;</li>
            <li><input name="respondtype" value="Email" type="radio"></li><li>&nbsp;Email</li>
			</ul>
			<br clear="all" />
            <label class="message">
            I understand and agree to the rules and restrictions and the <a href="/term-and-condition" target="_blank">Terms & Conditions</a> of iTCSLive.
		    </label>			
            <br class="clear">
            <span style="display: none;" class="error error-empty">*This is not a valid country.</span><span style="display: none;" class="empty error-empty">*This field is required.</span> </label>
			<input type="hidden" name="view" value="contact" />
		    <input type="hidden" name="task" value="createticket" />
			</form>			
            <div class="clear"></div>
            <div class="btns"><a class="button-1" data-type="reset" href="#"><span></span>Clear</a>
			<div class="none"></div><a onclick="Ticket.validateEnquery('contactForm');" class="button-1" href="javascript:void(0);"><span></span>Send</a>
            <div class="clear"></div>
            </div></fieldset>
        </div>
        
    </div>
	<script type="text/javascript">
var Ticket=new function()
{
	this.validateEnquery=function(input_id)
	{
		var input=document.getElementById(input_id);
		var phoneno = /^\d{10}$/;  
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		jQuery(".error-empty").hide();
		if(input.message.value=="" || input.message.value==" ")
		{
			input.message.focus();
			jQuery("#error_message").show();
			return false;
		}
		else if(input.name.value=="")
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
		else if(input.phonenunber.value=="" || isNaN(input.phonenunber.value) || !input.phonenunber.value.match(phoneno))
		{
			input.phonenunber.focus();
			jQuery("#error_phonenunber").show();
			return false;
		}
		else if(input.country.value=="")
		{
			input.country.focus();
			jQuery("#error_country").show();
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