var OxOa90f=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x3C$1$3","\x26nbsp;","\x22","\x27","$1","\x26amp;","\x26lt;","\x26gt;","\x26#39;","\x26quot;"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;window[OxOa90f[0]]=function (){var iframe=document.getElementById(OxOa90f[2])[OxOa90f[1]];iframe[OxOa90f[5]][OxOa90f[4]][OxOa90f[3]]=OxOa90f[6];iframe[OxOa90f[5]][OxOa90f[7]]=OxOa90f[8];iframe[OxOa90f[5]][OxOa90f[4]][OxOa90f[9]]=true;iframe[OxOa90f[5]][OxOa90f[4]][OxOa90f[11]][OxOa90f[10]]=OxOa90f[12];iframe[OxOa90f[5]][OxOa90f[4]][OxOa90f[11]][OxOa90f[13]]=OxOa90f[14];iframe[OxOa90f[5]][OxOa90f[4]][OxOa90f[11]][OxOa90f[15]]=OxOa90f[16];iframe[OxOa90f[5]][OxOa90f[4]][OxOa90f[11]][OxOa90f[17]]=OxOa90f[18];iframe.focus();} ;function insertContent(){var iframe=document.getElementById(OxOa90f[2])[OxOa90f[1]];var Ox190=iframe[OxOa90f[5]][OxOa90f[4]][OxOa90f[3]];if(Ox190&&Ox190[OxOa90f[19]]>0){Ox190=_CleanCode(Ox190);if(Ox190.match(/<*>/g)){Ox190=String_HtmlEncode(Ox190);} ;editor.PasteHTML(Ox190);Window_CloseDialog(window);} ;} ;function _CleanCode(Ox237){Ox237=Ox237.replace(/<\\?\??xml[^>]>/gi,OxOa90f[6]);Ox237=Ox237.replace(/<([\w]+) class=([^ |>]*)([^>]*)/gi,OxOa90f[20]);Ox237=Ox237.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxOa90f[20]);Ox237=Ox237.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxOa90f[6]);Ox237=Ox237.replace(/<o:p>\s*<\/o:p>/g,OxOa90f[6]);Ox237=Ox237.replace(/<o:p>.*?<\/o:p>/g,OxOa90f[21]);Ox237=Ox237.replace(/<\/?\w+:[^>]*>/gi,OxOa90f[6]);Ox237=Ox237.replace(/<\!--.*-->/g,OxOa90f[6]);Ox237=Ox237.replace(/[\\]/gi,OxOa90f[22]);Ox237=Ox237.replace(/[\\]/gi,OxOa90f[23]);Ox237=Ox237.replace(/<\\?\?xml[^>]*>/gi,OxOa90f[6]);Ox237=Ox237.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxOa90f[6]);Ox237=Ox237.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxOa90f[21]);Ox237=Ox237.replace(/<span\s*[^>]*><\/span>/gi,OxOa90f[6]);Ox237=Ox237.replace(/\s*style="\s*"/gi,OxOa90f[6]);Ox237=Ox237.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOa90f[6]);Ox237=Ox237.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOa90f[6]);Ox237=Ox237.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOa90f[6]);while(Ox237.match(/<span\s*>(.*?)<\/span>/gi)){Ox237=Ox237.replace(/<span\s*>(.*?)<\/span>/gi,OxOa90f[24]);} ;while(Ox237.match(/<font\s*>(.*?)<\/font>/gi)){Ox237=Ox237.replace(/<font\s*>(.*?)<\/font>/gi,OxOa90f[24]);} ;Ox237=Ox237.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOa90f[24]);Ox237=Ox237.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOa90f[24]);Ox237=Ox237.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOa90f[24]);Ox237=Ox237.replace(/<p([^>])*>(&nbsp;)*\s*<\/p>/gi,OxOa90f[6]);Ox237=Ox237.replace(/<p([^>])*>(&nbsp;)<\/p>/gi,OxOa90f[6]);return Ox237;} ;function String_HtmlEncode(Ox177){if(Ox177==null){return OxOa90f[6];} ;Ox177=Ox177.replace(/&/g,OxOa90f[25]);Ox177=Ox177.replace(/</g,OxOa90f[26]);Ox177=Ox177.replace(/>/g,OxOa90f[27]);Ox177=Ox177.replace(/'/g,OxOa90f[28]);Ox177=Ox177.replace(/\x22/g,OxOa90f[29]);return Ox177;} ;