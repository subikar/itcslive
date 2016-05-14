<?php  if(isset($this->Content->isfullpage) && $this->Content->isfullpage == 1): ?>
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

        <div class="grid_4">

           <div class="block-1" id="block-1">

               <a target="_blank" href="http://www.mipalace.com"><img src="<?php echo $this->site; ?>templates/itcslive/images/mipalace.png" alt=""></a>

           </div>

        </div>

        <div class="grid_4">

           <div class="block-1">

               <a target="_blank" href="http://www.9newz.com"><img src="<?php echo $this->site; ?>templates/itcslive/images/9newz.png" alt=""></a>

           </div>

        </div>

        <div class="grid_4">

           <div class="block-1">

               <a target="_blank" href="http://www.inclusive.co.in"><img src="<?php echo $this->site; ?>templates/itcslive/images/inclusive.png" alt=""></a>

           </div>

        </div>

    </div>

   </div>

<?php endif; ?>  

<?php endif; ?>



  <!--==============================footer=================================-->    

<footer>

<aside>

   <div class="main-aside-footer">

       <?php echo $this->display( 'footermenu',0);?>

   </div>

</aside>

  <div class="main-footer">

    <div class="container_12">

            <div class="grid_10">

				<div class="copyright"><p>ITCS Live, a design and development company, provides affordable web, graphic, corporate logo, Flash design and web development services and SEO solutions</p></div>

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

<?php echo $this->Content->jsscript; ?>

</body>

<script>

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