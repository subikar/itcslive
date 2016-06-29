<?php 
global $template;
 if(isset($this->Content->isfullpage) && $this->Content->isfullpage == 1): ?>
<!-- No Div for Full Page -->
<?php else: ?>
</div>
</section>
<?php endif; ?>
<?php  $PageUriInArray=array_values(array_filter(explode( "/",$_SERVER['REQUEST_URI'])));  
$page_id=IRequest::getInt("id"); 
$accessPage_id = array("4","26","33","34","36","37","38","21","22","87"); ?>
<?php  if($this->is_home || in_array($page_id,$accessPage_id) || ((int)$page_id==5 && in_array("projects",$PageUriInArray))): ?>

<div class="over-footer">
  <div class="container_12">
    <div class="wrapper">
      <div class="grid_4 fcontact">
        <?php includemodule('contact'); ?>
      </div>
      <div class="grid_4 fblog">
        <?php includemodule('latestblog'); ?>
      </div>
      <div class="grid_4 ftestimonial">
        <?php includemodule('testimonials'); ?>
      </div>
    </div>
  </div>
</div>
<?php if($this->is_home): ?>
<div class="container_12">
  <div class="wrapper">
    <div class="footer_grid_4">
		<a href="http://www.mipalace.com/" title=""><div class="mipalaceicon"></div></a>
	</div>
	
	<div class="footer_grid_4">
		<a href="http://www.9newz.com/" title=""><div class="portalicon"></div></a>
	</div>
	
	<div class="footer_grid_4 nobord">
		<a href="http://www.inclusive.co.in" title=""><div class="inclusiveicon"></div></a>
	</div>
	
    
    
  </div>
</div>
<?php endif; ?>
<?php endif; ?>
<!--==============================footer=================================-->
<footer>
  <aside>
    <div class="main-aside-footer"> <?php echo $this->display( 'footermenu',0);?> </div>
  </aside>
  <div class="mobile_contact desktop-none">
    <ul>
      <li><a href="tel:+919836892283"><i class="fa fa-phone"></i>Call us</a></li>
      <li><a href="mailto:info@itcslive.com"><i class="fa fa-envelope"></i>Email us</a></li>
    </ul>
  </div>
  <!--<div class="mobile_contact desktop-none">

<div class="container"><div class="phone"><a href="tel:+919836892283"><i class="fa fa-phone"></i>Call us</a></div><div class="email"><a href="mailto:fb@primewatchworld.com"><i class="fa fa-envelope"></i>Email us</a></div></div></div>-->
  <div class="main-footer">
    <div class="container_12">
      <div class="grid_10">
        <div class="copyright">
          <p>ITCS Live, a design and development company, provides affordable web, graphic, corporate logo, Flash design and web development services and SEO solutions</p>
        </div>
        <div class="copyright">Copyright &copy; 2007-<?php echo date('Y'); ?> iTCSLive.com</div>
      </div>
      <div class="grid_2a footer-media-sp">
        <h3 class="bot-6 foot">Follow us</h3>
        <ul class="footer-media">
          <li><a target="_blank" href="https://www.facebook.com/itcslive"><i class="fa fa-fw fa-facebook-square"></i></a></li>
          <li><a target="_blank" href="https://www.youtube.com/user/iTCSLIVE?feature=mhee"><i class="fa fa-fw fa-youtube-square"></i></a></li>
          <li><a target="_blank" href="https://twitter.com/outsourcing_web"><i class="fa fa-fw fa-twitter-square"></i></a></li>
          <li><a target="_blank" href="https://plus.google.com/101459946125679381605/posts"><i class="fa fa-fw fa-google-plus-square"></i></a></li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</footer>
</div>
     <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.caroufredsel/6.2.1/jquery.carouFredSel.packed.js"></script>
     <script  src="//cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script> 
     <script type="text/javascript">
	 jQuery(window).load (
			function(){jQuery('#carousel_testimonial').carouFredSel({auto: false, prev: '#prev_testimonial',next: '#next_testimonial', width: 290, items: {
			  visible : {min: 1,
			   max: 1
		},
		height: 'auto',
		 width: 290,
		}, responsive: true, 
		scroll: 1, 
		mousewheel: false,
		swipe: {onMouse: true, onTouch: true}});
    } ); 
  </script>
<!-- For Mobile start -->
<script src="<?php echo $this->site; ?>templates/itcslive/js/jPushMenu.js"></script>
<!-- For Mobile End -->
  

<?php  if(isset($this->Content->isfullpage) && $this->Content->isfullpage == 1): ?>
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-524982e11e01596a" async="async"></script>
<?php endif; ?>
<?php $template->HeadJs(); ?>
<?php echo $this->Content->jsscript; ?>
<!-- Google Code for Remarketing Tag -->
<!--------------------------------------------------
Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup
--------------------------------------------------->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1060996490;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1060996490/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript>
</body><script>

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){


  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),



  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)


  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');


  ga('create', 'UA-12058105-1', 'auto');



  ga('send', 'pageview');



</script>
<!--Start of Zopim Live Chat Script-->
<script type="text/javascript">



window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=


d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.



_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");



$.src="//v2.zopim.com/?1D21bxdZYE8qaKK8U4MCgG0HBRqRe93o";z.t=+new Date;$.


type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");


</script>
<!--End of Zopim Live Chat Script-->
</html>