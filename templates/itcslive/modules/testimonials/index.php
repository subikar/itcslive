<?php defined ('ITCS') or die ("Go away."); 
global $Config;
?>
  <h3 class="bot-1 ptm">Testimonials</h3>
  <div class="carousel-box">
        <a id="prev_testimonial"></a>
        <a id="next_testimonial"></a>
        <div class="carousel">
          <ul id="carousel_testimonial">
		  <?php if(count($this->testimonialsInArray)>0): ?>
   			<?php foreach($this->testimonialsInArray as $testimonial): 
				if(isset($testimonial->gallery)){ $imageFile=$testimonial->gallery; } else { $imageFile= "templates/itcslive/images/portfolio/customer_review.png"; }
			?>
			<li style="width:295px; height:350px;">
			<div class="block-2"><?php echo $testimonial->testimonial_content; ?></div>
			   <div class="block-3"><img class="fleft img_bdr right-2" src="<?php echo $Config->site.$imageFile; ?>" alt="alt" width="98" height="95" />
				  <div class="extra-wrap"><strong><a class="col hov" href="#"><?php echo $testimonial->client_name; ?></a></strong> <span class="dis-block"><?php echo $testimonial->client_address; ?></span> </div>
			   </div>
			</li>
			<?php endforeach; ?>
   		<?php else: ?>
		<li style="width:295px; height:350px;">
		<div class="block-2">" "</div>
		   <div class="block-3"><img class="fleft img_bdr right-2" src="templates/itcslive/images/portfolio/customer_review.png" alt="alt" width="98" height="95" />
			  <div class="extra-wrap"><strong><a class="col hov" href="#">Charles Gallie</a></strong> <span class="dis-block">Washinton DC USA, Founder SoberFolk.Org</span> </div>
		   </div>
		  </li> 
		<?php endif; ?>
          </ul>
        </div>
        </div>
