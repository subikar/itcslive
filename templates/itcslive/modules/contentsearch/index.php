<?php defined ('ITCS') or die ("Go away."); 
global $Config;
?>
<div class="div-search">
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
</div>
