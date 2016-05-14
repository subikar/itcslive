<?php defined ('ITCS') or die ("Go away.");

global $Config,$my,$template;



/*$template->includejs($this->site."templates/itcslive/js/templatejs/jquery-migrate-1.1.1.js",1,0);

$template->includejs($this->site."templates/itcslive/js/templatejs/script.js",2,1);

$template->includejs($this->site."templates/itcslive/js/templatejs/superfish.js",3,0);

$template->includejs($this->site."templates/itcslive/js/templatejs/jquery.ui.totop.js",4,0);

$template->includejs($this->site."templates/itcslive/js/templatejs/jquery.equalheights.js",5,0);

$template->includejs($this->site."templates/itcslive/js/templatejs/jquery.mobilemenu.js",6,0);

$template->includejs($this->site."templates/itcslive/js/templatejs/jquery.easing.1.3.js",7,0);

$template->includejs($this->site."templates/itcslive/js/templatejs/jquery.mobile.customized.min.js",8,0);

$template->includejs($this->site."templates/itcslive/js/colorbox/jquery.colorbox.js",9,0);

$template->includejs($this->site."templates/itcslive/js/templatejs/kendo.all.min.js",10,0);

$template->includejs($this->site."templates/itcslive/js/templatejs/tinymce.min.js",11,0);*/

?>

<!DOCTYPE html>

<html>

<head>

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="google-site-verification" content="GDb4S15UpTrnLAeNr_7IJy3w7Ah5PLhMc1zzJzg6m8Q" />
<meta name='verify-v1' content='dbf4e7b7ebca3ecc5f01a3cdf36e2de2'/>
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
<META http-equiv='Content-Type' content='text/html; charset=UTF-8'>
<title><?php echo isset($this->Title)?$this->Title.' | iTCSLive':'iTCSLive'; ?></title>
<meta property="og:image" content="<?php echo $this->site; ?>templates/itcslive/css/images/logo.png" />
<meta property="og:title" content="<?php echo isset($this->Title)?$this->Title:''; ?>" />
<meta property="og:type" content="article"/>
<meta property="og:url" content="<?php echo $this->SCRIPT_URI; ?>" />
<meta property="og:description"  content="<?php echo isset($this->Description)?$this->Description:''; ?>" />
<meta property="og:site_name" content="iTCSLive" />
<meta property="fb:admins" content="722407295"/>
<meta name="Description" content="<?php echo isset($this->Description)?$this->Description:''; ?>">
<meta name="Keywords" content="<?php echo isset($this->Keyword)?$this->Keyword:''; ?>">
<link rel="shortcut icon" href="<?php echo $this->site; ?>templates/itcslive/images/favicon.ico" />
<link rel="stylesheet" href="<?php echo $this->site; ?>templates/itcslive/css/reset.css">
<link rel="stylesheet" href="<?php echo $this->site; ?>templates/itcslive/css/skeleton.css">
<link rel="stylesheet" href="<?php echo $this->site; ?>templates/itcslive/css/superfish.css">
<link rel="stylesheet" href="<?php echo $this->site; ?>templates/itcslive/css/style.css">
<link rel="stylesheet" href="<?php echo $this->site; ?>templates/itcslive/css/light-blue.css">
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel=stylesheet type="text/css" media=all href="<?php echo $this->site; ?>templates/itcslive/js/colorbox/colorbox.css"/>
<?php  if(isset($this->Content->isfullpage) && $this->Content->isfullpage == 1): ?>
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-524982e11e01596a" async="async"></script>
<?php endif; ?>

<?php echo $template->css; ?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/superfish/1.7.9/js/superfish.min.js"></script>

<?php  if($this->is_home): ?>
<!-- Home Page start -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.4.0/jquery-migrate.min.js"></script>

<script src="https://cdn.jsdelivr.net/jquery.uitotop/1.2/js/jquery.ui.totop.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

<!-- Home Page end -->
<?php endif; ?>

<!-- For Mobile start -->
<link rel="stylesheet" href="<?php echo $this->site; ?>templates/itcslive/css/jPushMenu.css">
<script src="<?php echo $this->site; ?>templates/itcslive/js/jPushMenu.js"></script>
<!-- For Mobile End -->

