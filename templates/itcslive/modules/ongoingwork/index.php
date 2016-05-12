<?php defined ('ITCS') or die ("Go away."); 
global $Config;
?>
<script  src="<?php echo $Config->site; ?>templates/itcslive/js/templatejs/jquery.carouFredSel-6.1.0-packed.js"></script>
     <script  src="<?php echo $Config->site; ?>templates/itcslive/js/templatejs/jquery.touchSwipe.min.js"></script> 
     <script>
	 $(window).load (
			function(){$('#carousel1').carouFredSel({auto: false, prev: '#prev',next: '#next', width: 220, items: {
			  visible : {min: 1,
			   max: 4
		},
		height: 'auto',
		 width: 220,
		}, responsive: true, 
		scroll: 1, 
		mousewheel: false,
		swipe: {onMouse: true, onTouch: true}});
    } ); 
  </script>
<div class="wrapper">
    <div class="grid_12">
        <div class="div-main">
           
		   <span style="float:right; height:20px;"></span>
		   <div class="clear"></div>
             <div class="carousel-box">
        <a id="prev"></a>
        <a id="next"></a>
        <div class="carousel">
          <ul id="carousel1">
		  <?php foreach($this->worksInArray as $work): ?>
			<li>
			<a title="<?php echo $work->title; ?>" href="<?php echo $Config->site.'ourworkdescription?workID='.$work->id; ?>" class="col hov openDescription">
			   <div class="image-box"> 
			   <img src="<?php echo $Config->site.$work->gallery; ?>" alt="" class="img_bdr">
			   </div>
			   <div class="image-content">
			   <strong><?php echo $work->title; ?></strong>
			   <span><?php echo $work->company_name; ?></span>
			   </div>
			 </a>
			</li>
		<?php endforeach; ?>	
          </ul>
        </div>
        </div> 
		<span style="float:right;"><a href="<?php echo $Config->site.'ourworks'; ?>">See More>>>></a></span>    
        </div>
    </div>
	</div>
<script type="text/javascript">
jQuery(document).ready(function(){
 jQuery(".openDescription").colorbox({iframe:true, width:"60%", height:"80%", fixed: true});	 
 });
</script>