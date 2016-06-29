<?php defined ('ITCS') or die ("Go away.");
$template->includejs("templates/itcslive/js/login.js");
  if(IRequest::getVar('task') == 'logout')
    {
	  $model = includeclass('login');
	  $model->logout();
	  $mainframe->redirect($Config->site);
	}
  $template->display('tmplpopup/header');	
  $template->display('login/index');
  $template->display('tmplpopup/footer');	
?>
