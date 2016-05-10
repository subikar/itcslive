<?php
defined ('ITCS') or die ("Go away.");
  class Page {
         var $test = NULL;
         function __construct()
		    {
			   
			}
		 function GetContent()
		   {
		      global $db; 
			  $page_id = IRequest::getInt('id');
			  $Query = "select * from #__page where id = ".$db->quote($page_id);
			  $db->setQuery($Query);
			  $Content = $db->loadObjectList();
			  $Content = isset($Content[0])?$Content[0]:NULL;
			  $Content->content = $this->AddModule($Content->content);
			  $Content->content = $this->AddGallery($Content->content);
			  $Content->content = $this->AddSitemap($Content->content);
			  return $Content;
		   }
		  function AddModule($Content)
		  {
		  	  $model = includeclass('gallery');
			  $Content = $model->GetModuleFromContent($Content);
			  return $Content;
		  } 
		 function AddGallery($Content)
		   {
		      $model = includeclass('gallery');
			  $Content = $model->GetGalleryFromContent($Content);
			  return $Content;
			  
		   }
		 function AddSitemap($Content)
		   {
		      $model = includeclass('sitemap');
			  $Content = $model->GetSitemapFromContent($Content);
			  return $Content;
		   }
		   	
  }
?>