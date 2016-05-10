<?php defined ('ITCS') or die ("Go away."); 
global $Config;
?>
<form id="search" method="POST" accept-charset="utf-8">
	   <input type="text" name="search_text" onkeyup="Content.getResult();" />
	   <input type="hidden" name="view" value="contact" />
	   <input type="hidden" name="task" value="searchContent"  />
	   <input type="text" id="page_count" name="page_count" value="1" style=" display:none; " />
	   <a href="javascript:void(0);" onClick="Content.getResult();"  class="search_button"></a>
 </form>
 <div class="clear"></div>
 <div id="content_search_result" class="content_search_result" style="display:none;">

 </div>
 
<script type="text/javascript">
var Content=new function()
{
	this.getResult=function()
	{
		jQuery("#page_count").val(1);
		Content.searchContent();
	}
	this.searchContent=function()
	{
		jQuery(".search_button").css("background", "url(<?php echo $Config->site; ?>templates/itcslive/images/search_content-loader.gif) no-repeat");
		var documentObj=document.getElementById("search");
		var searchtext=documentObj.search_text.value;

		if(searchtext=="" || parseInt(searchtext.length) < 3)
		{
			jQuery(".search_button").css("background", "url('<?php echo $Config->site; ?>templates/itcslive/images/search-button.png') no-repeat scroll 0 0 rgba(0, 0, 0, 0)");
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
				jQuery(".search_button").css("background", "url('<?php echo $Config->site; ?>templates/itcslive/images/search-button.png') no-repeat scroll 0 0 rgba(0, 0, 0, 0)");
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
</script>
<style>
.content_search_result{ 
display: inline-block;
overflow: hidden;
position: absolute;
padding: 5px;
border: 1px solid #4EB6F3;
border-radius: 0px 0px 20px 20px;
background-color:#4EB6F3;
color:#FFFFFF;
z-index:999;
}
.content_search_result li, .content_search_result li a { color:#fff;}

</style>