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