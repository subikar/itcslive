var OxO20bc=["top","dialogArguments","opener","_dialog_arguments","document","onload","value","","uploader1","browse_Frame","contentWindow","btn_CreateDir","btn_zoom_in","btn_zoom_out","btn_Actualsize","divpreview","TargetUrl","Button1","Button2","editor","window","\x3Cbr\x3E",".",".jpeg",".jpg",".gif",".png","\x3CIMG src=\x27","\x27 width=\x27150\x27\x3E",".bmp","\x26nbsp;\x3Cembed src=\x22","\x22 quality=\x22high\x22 width=\x22150\x22 height=\x22150\x22 type=\x22application/x-shockwave-flash\x22 pluginspage=\x22http://www.macromedia.com/go/getflashplayer\x22\x3E\x3C/embed\x3E\x0A","\x26nbsp;",".swf",".avi",".mpg",".mp3",".mpeg","\x26nbsp;\x3Cembed name=\x22MediaPlayer1\x22 src=\x22","\x22 autostart=-1 showcontrols=-1  type=\x22application/x-mplayer2\x22 width=\x22150\x22 height=\x22150\x22 pluginspage=\x22http://www.microsoft.com/Windows/MediaPlayer\x22 \x3E\x3C/embed\x3E\x0A",".wav","URL: ","innerHTML","inp","zoom","style","display","none","wrapupPrompt","iepromptfield","body","div","id","IEPromptBox","promptBlackout","border","1px solid #b0bec7","backgroundColor","#f0f0f0","position","absolute","width","330px","zIndex","100","\x3Cdiv style=\x22width: 100%; padding-top:3px;background-color: #DCE7EB; font-family: verdana; font-size: 10pt; font-weight: bold; height: 22px; text-align:center; background:url(../Images/formbg2.gif) repeat-x left top;\x22\x3E","\x3C/div\x3E","\x3Cdiv style=\x22padding: 10px\x22\x3E","\x3CBR\x3E\x3CBR\x3E","\x3Cform action=\x22\x22 onsubmit=\x22return wrapupPrompt()\x22\x3E","\x3Cinput id=\x22iepromptfield\x22 name=\x22iepromptdata\x22 type=text size=46 value=\x22","\x22\x3E","\x3Cbr\x3E\x3Cbr\x3E\x3Ccenter\x3E","\x3Cinput type=\x22submit\x22 value=\x22\x26nbsp;\x26nbsp;\x26nbsp;","\x26nbsp;\x26nbsp;\x26nbsp;\x22\x3E","\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;","\x3Cinput type=\x22button\x22 onclick=\x22wrapupPrompt(true)\x22 value=\x22\x26nbsp;","\x26nbsp;\x22\x3E","\x3C/form\x3E\x3C/div\x3E","100px","left","offsetWidth","px","block","onmouseover","CuteEditor_ColorPicker_ButtonOver(this)"];function Window_FindDialogArguments(Ox90){var Ox12d=Ox90[OxO20bc[0]];if(Ox12d[OxO20bc[1]]){return Ox12d[OxO20bc[1]];} ;var Ox12e=Ox12d[OxO20bc[2]];if(Ox12e==null){return Ox12d[OxO20bc[4]][OxO20bc[3]];} ;var Ox34a=Ox12e[OxO20bc[4]][OxO20bc[3]];if(Ox34a==null){return Window_FindDialogArguments(Ox12e);} ;return Ox34a;} ;function reset_hiddens(){} ;Event_Attach(window,OxO20bc[5],reset_hiddens);function RequireFileBrowseScript(){} ;function reset_hiddens(){if(TargetUrl[OxO20bc[6]]!=OxO20bc[7]&&TargetUrl[OxO20bc[6]]!=null){do_preview();} ;} ;RequireFileBrowseScript();var uploader1=Window_GetElement(window,OxO20bc[8],true);var browse_Frame=Window_GetElement(window,OxO20bc[9],true);browse_Frame=browse_Frame[OxO20bc[10]];var btn_CreateDir=Window_GetElement(window,OxO20bc[11],true);var btn_zoom_in=Window_GetElement(window,OxO20bc[12],true);var btn_zoom_out=Window_GetElement(window,OxO20bc[13],true);var btn_Actualsize=Window_GetElement(window,OxO20bc[14],true);var divpreview=Window_GetElement(window,OxO20bc[15],true);var TargetUrl=Window_GetElement(window,OxO20bc[16],true);var Button1=Window_GetElement(window,OxO20bc[17],true);var Button2=Window_GetElement(window,OxO20bc[18],true);var arg=Window_FindDialogArguments(window);var editor=arg[OxO20bc[19]];var editwin=arg[OxO20bc[20]];var editdoc=arg[OxO20bc[4]];do_preview();function do_preview(Ox177){var Ox1b;Ox1b=OxO20bc[7];if(Ox177!=OxO20bc[7]&&Ox177!=null){Ox1b=Ox177;} ;Ox1b=Ox1b+OxO20bc[21];var Ox180=TargetUrl[OxO20bc[6]];if(Ox180==OxO20bc[7]){return ;} ;var Ox29e=Ox180.substring(Ox180.lastIndexOf(OxO20bc[22])).toLowerCase();switch(Ox29e){case OxO20bc[23]:;case OxO20bc[24]:;case OxO20bc[25]:;case OxO20bc[26]:;case OxO20bc[29]:Ox1b=Ox1b+OxO20bc[27]+Ox180+OxO20bc[28];break ;;case OxO20bc[33]:var Ox29f=OxO20bc[30]+Ox180+OxO20bc[31];Ox1b=Ox1b+Ox29f+OxO20bc[32];break ;;case OxO20bc[34]:;case OxO20bc[35]:;case OxO20bc[36]:;case OxO20bc[37]:;case OxO20bc[40]:var Ox2a0=OxO20bc[38]+Ox180+OxO20bc[39];Ox1b=Ox1b+Ox2a0+OxO20bc[32];break ;;default:Ox1b=Ox1b+OxO20bc[41]+TargetUrl[OxO20bc[6]];break ;;} ;divpreview[OxO20bc[42]]=Ox1b;} ;function do_insert(){var Ox34c=arg[OxO20bc[43]];if(Ox34c){try{Ox34c[OxO20bc[6]]=TargetUrl[OxO20bc[6]];} catch(x){} ;} ;Window_SetDialogReturnValue(window,TargetUrl.value);Window_CloseDialog(window);} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;function Zoom_In(){if(divpreview[OxO20bc[45]][OxO20bc[44]]!=0){divpreview[OxO20bc[45]][OxO20bc[44]]*=1.2;} else {divpreview[OxO20bc[45]][OxO20bc[44]]=1.2;} ;} ;function Zoom_Out(){if(divpreview[OxO20bc[45]][OxO20bc[44]]!=0){divpreview[OxO20bc[45]][OxO20bc[44]]*=0.8;} else {divpreview[OxO20bc[45]][OxO20bc[44]]=0.8;} ;} ;function Actualsize(){divpreview[OxO20bc[45]][OxO20bc[44]]=1;do_preview();} ;function ResetFields(){TargetUrl[OxO20bc[6]]=OxO20bc[7];} ;if(!Browser_IsWinIE()){btn_zoom_in[OxO20bc[45]][OxO20bc[46]]=btn_zoom_out[OxO20bc[45]][OxO20bc[46]]=btn_Actualsize[OxO20bc[45]][OxO20bc[46]]=OxO20bc[47];} ;if(!Browser_IsWinIE()){btn_zoom_in[OxO20bc[45]][OxO20bc[46]]=btn_zoom_out[OxO20bc[45]][OxO20bc[46]]=btn_Actualsize[OxO20bc[45]][OxO20bc[46]]=OxO20bc[47];} else {} ;if(Browser_IsIE7()){var _dialogPromptID=null;function IEprompt(Ox10d,Ox10e,Ox10f){that=this;this[OxO20bc[48]]=function (Ox110){val=document.getElementById(OxO20bc[49])[OxO20bc[6]];_dialogPromptID[OxO20bc[45]][OxO20bc[46]]=OxO20bc[47];document.getElementById(OxO20bc[49])[OxO20bc[6]]=OxO20bc[7];if(Ox110){val=OxO20bc[7];} ;Ox10d(val);return false;} ;if(Ox10f==undefined){Ox10f=OxO20bc[7];} ;if(_dialogPromptID==null){var Ox111=document.getElementsByTagName(OxO20bc[50])[0];tnode=document.createElement(OxO20bc[51]);tnode[OxO20bc[52]]=OxO20bc[53];Ox111.appendChild(tnode);_dialogPromptID=document.getElementById(OxO20bc[53]);tnode=document.createElement(OxO20bc[51]);tnode[OxO20bc[52]]=OxO20bc[54];Ox111.appendChild(tnode);_dialogPromptID[OxO20bc[45]][OxO20bc[55]]=OxO20bc[56];_dialogPromptID[OxO20bc[45]][OxO20bc[57]]=OxO20bc[58];_dialogPromptID[OxO20bc[45]][OxO20bc[59]]=OxO20bc[60];_dialogPromptID[OxO20bc[45]][OxO20bc[61]]=OxO20bc[62];_dialogPromptID[OxO20bc[45]][OxO20bc[63]]=OxO20bc[64];} ;var Ox112=OxO20bc[65]+InputRequired+OxO20bc[66];Ox112+=OxO20bc[67]+Ox10e+OxO20bc[68];Ox112+=OxO20bc[69];Ox112+=OxO20bc[70]+Ox10f+OxO20bc[71];Ox112+=OxO20bc[72];Ox112+=OxO20bc[73]+OK+OxO20bc[74];Ox112+=OxO20bc[75];Ox112+=OxO20bc[76]+Cancel+OxO20bc[77];Ox112+=OxO20bc[78];_dialogPromptID[OxO20bc[42]]=Ox112;_dialogPromptID[OxO20bc[45]][OxO20bc[0]]=OxO20bc[79];_dialogPromptID[OxO20bc[45]][OxO20bc[80]]=parseInt((document[OxO20bc[50]][OxO20bc[81]]-315)/2)+OxO20bc[82];_dialogPromptID[OxO20bc[45]][OxO20bc[46]]=OxO20bc[83];var Ox113=document.getElementById(OxO20bc[49]);try{var Ox114=Ox113.createTextRange();Ox114.collapse(false);Ox114.select();} catch(x){Ox113.focus();} ;} ;} ;if(btn_CreateDir){btn_CreateDir[OxO20bc[84]]= new Function(OxO20bc[85]);} ;if(btn_zoom_in){btn_zoom_in[OxO20bc[84]]= new Function(OxO20bc[85]);} ;if(btn_zoom_out){btn_zoom_out[OxO20bc[84]]= new Function(OxO20bc[85]);} ;if(btn_Actualsize){btn_Actualsize[OxO20bc[84]]= new Function(OxO20bc[85]);} ;