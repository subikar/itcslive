<?php
  defined ('ITCS') or die ("Go away.");
  global $template;
  $content = $cache = $template->CheckCache();
 // print("test"); exit;
  if($cache == 'no')
    { 
	
	  $Model = includeclass('page');
	  $Content = $Model->GetContent();
	 
	  $template->assignRef('Title',$Content->metatitle);
	  $template->assignRef('Keyword',$Content->metakeyword);
	  $template->assignRef('Description',$Content->metadescription);
	  
	  $template->assignRef('sectionclass',$Content->pageclass);
	 
	  $template->assignRef('Content',$Content);
		  ob_start();
		  $template->display('header');
		  $template->display('body');
		  $template->display('footer');
		  $content = ob_get_contents();
		  $content = sanitize_output($content);
		  ob_end_clean();
		  $template->SetCache($content);
      
    }
   echo $content;  	
?>