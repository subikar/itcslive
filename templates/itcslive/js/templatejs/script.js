$(function(){var viewportmeta=document.querySelector&&document.querySelector('meta[name="viewport"]'),ua=navigator.userAgent,gestureStart=function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6";},scaleFix=function(){if(viewportmeta&&/iPhone|iPad/.test(ua)&&!/Opera Mini/.test(ua)){viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0";document.addEventListener("gesturestart",gestureStart,false);}};scaleFix();if(window.orientation!=undefined){var regM=/ipod|ipad|iphone/gi,result=ua.match(regM)
if(!result){$('.sf-menu li').each(function(){if($(">ul",this)[0]){$(">a",this).toggle(function(){return false;},function(){window.location.href=$(this).attr("href");});}})}}});var ua=navigator.userAgent.toLocaleLowerCase(),regV=/ipod|ipad|iphone/gi,result=ua.match(regV),userScale="";if(!result){userScale=",user-scalable=0"}document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">');$(document).ready(function(){var screenwidth=$(document).width();if(screenwidth<=320)jQuery(".get-free-quote").colorbox({iframe:true,width:"97%",height:"60%"});else
jQuery(".get-free-quote").colorbox({iframe:true,width:"50%",height:"60%"});});
var Content=new function()
{
	this.getResult=function()
	{
		jQuery("#page_count").val(1);
		Content.searchContent();
	}
	this.searchContent=function()
	{
		jQuery(".search_button").css("background", "url('"+configurl+"templates/itcslive/images/search_content-loader.gif') no-repeat");
		var documentObj=document.getElementById("search");
		var searchtext=documentObj.search_text.value;

		if(searchtext=="" || parseInt(searchtext.length) < 3)
		{
			jQuery(".search_button").css("background", "url('"+configurl+"templates/itcslive/images/search-button.png') no-repeat scroll 0 0 rgba(0, 0, 0, 0)");
			jQuery("#content_search_result").hide();
			return false;
		}
		else
		{
			var mydata = {};
			for (var i=0, iLen=documentObj.length; i<iLen; i++) {
				if(documentObj[i].name!=="" && documentObj[i].value!=="")
				{
					var propertyName= documentObj[i].name;
					mydata[propertyName] =  documentObj[i].value;
				}
			}
			//alert(mydata.page_count);
		  jQuery.post("contact", mydata,
			function(data)
			{
				//alert(data);
				var result=JSON.parse(data,true);
				jQuery("#content_search_result").show();
				jQuery("#content_search_result").html(result["result_html"]);
				jQuery(".search_button").css("background", "url('"+configurl+"templates/itcslive/images/search-button.png') no-repeat scroll 0 0 rgba(0, 0, 0, 0)");
			});
		}	
	}
	this.nextPage=function()
	{
		var pageCount=parseInt(jQuery("#page_count").val());
		jQuery("#page_count").val(pageCount + 1);
		Content.searchContent();
	}
	this.prevPage=function()
	{
		var pageCount=parseInt(jQuery("#page_count").val());
		if(pageCount > 1)
		{
			jQuery("#page_count").val(pageCount - 1);
			Content.searchContent();
		}
	}
}
jQuery(document).ready(function(){
 var screenwidth = jQuery(document).width();
 if(screenwidth <= 320)
 jQuery(".clientlogin").colorbox({iframe:true, width:"97%", height:"60%"});	 
 else
 jQuery(".clientlogin").colorbox({iframe:true, width:"40%", height:"60%"});	 
 }); 