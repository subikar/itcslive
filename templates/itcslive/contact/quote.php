<div class="grid_12">
<form action="" method="post" class="form-horizontal getofferForm" name="GetFreeQuote" id="GetFreeQuote" target="_parent">
        <div id="contact_form" class="pop-form">
          <div class="extra-padding">
            <div class="control-group">
              <label class="control-label" for="name">Name *:</label>
              <div class="controls">
              	<div class="input-icon">
                <input name="name" id="name" title="Name" value="" class="required-entry validate_me span12" type="text">
				<span style="display: none;" class="error error-empty">*This is not a valid name.</span>
				<span style="display: none;" id="error_name" class="empty error-empty">*This field is required.</span> </label>
                <i class="icon-user-2"></i>
                </div>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label" for="email">Email*:</label>
              <div class="controls">
              	<div class="input-icon">
                <input name="email" id="email" title="Email" value="" class="input-xlarge required-entry validate-email validate_me span12" type="text">
				<span style="display: none;" class="error error-empty">*This is not a valid email address.</span>
				<span style="display: none;" id="error_email" class="empty error-empty">*This field is required.</span> </label>
                <i class="icon-mail-2"></i>
                </div>
              </div>
            </div>
            <div class="control-group controls-row">
              <label class="control-label" for="phone">Phone No*:</label>
              <div class="controls">
              	<div class="input-icon">
                <input type="text" maxlength="3" value="+91" class="validate_me span2" id="pop_phone_code-16543" name="phonecode">
                <input type="tel" name="phone" class="required-entry validate-custommobile validate_me span10" id="phone" title="Telephone" value="" maxlength="10">
				<span style="display: none;" class="error error-empty">*This is not a valid phone number.</span>
				<span style="display: none;" id="error_phone" class="empty error-empty">*This field is required.</span> </label>
                <i class="icon-phone-2"></i>
                </div>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label" for="name">Are you Human? *:</label>
              <div class="controls">
              	<div class="input-icon">
				  <span class="captchaimage">
                  <img src="<?php echo $Config->site ?>classes/external/captcha/captcha.php?rand=<?php echo rand();?>" id='captchaimg'>
				  <a href='javascript: getfreequote.refreshCaptcha();'><span class="fa fa-refresh"></span></a>
				  </span>				
                <input name="captcha_code" id="captcha_code" title="Captcha" value="" class="required-entry validate_me span2 city-input ui-autocomplete-input" type="text" autocomplete="off">
                <i class="icon-user-2"></i>
				<span id="captcha_error"></span>
                </div>
                </div>
              </div>
			<input type="hidden" name="view" value="contact" />
			<input type="hidden" name="task" value="createticket" />
          </div>
        </div>
      </form>        
       <div class="control-group">
                <input class="btn btn-success btn-block" type="submit" onclick="getfreequote.validateform('GetFreeQuote');" />
       </div>

</div>