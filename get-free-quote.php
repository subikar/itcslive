<?php defined ('ITCS') or die ("Go away.");
global $template;
$template->includecss($Config->site."templates/itcslive/css/quick-quote.css");
$template->includejs($Config->site."templates/itcslive/js/getfreequote.js");
/*  if(IRequest::getVar('task') == 'logout')
    {
	  $model = includeclass('login');
	  $model->logout();
	  $mainframe->redirect($Config->site);
	}*/
  //print_r($template->css); exit;	
  $template->assignRef('Title','Get Free Quote');	
  $template->display('tmplpopup/header');	
  $template->display('contact/quote');
  $template->display('tmplpopup/footer');	
?>
