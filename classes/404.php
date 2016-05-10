<?php 
    define('IPATH_BASE',__DIR__);
    define('DIRECTORY_SEPARATOR','/');
    define('DS','/');
	// Global definitions
	$parts = explode(DIRECTORY_SEPARATOR, IPATH_BASE);
	array_pop($parts);
	// Defines
	define('IPATH_ROOT', implode(DIRECTORY_SEPARATOR, $parts));
  include_once('common.php');
  Get404Original();
?>