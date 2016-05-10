<?php defined ('ITCS') or die ("Go away.");
global $Config,$my,$template;
$template->includecss($this->site."templates/itcslive/css/style-min.css");
$template->includecss($this->site."templates/itcslive/css/form.css");
$template->includecss($this->site."templates/itcslive/js/colorbox/colorbox.css");
$template->includecss($this->site."templates/itcslive/js/auto_jqueryui/kendo.common.min.css");
$template->includejs("https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",1);
$template->includejs($this->site."templates/itcslive/js/colorbox/jquery.colorbox.js",2);
$template->includejs($this->site."templates/itcslive/js/auto_jqueryui/kendo.all.min.js",3);
$template->includejs($this->site."classes/external/editor/tinymce.min.js",4);
?>
<!DOCTYPE html>
<html>
<head>
<title><?php echo isset($this->Title)?$this->Title:''; ?></title>
<?php echo $template->HeadJs(); ?>
<?php echo $template->css; ?>
</head>
<body>
