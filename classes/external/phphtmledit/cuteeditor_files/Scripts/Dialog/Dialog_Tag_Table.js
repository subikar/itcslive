var OxO198e=["","removeNode","parentNode","firstChild","nodeName","TABLE","length","Can\x27t Get The Position ?","Map","RowCount","ColCount","rows","cells","Unknown Error , pos ",":"," already have cell","rowSpan","colSpan","Unknown Error , Unable to find bestpos","inp_cellspacing","inp_cellpadding","inp_id","inp_border","inp_bgcolor","inp_bordercolor","sel_rules","inp_collapse","inp_summary","btn_editcaption","btn_delcaption","btn_insthead","btn_instfoot","inp_class","inp_width","sel_width_unit","inp_height","sel_height_unit","sel_align","sel_textalign","sel_float","inp_tooltip","onclick","tHead","tFoot","caption","innerHTML","innerText","Unable to delete the caption. Please remove it in HTML source.","display","style","none","disabled","value","cellSpacing","cellPadding","id","border","borderColor","backgroundColor","bgColor","checked","borderCollapse","collapse","rules","summary","className","width","options","selectedIndex","height","align","styleFloat","cssFloat","textAlign","title","bordercolor","0","%","class","CaptionTable"];function ParseFloatToString(Ox1b){var Ox84=parseFloat(Ox1b);if(isNaN(Ox84)){return OxO198e[0];} ;return Ox84+OxO198e[0];} ;function Element_RemoveNode(element,Ox3ee){if(element[OxO198e[1]]){element.removeNode(Ox3ee);return ;} ;var p=element[OxO198e[2]];if(!p){return ;} ;if(Ox3ee){p.removeChild(element);return ;} ;while(true){var Ox135=element[OxO198e[3]];if(!Ox135){break ;} ;p.insertBefore(Ox135,element);} ;p.removeChild(element);} ;function Table_GetTable(Ox3a){for(;Ox3a!=null;Ox3a=Ox3a[OxO198e[2]]){if(Ox3a[OxO198e[4]]==OxO198e[5]){return Ox3a;} ;} ;return null;} ;function Table_GetCellPositionFromMap(Ox3e7,Ox3ec){for(var Oxbf=0;Oxbf<Ox3e7[OxO198e[6]];Oxbf++){var Ox3ea=Ox3e7[Oxbf];for(var Oxf1=0;Oxf1<Ox3ea[OxO198e[6]];Oxf1++){if(Ox3ea[Oxf1]==Ox3ec){return {rowIndex:Oxbf,cellIndex:Oxf1};} ;} ;} ;throw ( new Error(-1,OxO198e[7]));} ;function Table_GetCellMap(Ox3f2){return Table_CalculateTableInfo(Ox3f2)[OxO198e[8]];} ;function Table_GetRowCount(Ox3a){return Table_CalculateTableInfo(Ox3a)[OxO198e[9]];} ;function Table_GetColCount(Ox3a){return Table_CalculateTableInfo(Ox3a)[OxO198e[10]];} ;function Table_CalculateTableInfo(Ox3a){var Ox3f2=Table_GetTable(Ox3a);var Ox3fc=Ox3f2[OxO198e[11]];for(var Oxae=Ox3fc[OxO198e[6]]-1;Oxae>=0;Oxae--){var Ox3fd=Ox3fc.item(Oxae);if(Ox3fd[OxO198e[12]][OxO198e[6]]==0){Element_RemoveNode(Ox3fd,true);continue ;} ;} ;var Ox3fe=Ox3fc[OxO198e[6]];var Ox3ff=0;var Ox400= new Array(Ox3fc.length);for(var Ox401=0;Ox401<Ox3fe;Ox401++){Ox400[Ox401]=[];} ;function Ox402(Oxae,Ox135,Ox3ec){while(Oxae>=Ox3fe){Ox400[Ox3fe]=[];Ox3fe++;} ;var Ox403=Ox400[Oxae];if(Ox135>=Ox3ff){Ox3ff=Ox135+1;} ;if(Ox403[Ox135]!=null){throw ( new Error(-1,OxO198e[13]+Oxae+OxO198e[14]+Ox135+OxO198e[15]));} ;Ox403[Ox135]=Ox3ec;} ;function Ox404(Oxae,Ox135){var Ox403=Ox400[Oxae];if(Ox403){return Ox403[Ox135];} ;} ;for(var Ox401=0;Ox401<Ox3fc[OxO198e[6]];Ox401++){var Ox3fd=Ox3fc.item(Ox401);var Ox405=Ox3fd[OxO198e[12]];for(var Ox406=0;Ox406<Ox405[OxO198e[6]];Ox406++){var Ox3ec=Ox405.item(Ox406);var Ox407=Ox3ec[OxO198e[16]];var Ox408=Ox3ec[OxO198e[17]];var Ox403=Ox400[Ox401];var Ox409=-1;for(var Ox40a=0;Ox40a<Ox3ff+Ox408+1;Ox40a++){if(Ox407==1&&Ox408==1){if(Ox403[Ox40a]==null){Ox409=Ox40a;break ;} ;} else {var Ox40b=true;for(var Ox40c=0;Ox40c<Ox407;Ox40c++){for(var Ox40d=0;Ox40d<Ox408;Ox40d++){if(Ox404(Ox401+Ox40c,Ox40a+Ox40d)!=null){Ox40b=false;break ;} ;} ;} ;if(Ox40b){Ox409=Ox40a;break ;} ;} ;} ;if(Ox409==-1){throw ( new Error(-1,OxO198e[18]));} ;if(Ox407==1&&Ox408==1){Ox402(Ox401,Ox409,Ox3ec);} else {for(var Ox40c=0;Ox40c<Ox407;Ox40c++){for(var Ox40d=0;Ox40d<Ox408;Ox40d++){Ox402(Ox401+Ox40c,Ox409+Ox40d,Ox3ec);} ;} ;} ;} ;} ;var Ox27={};Ox27[OxO198e[9]]=Ox3fe;Ox27[OxO198e[10]]=Ox3ff;Ox27[OxO198e[8]]=Ox400;for(var Oxae=0;Oxae<Ox3fe;Oxae++){var Ox403=Ox400[Oxae];for(var Ox135=0;Ox135<Ox3ff;Ox135++){} ;} ;return Ox27;} ;var inp_cellspacing=Window_GetElement(window,OxO198e[19],true);var inp_cellpadding=Window_GetElement(window,OxO198e[20],true);var inp_id=Window_GetElement(window,OxO198e[21],true);var inp_border=Window_GetElement(window,OxO198e[22],true);var inp_bgcolor=Window_GetElement(window,OxO198e[23],true);var inp_bordercolor=Window_GetElement(window,OxO198e[24],true);var sel_rules=Window_GetElement(window,OxO198e[25],true);var inp_collapse=Window_GetElement(window,OxO198e[26],true);var inp_summary=Window_GetElement(window,OxO198e[27],true);var btn_editcaption=Window_GetElement(window,OxO198e[28],true);var btn_delcaption=Window_GetElement(window,OxO198e[29],true);var btn_insthead=Window_GetElement(window,OxO198e[30],true);var btn_instfoot=Window_GetElement(window,OxO198e[31],true);var inp_class=Window_GetElement(window,OxO198e[32],true);var inp_width=Window_GetElement(window,OxO198e[33],true);var sel_width_unit=Window_GetElement(window,OxO198e[34],true);var inp_height=Window_GetElement(window,OxO198e[35],true);var sel_height_unit=Window_GetElement(window,OxO198e[36],true);var sel_align=Window_GetElement(window,OxO198e[37],true);var sel_textalign=Window_GetElement(window,OxO198e[38],true);var sel_float=Window_GetElement(window,OxO198e[39],true);var inp_tooltip=Window_GetElement(window,OxO198e[40],true);function insertOneRow(Ox501,Ox2e7){var Ox3fd=Ox501.insertRow(-1);for(var i=0;i<Ox2e7;i++){Ox3fd.insertCell();} ;} ;btn_insthead[OxO198e[41]]=function btn_insthead_onclick(){if(element[OxO198e[42]]){element.deleteTHead();} else {var Ox503=Table_GetColCount(element);var Ox504=element.createTHead();insertOneRow(Ox504,Ox503);} ;} ;btn_instfoot[OxO198e[41]]=function btn_instfoot_onclick(){if(element[OxO198e[43]]){element.deleteTFoot();} else {var Ox503=Table_GetColCount(element);var Ox506=element.createTFoot();insertOneRow(Ox506,Ox503);} ;} ;btn_editcaption[OxO198e[41]]=function btn_editcaption_onclick(){var Ox508=element[OxO198e[44]];if(Ox508!=null){var Ox177=editor.EditInWindow(Ox508.innerHTML,window);if(Ox177!=null&&Ox177!==false){Ox508[OxO198e[45]]=Ox177;} ;} else {var Ox508=element.createCaption();if(Browser_IsGecko()){Ox508[OxO198e[45]]=Caption;} else {Ox508[OxO198e[46]]=Caption;} ;} ;} ;btn_delcaption[OxO198e[41]]=function btn_delcaption_onclick(){if(element[OxO198e[44]]!=null){alert(OxO198e[47]);} ;} ;UpdateState=function UpdateState_Table(){if(Browser_IsGecko()){btn_insthead[OxO198e[45]]=element[OxO198e[42]]?Delete:Insert;btn_instfoot[OxO198e[45]]=element[OxO198e[43]]?Delete:Insert;} else {btn_insthead[OxO198e[46]]=element[OxO198e[42]]?Delete:Insert;btn_instfoot[OxO198e[46]]=element[OxO198e[43]]?Delete:Insert;} ;if(element[OxO198e[44]]!=null){if(Browser_IsGecko()){btn_editcaption[OxO198e[45]]=Edit;} else {btn_editcaption[OxO198e[46]]=Edit;} ;btn_editcaption[OxO198e[49]][OxO198e[48]]=OxO198e[50];btn_delcaption[OxO198e[51]]=false;} else {if(Browser_IsGecko()){btn_editcaption[OxO198e[45]]=Insert;} else {btn_editcaption[OxO198e[46]]=Insert;} ;btn_delcaption[OxO198e[51]]=true;} ;} ;var t_inp_width=OxO198e[0];var t_inp_height=OxO198e[0];SyncToView=function SyncToView_Table(){inp_cellspacing[OxO198e[52]]=element.getAttribute(OxO198e[53])||OxO198e[0];inp_cellpadding[OxO198e[52]]=element.getAttribute(OxO198e[54])||OxO198e[0];inp_id[OxO198e[52]]=element.getAttribute(OxO198e[55])||OxO198e[0];inp_border[OxO198e[52]]=element.getAttribute(OxO198e[56])||OxO198e[0];inp_bordercolor[OxO198e[52]]=element.getAttribute(OxO198e[57])||OxO198e[0];inp_bordercolor[OxO198e[49]][OxO198e[58]]=inp_bordercolor[OxO198e[52]];inp_bgcolor[OxO198e[52]]=element.getAttribute(OxO198e[59])||element[OxO198e[49]][OxO198e[58]]||OxO198e[0];inp_bgcolor[OxO198e[49]][OxO198e[58]]=inp_bgcolor[OxO198e[52]];inp_collapse[OxO198e[60]]=element[OxO198e[49]][OxO198e[61]]==OxO198e[62];sel_rules[OxO198e[52]]=element.getAttribute(OxO198e[63])||OxO198e[0];inp_summary[OxO198e[52]]=element.getAttribute(OxO198e[64])||OxO198e[0];inp_class[OxO198e[52]]=element[OxO198e[65]];if(element.getAttribute(OxO198e[66])){t_inp_width=element.getAttribute(OxO198e[66]);} else {if(element[OxO198e[49]][OxO198e[66]]){t_inp_width=element[OxO198e[49]][OxO198e[66]];} ;} ;if(t_inp_width){inp_width[OxO198e[52]]=ParseFloatToString(t_inp_width);for(var i=0;i<sel_width_unit[OxO198e[67]][OxO198e[6]];i++){var Ox2b=sel_width_unit[OxO198e[67]][i][OxO198e[52]];if(Ox2b&&t_inp_width.indexOf(Ox2b)!=-1){sel_width_unit[OxO198e[68]]=i;break ;} ;} ;} ;if(element.getAttribute(OxO198e[69])){t_inp_height=element.getAttribute(OxO198e[69]);} else {if(element[OxO198e[49]][OxO198e[69]]){t_inp_height=element[OxO198e[49]][OxO198e[69]];} ;} ;if(t_inp_height){inp_height[OxO198e[52]]=ParseFloatToString(t_inp_height);for(var i=0;i<sel_height_unit[OxO198e[67]][OxO198e[6]];i++){var Ox2b=sel_height_unit[OxO198e[67]][i][OxO198e[52]];if(Ox2b&&t_inp_height.indexOf(Ox2b)!=-1){sel_height_unit[OxO198e[68]]=i;break ;} ;} ;} ;sel_align[OxO198e[52]]=element[OxO198e[70]];if(Browser_IsWinIE()){sel_float[OxO198e[52]]=element[OxO198e[49]][OxO198e[71]];} else {sel_float[OxO198e[52]]=element[OxO198e[49]][OxO198e[72]];} ;sel_textalign[OxO198e[52]]=element[OxO198e[49]][OxO198e[73]];inp_tooltip[OxO198e[52]]=element[OxO198e[74]];} ;SyncTo=function SyncTo_Table(element){if(Browser_IsWinIE()){element[OxO198e[57]]=inp_bordercolor[OxO198e[52]];} else {element.setAttribute(OxO198e[75],inp_bordercolor.value);} ;if(inp_bgcolor[OxO198e[52]]){if(element[OxO198e[49]][OxO198e[58]]){element[OxO198e[49]][OxO198e[58]]=inp_bgcolor[OxO198e[52]];} else {element[OxO198e[59]]=inp_bgcolor[OxO198e[52]];} ;} else {element.removeAttribute(OxO198e[59]);} ;element[OxO198e[49]][OxO198e[61]]=inp_collapse[OxO198e[60]]?OxO198e[62]:OxO198e[0];element[OxO198e[63]]=sel_rules[OxO198e[52]]||OxO198e[0];element[OxO198e[64]]=inp_summary[OxO198e[52]];element[OxO198e[65]]=inp_class[OxO198e[52]];element[OxO198e[53]]=inp_cellspacing[OxO198e[52]];element[OxO198e[54]]=inp_cellpadding[OxO198e[52]];var Ox276=/[^a-z\d]/i;if(Ox276.test(inp_id.value)){alert(ValidID);return ;} ;element[OxO198e[55]]=inp_id[OxO198e[52]];if(inp_border[OxO198e[52]]==OxO198e[0]){element[OxO198e[56]]=OxO198e[76];} else {element[OxO198e[56]]=inp_border[OxO198e[52]];} ;if(inp_width[OxO198e[52]]==OxO198e[0]){element.removeAttribute(OxO198e[66]);element[OxO198e[49]][OxO198e[66]]=OxO198e[0];} else {try{t_inp_width=inp_width[OxO198e[52]];if(sel_width_unit[OxO198e[52]]==OxO198e[77]){t_inp_width=inp_width[OxO198e[52]]+sel_width_unit[OxO198e[52]];} ;if(element[OxO198e[49]][OxO198e[66]]&&element[OxO198e[66]]){element[OxO198e[49]][OxO198e[66]]=t_inp_width;element[OxO198e[66]]=t_inp_width;} else {if(element[OxO198e[49]][OxO198e[66]]){element[OxO198e[49]][OxO198e[66]]=t_inp_width;} else {element[OxO198e[66]]=t_inp_width;} ;} ;} catch(x){} ;} ;if(inp_height[OxO198e[52]]==OxO198e[0]){element.removeAttribute(OxO198e[69]);element[OxO198e[49]][OxO198e[69]]=OxO198e[0];} else {try{t_inp_height=inp_height[OxO198e[52]];if(sel_height_unit[OxO198e[52]]==OxO198e[77]){t_inp_height=inp_height[OxO198e[52]]+sel_height_unit[OxO198e[52]];} ;t_inp_height=inp_height[OxO198e[52]]+sel_height_unit[OxO198e[52]];if(element[OxO198e[49]][OxO198e[69]]&&element[OxO198e[69]]){element[OxO198e[49]][OxO198e[69]]=t_inp_height;element[OxO198e[69]]=t_inp_height;} else {if(element[OxO198e[49]][OxO198e[69]]){element[OxO198e[49]][OxO198e[69]]=t_inp_height;} else {element[OxO198e[69]]=t_inp_height;} ;} ;} catch(x){} ;} ;element[OxO198e[70]]=sel_align[OxO198e[52]];if(Browser_IsWinIE()){element[OxO198e[49]][OxO198e[71]]=sel_float[OxO198e[52]];} else {element[OxO198e[49]][OxO198e[72]]=sel_float[OxO198e[52]];} ;element[OxO198e[49]][OxO198e[73]]=sel_textalign[OxO198e[52]];element[OxO198e[74]]=inp_tooltip[OxO198e[52]];if(element[OxO198e[74]]==OxO198e[0]){element.removeAttribute(OxO198e[74]);} ;if(element[OxO198e[64]]==OxO198e[0]){element.removeAttribute(OxO198e[64]);} ;if(element[OxO198e[65]]==OxO198e[0]){element.removeAttribute(OxO198e[65]);} ;if(element[OxO198e[65]]==OxO198e[0]){element.removeAttribute(OxO198e[78]);} ;if(element[OxO198e[55]]==OxO198e[0]){element.removeAttribute(OxO198e[55]);} ;if(element[OxO198e[70]]==OxO198e[0]){element.removeAttribute(OxO198e[70]);} ;if(element[OxO198e[63]]==OxO198e[0]){element.removeAttribute(OxO198e[63]);} ;} ;inp_bgcolor[OxO198e[41]]=function inp_bgcolor_onclick(){SelectColor(inp_bgcolor);} ;inp_bordercolor[OxO198e[41]]=function inp_bordercolor_onclick(){SelectColor(inp_bordercolor);} ;if(!Browser_IsWinIE()){Window_GetElement(window,OxO198e[79],true)[OxO198e[49]][OxO198e[48]]=OxO198e[50];} ;