<?php
defined ('ITCS') or die ("Go away.");
  Class TemplateEngine extends Master {
         
		 var $TemplatePath = NULL;
		 var $Js = array();
		 var $css = NULL;
		 var $MinifyJS = array();
		 var $priority = 0;
		 function __construct()
		   {
		      global $Config;
		      $this->TemplatePath = $Config->templatepath;
		   }
		 function includejs($jspath,$priority = '')
		   {
		      $this->priority = ($priority != '' && $this->priority < $priority)?$priority:$this->priority; 
		      $this->Js[] = array(
			                      'text'=>'<script src="'.$jspath.'"></script>',
					              'priority'=>$priority,
								  'url'=>$jspath,
					             );
								 
			 	
		   }  
		 function includecss($csspath)
		   {
		      $this->css .= '<link rel="stylesheet" href="'.$csspath.'" type="text/css" />
			        ';
		   } 
		 function HeadJs ()
		   {
		      //print($this->priority); exit;
		     foreach($this->Js as $key => $js)
			   {
			     if($this->Js[$key]['priority'] == '')
				   {
				     $this->priority = $this->priority + 1;
				     $this->Js[$key]['priority'] = $this->priority; 
				   } 	 
			   }

			 $NewJs = $this->sksort($this->Js,'priority',SORT_DESC);
			 //print_r($NewJs); exit;
			 $content = '';
		     foreach($NewJs as $js)
			   {
			     //$content .= file_get_contents($js['url']); 
			     echo $js['text'];
			   }
			 //print_r($content); exit;  
		   }

			function sksort($array, $subkey="id", $sort_ascending=false) {
			
				if (count($array))
					$temp_array[key($array)] = array_shift($array);
			
				foreach($array as $key => $val){
					$offset = 0;
					$found = false;
					foreach($temp_array as $tmp_key => $tmp_val)
					{
						if(!$found and strtolower($val[$subkey]) > strtolower($tmp_val[$subkey]))
						{
							$temp_array = array_merge(    (array)array_slice($temp_array,0,$offset),
														array($key => $val),
														array_slice($temp_array,$offset)
													  );
							$found = true;
						}
						$offset++;
					}
					if(!$found) $temp_array = array_merge($temp_array, array($key => $val));
				}
			
				if ($sort_ascending) $array = array_reverse($temp_array);
			
				else $array = $temp_array;
				return  $array;
			}
		      
		 function assignRef($key,$value)
		   {
			  if(is_string($key) && substr($key, 0, 1) != '_')
				{
					$this->$key = $value;
					return true;
				}
		      return false;		      
           }
		 function display($file)
		   {
		       global $my;   
		       include($this->TemplatePath.$file.'.php');
		   }
		  function menu($menualias)
		   {
		     global $db,$template;
			 $Query = "select * from #__menu WHERE parent =( select id from #__menu WHERE alias = ".$db->quote($menualias)." ) AND status = 1 order by ordering asc";
			 $db->setQuery($Query);
			 $MenuInArray = $db->loadObjectList();
			// print_r($MenuInArray); exit;
			 if($menualias=="top-menu"):
				 foreach($MenuInArray as $values):
					$Query="SELECT * FROM #__menu WHERE parent=".$db->quote($values->id)." AND status = 1";
					$db->setQuery($Query);
					$subMenuInArray = $db->loadObjectList();
					$values->submenu=$subMenuInArray;
				 endforeach;
			 endif;
			 $this->assignRef('MenuInArray',$MenuInArray);
			 $this->assignRef('MenuID',$menualias);
			 $this->display('menu');
		   }
		  function SetPagination($count,$template = 'pagination/index')
		   {
		      global $Config;
			   $view = IRequest::getString('view');
			   $view = ($view != '')?'view='.$view:'';
			   $task = IRequest::getString('task'); 
			   $task = ($task != '')?'task='.$task:'';
			   $Uri = 'index.php?'.$view.$task;
			  
			   $Pagination = '';
			   
			   if($count > $Config->limit)
			     {
					   $limit = $Config->limit;
					   $NumberOfPage = (floor($count/$limit) == ($count/$limit)) ? ($count/$limit) : (floor($count/$limit)) +1;
					
					   $currentPage = IRequest::getInt('start',1);
					   $pageInArray = array();
					
					   $k=0;
					   $pageInArray[$k]['title'] = 'First';
					   $pageInArray[$k]['link']=$Uri;
					   $pageInArray[$k]['enable']=1;
					   $pageInArray[$k]['active']=0;
					   $k++;
					   
					    $pageInArray[$k]['title'] = '&lt;&lt; Prev';
					   if($currentPage >1):
					   $pageInArray[$k]['link']=$Uri."&start=".($currentPage-1);
					   $pageInArray[$k]['enable']=1;
					   else:
					    $pageInArray[$k]['link']=$Uri;
					   $pageInArray[$k]['enable']=0;
					   endif;
					   $pageInArray[$k]['active']=0;
					   $k++; 
					   
					   for($i=1; $i<=$NumberOfPage;$i++)
						{
							if($i >($currentPage + 2) || ($i+2) < $currentPage){
							continue;
							}
						
						 	$pageInArray[$k]['title'] = $i;
							$pageInArray[$k]['enable']=1;
						     if($i == 1):
							   $pageInArray[$k]['link'] = $Uri;
							 else:
							  $pageInArray[$k]['link'] = $Uri."&start=".$i;
							 endif; 
							 $pageInArray[$k]['active']=(($currentPage == $i) ? 1 : 0);
							 $k++;
						 }
					
						$pageInArray[$k]['title'] = 'Next &gt;&gt;';
					   if($currentPage < $NumberOfPage):
						   $pageInArray[$k]['link']=$Uri."&start=".($currentPage+1);
						   $pageInArray[$k]['enable']=1;
					   else:
							$pageInArray[$k]['link']=$Uri;
							$pageInArray[$k]['enable']=0;
					   endif;	
					   $pageInArray[$k]['active']=0;
					   $k++;
					   
					   $pageInArray[$k]['title'] = 'Last';
					   $pageInArray[$k]['link']=$Uri."&start=".$NumberOfPage;
					   $pageInArray[$k]['enable']=1;
					   $pageInArray[$k]['active']=0;	
					   
					   $this->assignRef('page',$pageInArray); 	  
					   ob_start();
					   $this->display($template);
					   $Pagination = ob_get_contents();
					   ob_end_clean();
			     }
			   $this->assignRef('Pagination',$Pagination); 	  
		   }      
		  function SetPaginationFront($count,$template = 'pagination/index')
		   {
		        global $Config,$ScriptUri;
				$ScriptParts = explode(DIRECTORY_SEPARATOR, $ScriptUri);
				if(count($ScriptParts) > 1)
				  {
				     array_pop($ScriptParts);
					 $ScriptUri = implode(DIRECTORY_SEPARATOR, $ScriptParts);
				  }
			   
			   //print_r($ScriptUri); exit;
			   $Pagination = '';
			   
			   if($count > $Config->limit)
			     {
					   $limit = $Config->limit;
					   $NumberOfPage = (floor($count/$limit) == ($count/$limit)) ? ($count/$limit) : (floor($count/$limit)) +1;
					
					   $currentPage = IRequest::getInt('start',1);
					   $pageInArray = array();
					
					   $k=0;
					   $pageInArray[$k]['title'] = 'First';
					   $pageInArray[$k]['link']=$ScriptUri;
					   $pageInArray[$k]['enable']=1;
					   $pageInArray[$k]['active']=0;
					   $k++;
					   
					    $pageInArray[$k]['title'] = '&lt;&lt; Prev';
					   if($currentPage >1):
					   $pageInArray[$k]['link']=$ScriptUri."?start=".($currentPage-1);
					   $pageInArray[$k]['enable']=1;
					   else:
					    $pageInArray[$k]['link']=$ScriptUri;
					   $pageInArray[$k]['enable']=0;
					   endif;
					   $pageInArray[$k]['active']=0;
					   $k++; 
					   
					   for($i=1; $i<=$NumberOfPage;$i++)
						{
							if($i >($currentPage + 2) || ($i+2) < $currentPage){
							continue;
							}
						
						 	$pageInArray[$k]['title'] = $i;
							$pageInArray[$k]['enable']=1;
						     if($i == 1):
							   $pageInArray[$k]['link'] = $ScriptUri;
							 else:
							  $pageInArray[$k]['link'] = $ScriptUri."?start=".$i;
							 endif; 
							 $pageInArray[$k]['active']=(($currentPage == $i) ? 1 : 0);
							 $k++;
						 }
					
						$pageInArray[$k]['title'] = 'Next &gt;&gt;';
					   if($currentPage < $NumberOfPage):
						   $pageInArray[$k]['link']=$ScriptUri."?start=".($currentPage+1);
						   $pageInArray[$k]['enable']=1;
					   else:
							$pageInArray[$k]['link']=$ScriptUri;
							$pageInArray[$k]['enable']=0;
					   endif;	
					   $pageInArray[$k]['active']=0;
					   $k++;
					   
					   $pageInArray[$k]['title'] = 'Last';
					   $pageInArray[$k]['link']=$ScriptUri."?start=".$NumberOfPage;
					   $pageInArray[$k]['enable']=1;
					   $pageInArray[$k]['active']=0;	
					    
					   $this->assignRef('page',$pageInArray); 	  
					   ob_start();
					   $this->display($template);
					   $Pagination = ob_get_contents();
					   ob_end_clean();
			     }
			   $this->assignRef('Pagination',$Pagination); 	  
		   }     
		function  savePagination($pageInArray)
		  {
			  global $db;
			  $FileName = md5(implode('-',$pageInArray));
			  $cache = IPATH_ROOT.DS.'cache'.DS.$FileName.'.es';
			  if(!file_exists($cache))
			    {
				   $query = "delete from #__404 WHERE type = 'pagination'";
				   $db->setQuery($query);
				   $page = basename($pageInArray[1]);
				   $Query = "select original from #__404 WHERE seo = ".$db->quote($page);
				   $db->setQuery($Query);
				   $original = $db->getOne();
				   foreach($pageInArray as $key => $value)
				     {
					        if($key != 1)
							  {
									$post = array (
													 'original'=>$original.'?start='.($key - 1),
													 'seo'=>$value,
													 'type'=>'pagination',
													 'type_id'=>$key,    
												  );  
									  
									$this->post = $post;
									parent::bind('404');
									parent::save();
							}
					 }
						//print_r($post); exit;	
				   $current = 'done';
				   file_put_contents($cache, $current);	 
				}
		  }	
		  function curPageURL() 
		  {
				 $pageURL = 'http';
				 if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
				 $pageURL .= "://";
				 if ($_SERVER["SERVER_PORT"] != "80") {
				  $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
				 } else {
				  $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
				 }
				 return $pageURL;
		 }	   
     }
  global $template;
  $template = new TemplateEngine($template);
?>