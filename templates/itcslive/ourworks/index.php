<?php
	error_reporting(0);
	defined ('ITCS') or die ("Go away.");
	global $Config;
?>
<div id="primary">
   <div role="main" id="contactus">
      <div class="article-body">
         <div class="padDiv row10"> 
				<div class="boiteHeader">
					<h5><span class="fa fa-tasks"></span>Our Works</h5> 
					</div>	
				 <ul class="ourworks_total_block">
				 <?php foreach($this->workList as $work): ?>
					<li class="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"><a title="<?php echo strtoupper($work->title); ?>" href="<?php echo $Config->site.'ourworkdescription?workID='.$work->id; ?>" class="col hov openDescription">
					   <div class="image-box">
					   <img src="<?php echo $Config->site.$work->gallery; ?>" alt="" class="img_bdr">
					   </div>
					   <br clear="all"/>
					   <strong><?php echo $work->title; ?></strong>
					   <br />
					   <span><?php echo $work->company_name; ?></span></a>
					</li>
				<?php endforeach; ?>
				</ul>
		 </div>
      </div>
   </div>
   <div id="pagination">
   <?php echo $this->Pagination; ?>
   </div>
</div>
<script type="text/javascript">
jQuery(document).ready(function(){
 jQuery(".openDescription").colorbox({iframe:true, width:"60%", height:"80%", fixed: true});	 
 });
</script>