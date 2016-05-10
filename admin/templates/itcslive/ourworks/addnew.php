<?php 
	error_reporting(0);
	$WorkData=$this->WorkData;
?>
  <div style="min-height: 601px;" id="page-content" class="clearfix ng-scope" fit-height="">
    <div style="" id="wrap" ng-view="" class="mainview-animation ng-scope">
	<form name="SavePage" action="" method="post" enctype="multipart/form-data">
      <div class="ng-scope" id="page-heading">
        <h1>Add/Edit Work</h1>
        <div class="options">
          <div class="btn-toolbar">
            <div class="btn-group" dropdown="">
			 <div class="btn btn-default dropdown-toggle btn-save">
			  	<input type="submit" name="Save" value="Save" />
			  </div>
              <div class="btn btn-default dropdown-toggle btn-save">
			  	<input type="submit" name="Save_close" value="Save&Close" />
			  </div>
			  <div class="btn btn-default dropdown-toggle btn-save">
			  	<a href="index.php?view=ourworks">Cancel</a>
			  </div>
            </div>
        </div>
      </div>
      <div class="container ng-scope" ng-controller="DashboardController">
        <div class="row">
          
          <div class="col-md-12">
            <div class="panel panel-gray">
              <div class="panel-heading">
                <h4>Create Work</h4>
              </div>
			  
              <div class="panel-body no-padding">
			  	<div class="panel-body-left">
					<div class="input-group">
				  	<span class="input-group-addon"><i class="fa fa-male"></i></span>
					<input class="form-control" type="text" name="title" value="<?php echo $WorkData->title; ?>" placeholder="Enter Title"  />
				 	<span id="error_title" style="color:#FF00CC;"></span>
				  </div>
				   <div class="input-group">
				  	<span class="input-group-addon"><i class="fa fa-link"></i></span>
					<input class="form-control" type="text" name="website" value="<?php echo $WorkData->website; ?>" placeholder="Enter Website" />
				  </div>
				  <div class="input-group">
				  	<span class="input-group-addon"><i class="fa fa-male"></i></span>
					<input class="form-control" type="text" name="company_name" value="<?php echo $WorkData->company_name; ?>" placeholder="Enter Company" />
				  </div>
				  <div class="input-group">
				  	<span class="input-group-addon"><i class="fa fa-tag"></i></span>
					<input class="form-control" type="text" name="project_tag" value="<?php echo $WorkData->project_tag; ?>" placeholder="Enter Tag Name" />
				  </div>
				  <?php if((int)$WorkData->id > 0): ?>
				  <div class="input-group">
				  	<span class="input-group-addon"><i class="fa fa-tag"></i></span>
					<textarea style="resize: none;" readonly rows="2" cols="80"><script type="text/javascript" src="http://www.itcslive.in/templates/itcslive/js/projectGallery.js?workid=<?php echo (int)$WorkData->id ?>"></script></textarea>
				  </div>
				  <?php endif; ?>
				  <div class="input-group">
				  	<span class="input-group-addon"><i class="fa fa-list-alt"></i></span>
					<textarea class="form-control" name="project_description" id="editor" placeholder="Enter Description"><?php echo  $WorkData->project_description; ?></textarea>
				</div>	
				</div>
				<div class="panel-body-right"> 				  
				  <div class="input-group">
				  <div id="" class="uploaded_area">				  
				 <?php foreach($WorkData->gallery as $image): ?>
				 <span class="total_uploaded_pic">
					 <span>
					 	<img src="../images/gallery/<?php echo $image; ?>"/>
					 </span>
					 <span>				 
					 	<input type="checkbox" name="remove_gallery[]" value="<?php echo $image; ?>" />Delete:
					 </span>
					 <div class="clear"></div>
				 </span>
				 <?php endforeach; ?>
				  </div>
				  <div class="clear"></div>
				  	<div class="upload_area"><span><i class="fa fa-upload"></i></span><span class="upload_div">Upload Gallery:</span></div>
						<div id="prevworkGroup" class="galleryarea">
							<div class="add_image">
								<div id="prevworkBoxDiv1" class="input_browse">
								<div id="message1"></div>
								<label>Gallery#1: </label>
								<input class="pop_button file_uploadd" type="file" name="image_upload[]"  onchange="Ourworks.uplodeGallery(this,1);"/>
							  	</div>
								<img id="img_progress1" src="../images/photo_loader.gif" style="width:200px; height:20px; display:none;"/>
							  <span class="sp_image_upload"><img id="blah1" src="../images/no_image_found.jpg" style="height:100px; width:100px;" align="right" /></span>
							  <div class="clear"></div>
							  </div>
						  </div>
						  <input type='button' value='+' id='addButton'>
						 <input type='button' value='-' id='removeButton'>
				  </div> 
				 </div>
				 <div class="clear"></div>
			  </div>
			  <input type="hidden" name="view" value="ourworks" />
			  <input type="hidden" name="task" value="savepage" />
			  <input type="hidden" id="work_id" name="work_id" value="<?php echo (int)$WorkData->id; ?>" />
			  <input type="hidden" name="gallery_id" value="<?php echo (int)$WorkData->gallery_id; ?>" /> 			  
            </div>
          </div>
        </div>
		<div class="clear"></div>
      </div>
    </div>
	</form>
  </div>
  <div class="clear"></div>
  </div>
  <style>
  .page{ width:300px;}
  </style>
  