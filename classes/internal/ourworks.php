<?php 
	error_reporting(0);
	defined ('ITCS') or die ("Go away.");
	class Ourworks extends Master 
	{
        function __construct()
		{
			parent::__construct();
		}
		function display()
		{
			global $template,$Config;	
			$start = IRequest::getInt('start',1);
			$Config->limit = 12;
			$Limit = ($Config->limit)?$Config->limit:20; 
			$Start = ($start-1) * $Limit;
			$workCount=$this->getWorkCount();
			$template->SetPaginationFront($workCount);
			$workList=$this->getAllWorks($Start,$Limit);
			$template->assignRef('workList',$workList);
		}
		function openpopup() 
		{
			global $template;
			$workID = IRequest::getInt('workID');
			$workDetails=$this->getWorkById($workID);
			$template->assignRef('workDetails',$workDetails);
		}
		function description($workID)
		{
			global $template;
			$workID = IRequest::getInt('workID');
			$workDetails=$this->getWorkById($workID);
			if($workDetails->data!=="" || $workDetails->data!==NULL)
			{
				include_once(IPATH_ROOT."/classes/external/priyaTools/resizer.php");
				$Imageparams = array('width' =>430);	
				$galleryInArray=array_values(unserialize($workDetails->data.json_encode($Imageparams)));
				$file_path="images/gallery/".$galleryInArray[0];
				if(file_exists(IPATH_ROOT."/".$file_path))
				{
					$workDetails->gallery = Resizer::img_resize($file_path,$Imageparams,"cache/ongoingworkbig");
				}
			}	
			$template->assignRef('workDetails',$workDetails);
		}
		function getWorkById($workID)
		{
			global $db;
			$sql = "SELECT w.*,g.data FROM #__ourworks as w LEFT JOIN #__gallery as g ON w.gallery_id=g.gallery_id WHERE w.id=".$db->quote($workID);
			$db->setQuery($sql);
			$ProjectDetails = $db->loadObjectList();
			$singleWork = $ProjectDetails[0];
			return $singleWork;
		}
		function getAllWorks($Start=0, $Limit=12)
		{
			global $db;
			$Query="SELECT w.*,g.data FROM #__ourworks as w LEFT JOIN #__gallery as g ON w.gallery_id=g.gallery_id WHERE status=1 order by w.id desc ";
				$db->setQuery($Query,$Start,$Limit);
				$worksInArray= $db->loadObjectList();
				
				include_once(IPATH_ROOT."/classes/external/priyaTools/resizer.php");
				$Imageparams = array('width' =>350);	
				 foreach($worksInArray as $work)
				 {
				 	if($work->data!=="" || $work->data!==NULL)
					{
						$galleryInArray=array_values(unserialize($work->data));
						$file_path="images/gallery/".$galleryInArray[0];
						if(file_exists(IPATH_ROOT."/".$file_path))
						{
							$work->gallery = Resizer::img_resize($file_path,$Imageparams,"cache/ongoingwork");
						}
					}	
				 }
				 return $worksInArray;
		}
		function getWorkCount()
		{
			global $db;	
			$Query = "SELECT count(*) FROM #__ourworks WHERE status=1";
			$db->setQuery($Query);
			$Count = $db->getOne();
			return $Count;
		}
		
	}		
?>