<?php if($my->uid > 0):?>
<link rel="stylesheet" href="<?php echo $this->site; ?>templates/itcslive/css/dashboard.css">
<!-- For Inner Pages -->
<link rel=stylesheet type="text/css" media=all href="<?php echo $this->site; ?>templates/itcslive/js/auto_jqueryui/kendo.common.min.css"/>
<script src="<?php echo $this->site; ?>templates/itcslive/js/auto_jqueryui/kendo.all.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.3.12/tinymce.min.js"></script>
<!-- For Inner Pages -->
<?php endif; ?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.6.4/jquery.colorbox-min.js"></script>
<script src="<?php echo $this->site; ?>templates/itcslive/js/templatejs/script.js"></script>

<?php echo $template->HeadJs(); ?>

<script language="javascript" type="text/javascript">

 var configurl = '<?php echo $this->site; ?>';

</script>

</head>

<body id="page-1">

<div class="main">

<div class="head">

  <div class="container_12">

    <div class="grid_12">

      <!-- For Desktop Header View -->

      <header class="mobile-none">

        <div class="extra-wrap">

          <div class="grid_12">

            <div class="grid_4">

              <h1><a href="<?php echo $this->site; ?>"><img src="<?php echo $this->site; ?>templates/itcslive/images/logo.png" alt=""></a></h1>

            </div>

            <div class="grid_8">

              <div class="login">Need help? Call Us <i class="fa fa-fw fa-phone"></i> 033-68888449 &nbsp;&nbsp;|&nbsp;&nbsp; <i class="fa fa-fw fa-skype"></i> itcslive &nbsp;&nbsp;| &nbsp;&nbsp; <i class="fa fa-fw fa-user"></i>

                <?php if(isset($my->uid)): ?>

                <a class="logout" href="<?php echo $Config->site.'logout'; ?>" title="Client Logout">Logout</a>

                <?php else:?>

                <a class="clientlogin" href="<?php echo $Config->site.'login'; ?>" title="Client Login">User

                Login</a>

                <?php endif; ?>

              </div>

              <div class="clearfix"></div>

              <a href="http://www.joomspot.com" target="_blank" class="bnrsp top-domain-bnr"><img src="images/itcs_banner-1.jpg" title="Buy Domain, Hosting, Email and More at www.Joomspot.com" alt="Buy Domain, Hosting, Email and More at www.Joomspot.com"/></a> </div>

          
		  		  
		  </div>

        </div>

      </header>

      <!-- //For Desktop Header View -->

 

    </div>

  </div>

 

    <?php $this->display('mobilemenu',0); ?>



  <div class="main-width">

    <div class="container_12">

      <div class="grid_12">

        <div class="nav-search">

          <nav>

            <?php if(isset($my->uid) && $my->uid > 0): ?>

            <?php $this->menu('user-menu'); ?>

            <?php else:?>

            <?php  $this->menu('top-menu'); ?>

            <?php endif; ?>

          </nav>

            <?php includemodule('contentsearch'); ?>

          <div class="clear"></div>

        </div>

      </div>

    </div>

  </div>

  <?php  if($this->is_home): ?>

  <div id="slide">

    <?php $this->display('slideshow',0); ?>

  </div>

  <?php endif; ?>

</div>

<?php  if($this->is_home): ?>

<aside>

  <div class="main-aside">

    <div class="inner">

      <div class="container_12">

        <div class="wrapper">

          <div class="grid_4">

            <?php includemodule('welcome'); ?>

          </div>

          <div class="grid_4">

            <?php includemodule('development'); ?>

          </div>

          <div class="grid_4">

            <?php includemodule('success'); ?>

          </div>

        </div>

      </div>

    </div>

  </div>

</aside>

<?php endif; ?>

<?php  if(isset($this->Content->isfullpage) && $this->Content->isfullpage == 1): ?>
<!-- No Div for Full Page -->
<?php else: ?>
<section id="content">
<div class="container_12">
<?php endif; ?>