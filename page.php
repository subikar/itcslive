<?php
  defined ('ITCS') or die ("Go away.");
  global $template; 
  $Model = includeclass('page');
  $Content = $Model->GetContent();
 // print_r($Content); exit;
  $template->assignRef('Title',$Content->metatitle);
  $template->assignRef('Keyword',$Content->metakeyword);
  $template->assignRef('Description',$Content->metadescription);
  
  $template->assignRef('sectionclass',$Content->pageclass);
 
  $template->assignRef('Content',$Content);
  $template->display('header');
  $template->display('body');
  $template->display('footer');
?>