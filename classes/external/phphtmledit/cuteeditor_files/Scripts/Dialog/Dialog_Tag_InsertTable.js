var OxOf77f=["rowSpan","removeNode","parentNode","firstChild","colSpan","nodeName","TABLE","Map","rowIndex","rows","length","cells","cellIndex","innerHTML","cell","\x26nbsp;","Can\x27t Get The Position ?","RowCount","ColCount","Unknown Error , pos ",":"," already have cell","Unknown Error , Unable to find bestpos","tbody","uniqueID","richDropDown","list_Templates","subcolumns","addcolumns","subcolspan","addcolspan","btn_row_dialog","btn_cell_dialog","inp_cell_width","inp_cell_height","btn_cell_editcell","tabledesign","subrows","addrows","subrowspan","addrowspan","display","style","none","disabled","value","width","height","ValidNumber","","\x3Ctable\x3E\x3Ctr\x3E\x3Ctd height=\x2224\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable\x3E\x3Ctr\x3E\x3Ctd\x3E\x3C/td\x3E\x3Ctd\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable\x3E\x3Ctr\x3E\x3Ctd\x3E\x3C/td\x3E\x3Ctd\x3E\x3C/td\x3E\x3Ctd\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable border=\x220\x22 cellpadding=\x220\x22 cellspacing=\x220\x22\x3E\x3Ctr\x3E\x3Ctd valign=\x22top\x22 colspan=\x222\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22 rowspan=\x222\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22 rowspan=\x222\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable border=\x220\x22 cellpadding=\x220\x22 cellspacing=\x220\x22\x3E\x3Ctr\x3E\x3Ctd valign=\x22top\x22 colspan=\x223\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22 colspan=\x223\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","DIV","onclick","bgColor","#d4d0c8","onmouseover","onmouseout","ondblclick","contains","ToggleBorder","backgroundColor","highlight","cssText","runtimeStyle","background-color:gray","onload","body","document","csstext","font:normal 11px Tahoma;background-color:windowtext;","isOpen"];function Table_GetCellFromMap(Ox3e7,Ox3e8,Ox3e9){var Ox3ea=Ox3e7[Ox3e8];if(Ox3ea){return Ox3ea[Ox3e9];} ;} ;function Table_CanSubRowSpan(Ox3ec){return Ox3ec[OxOf77f[0]]>1;} ;function Element_RemoveNode(element,Ox3ee){if(element[OxOf77f[1]]){element.removeNode(Ox3ee);return ;} ;var p=element[OxOf77f[2]];if(!p){return ;} ;if(Ox3ee){p.removeChild(element);return ;} ;while(true){var Ox135=element[OxOf77f[3]];if(!Ox135){break ;} ;p.insertBefore(Ox135,element);} ;p.removeChild(element);} ;function Table_CanSubColSpan(Ox3ec){return Ox3ec[OxOf77f[4]]>1;} ;function Table_GetTable(Ox3a){for(;Ox3a!=null;Ox3a=Ox3a[OxOf77f[2]]){if(Ox3a[OxOf77f[5]]==OxOf77f[6]){return Ox3a;} ;} ;return null;} ;function Table_SubRowSpan(Ox3ec){var Ox3f2=Table_GetTable(Ox3ec);var Ox118=Table_CalculateTableInfo(Ox3f2);var Ox3e7=Ox118[OxOf77f[7]];var Ox34=Table_GetCellPositionFromMap(Ox3e7,Ox3ec);var Ox3f3=Ox3f2[OxOf77f[9]].item(Ox3ec[OxOf77f[2]][OxOf77f[8]]+Ox3ec[OxOf77f[0]]-1);var Ox3f4=0;for(var i=0;i<Ox3f3[OxOf77f[11]][OxOf77f[10]];i++){var Ox3f5=Ox3f3[OxOf77f[11]].item(i);var Ox3f6=Table_GetCellPositionFromMap(Ox3e7,Ox3f5);if(Ox3f6[OxOf77f[12]]<Ox34[OxOf77f[12]]){Ox3f4=i+1;} ;} ;for(var i=0;i<Ox3ec[OxOf77f[4]];i++){var Ox135=Ox3f3.insertCell(Ox3f4);if(Browser_IsOpera()){Ox135[OxOf77f[13]]=OxOf77f[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox135[OxOf77f[13]]=OxOf77f[15];} ;} ;} ;Ox3ec[OxOf77f[0]]--;} ;function Table_GetCellPositionFromMap(Ox3e7,Ox3ec){for(var Oxbf=0;Oxbf<Ox3e7[OxOf77f[10]];Oxbf++){var Ox3ea=Ox3e7[Oxbf];for(var Oxf1=0;Oxf1<Ox3ea[OxOf77f[10]];Oxf1++){if(Ox3ea[Oxf1]==Ox3ec){return {rowIndex:Oxbf,cellIndex:Oxf1};} ;} ;} ;throw ( new Error(-1,OxOf77f[16]));} ;function Table_GetCellMap(Ox3f2){return Table_CalculateTableInfo(Ox3f2)[OxOf77f[7]];} ;function Table_GetRowCount(Ox3a){return Table_CalculateTableInfo(Ox3a)[OxOf77f[17]];} ;function Table_GetColCount(Ox3a){return Table_CalculateTableInfo(Ox3a)[OxOf77f[18]];} ;function Table_CalculateTableInfo(Ox3a){var Ox3f2=Table_GetTable(Ox3a);var Ox3fc=Ox3f2[OxOf77f[9]];for(var Oxae=Ox3fc[OxOf77f[10]]-1;Oxae>=0;Oxae--){var Ox3fd=Ox3fc.item(Oxae);if(Ox3fd[OxOf77f[11]][OxOf77f[10]]==0){Element_RemoveNode(Ox3fd,true);continue ;} ;} ;var Ox3fe=Ox3fc[OxOf77f[10]];var Ox3ff=0;var Ox400= new Array(Ox3fc.length);for(var Ox401=0;Ox401<Ox3fe;Ox401++){Ox400[Ox401]=[];} ;function Ox402(Oxae,Ox135,Ox3ec){while(Oxae>=Ox3fe){Ox400[Ox3fe]=[];Ox3fe++;} ;var Ox403=Ox400[Oxae];if(Ox135>=Ox3ff){Ox3ff=Ox135+1;} ;if(Ox403[Ox135]!=null){throw ( new Error(-1,OxOf77f[19]+Oxae+OxOf77f[20]+Ox135+OxOf77f[21]));} ;Ox403[Ox135]=Ox3ec;} ;function Ox404(Oxae,Ox135){var Ox403=Ox400[Oxae];if(Ox403){return Ox403[Ox135];} ;} ;for(var Ox401=0;Ox401<Ox3fc[OxOf77f[10]];Ox401++){var Ox3fd=Ox3fc.item(Ox401);var Ox405=Ox3fd[OxOf77f[11]];for(var Ox406=0;Ox406<Ox405[OxOf77f[10]];Ox406++){var Ox3ec=Ox405.item(Ox406);var Ox407=Ox3ec[OxOf77f[0]];var Ox408=Ox3ec[OxOf77f[4]];var Ox403=Ox400[Ox401];var Ox409=-1;for(var Ox40a=0;Ox40a<Ox3ff+Ox408+1;Ox40a++){if(Ox407==1&&Ox408==1){if(Ox403[Ox40a]==null){Ox409=Ox40a;break ;} ;} else {var Ox40b=true;for(var Ox40c=0;Ox40c<Ox407;Ox40c++){for(var Ox40d=0;Ox40d<Ox408;Ox40d++){if(Ox404(Ox401+Ox40c,Ox40a+Ox40d)!=null){Ox40b=false;break ;} ;} ;} ;if(Ox40b){Ox409=Ox40a;break ;} ;} ;} ;if(Ox409==-1){throw ( new Error(-1,OxOf77f[22]));} ;if(Ox407==1&&Ox408==1){Ox402(Ox401,Ox409,Ox3ec);} else {for(var Ox40c=0;Ox40c<Ox407;Ox40c++){for(var Ox40d=0;Ox40d<Ox408;Ox40d++){Ox402(Ox401+Ox40c,Ox409+Ox40d,Ox3ec);} ;} ;} ;} ;} ;var Ox27={};Ox27[OxOf77f[17]]=Ox3fe;Ox27[OxOf77f[18]]=Ox3ff;Ox27[OxOf77f[7]]=Ox400;for(var Oxae=0;Oxae<Ox3fe;Oxae++){var Ox403=Ox400[Oxae];for(var Ox135=0;Ox135<Ox3ff;Ox135++){} ;} ;return Ox27;} ;function Table_SubColSpan(Ox3ec){var Ox3f2=Table_GetTable(Ox3ec);Ox3ec[OxOf77f[2]].insertCell(Ox3ec[OxOf77f[12]]+1)[OxOf77f[0]]=Ox3ec[OxOf77f[0]];Ox3ec[OxOf77f[4]]--;} ;function Table_CanAddRowSpan(Ox3ec){var Ox3f2=Table_GetTable(Ox3ec);var Ox118=Table_CalculateTableInfo(Ox3f2);var Ox3e7=Ox118[OxOf77f[7]];var Ox34=Table_GetCellPositionFromMap(Ox3e7,Ox3ec);var Ox410=0;for(var Ox135=0;Ox135<Ox3ec[OxOf77f[4]];Ox135++){var Ox411=Table_GetCellFromMap(Ox3e7,Ox34[OxOf77f[8]]+Ox3ec[OxOf77f[0]],Ox34[OxOf77f[12]]+Ox135);if(Ox411==null){return false;} ;if(Ox410!=0&&Ox410!=Ox411[OxOf77f[0]]){return false;} ;Ox410=Ox411[OxOf77f[0]];var Ox412=Table_GetCellPositionFromMap(Ox3e7,Ox411);if(Ox412[OxOf77f[12]]<Ox34[OxOf77f[12]]){return false;} ;if(Ox412[OxOf77f[12]]+Ox411[OxOf77f[4]]>Ox34[OxOf77f[12]]+Ox3ec[OxOf77f[4]]){return false;} ;} ;return true;} ;function Table_AddRow(Ox3ec){var Ox3f2=Table_GetTable(Ox3ec);var Ox118=Table_CalculateTableInfo(Ox3f2);var Ox3e7=Ox118[OxOf77f[7]];var Ox3ff=Ox118[OxOf77f[18]];var Ox3fe=Ox118[OxOf77f[17]];var Ox3fd;if(!Browser_IsSafari()){Ox3fd=Ox3f2.insertRow(-1);} else {var Ox111=document.createElement(OxOf77f[23]);Ox3f2.appendChild(Ox111);Ox3fd=Ox111.insertRow(-1);} ;for(var i=0;i<Ox3ff;i++){var Ox135=Ox3fd.insertCell(-1);if(Browser_IsOpera()){Ox135[OxOf77f[13]]=OxOf77f[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox135[OxOf77f[13]]=OxOf77f[15];} ;} ;} ;} ;function Table_AddCol(Ox3ec){var Ox3f2=Table_GetTable(Ox3ec);for(var Oxae=0;Oxae<Ox3f2[OxOf77f[9]][OxOf77f[10]];Oxae++){var Ox3fd=Ox3f2[OxOf77f[9]].item(Oxae);var Ox135=Ox3fd.insertCell(-1);if(Browser_IsOpera()){Ox135[OxOf77f[13]]=OxOf77f[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox135[OxOf77f[13]]=OxOf77f[15];} ;} ;} ;} ;function Table_CleanUpTableInfo(Ox3f2,Ox118){var Ox3fc=Ox3f2[OxOf77f[9]];for(var Oxae=Ox3fc[OxOf77f[10]]-1;Oxae>=0;Oxae--){var Ox3fd=Ox3fc.item(Oxae);if(Ox3fd[OxOf77f[11]][OxOf77f[10]]==0){Element_RemoveNode(Ox3fd,true);continue ;} ;} ;var Ox3e7=Ox118[OxOf77f[7]];var Ox3ff=Ox118[OxOf77f[18]];var Ox3fe=Ox118[OxOf77f[17]];for(var Ox401=1;Ox401<Ox3fe;Ox401++){var Ox416=true;for(var Ox406=0;Ox406<Ox3ff;Ox406++){if(Table_GetCellFromMap(Ox3e7,Ox401-1,Ox406)!=Table_GetCellFromMap(Ox3e7,Ox401,Ox406)){Ox416=false;break ;} ;} ;if(Ox416){for(var Ox406=0;Ox406<Ox3ff;Ox406++){var Ox3ec=Table_GetCellFromMap(Ox3e7,Ox401,Ox406);if(Ox3ec){if(Ox3ec[OxOf77f[0]]>1){Ox3ec[OxOf77f[0]]=Ox3ec[OxOf77f[0]]-1;} ;Ox406+=Ox3ec[OxOf77f[4]]-1;} ;} ;} ;} ;for(var Ox406=1;Ox406<Ox3ff;Ox406++){var Ox416=true;for(var Ox401=0;Ox401<Ox3fe;Ox401++){if(Table_GetCellFromMap(Ox3e7,Ox401,Ox406-1)!=Table_GetCellFromMap(Ox3e7,Ox401,Ox406)){Ox416=false;break ;} ;} ;if(Ox416){for(var Ox401=0;Ox401<Ox3fe;Ox401++){var Ox3ec=Table_GetCellFromMap(Ox3e7,Ox401,Ox406);if(Ox3ec){if(Ox3ec[OxOf77f[4]]>1){Ox3ec[OxOf77f[4]]=Ox3ec[OxOf77f[4]]-1;} ;Ox401+=Ox3ec[OxOf77f[0]]-1;} ;} ;} ;} ;} ;function Table_SubRow(Ox3ec){var Ox3f2=Table_GetTable(Ox3ec);var Ox118=Table_CalculateTableInfo(Ox3f2);var Ox3e7=Ox118[OxOf77f[7]];var Ox3ff=Ox118[OxOf77f[18]];var Ox3fe=Ox118[OxOf77f[17]];if(Ox3fe==0){return ;} ;var Ox418={};var Ox401=Ox3fe-1;for(var Ox406=0;Ox406<Ox3ff;Ox406++){var Ox3ec=Table_GetCellFromMap(Ox3e7,Ox401,Ox406);if(Ox3ec){if(Ox418[Ox3ec[OxOf77f[24]]]){continue ;} ;Ox418[Ox3ec[OxOf77f[24]]]=true;if(Ox3ec[OxOf77f[0]]==1){Element_RemoveNode(Ox3ec,true);} else {Ox3ec[OxOf77f[0]]=Ox3ec[OxOf77f[0]]-1;} ;} ;} ;Ox118[OxOf77f[17]]--;Table_CleanUpTableInfo(Ox3f2,Ox118);} ;function Table_CanAddColSpan(Ox3ec){var Ox3f2=Table_GetTable(Ox3ec);var Ox118=Table_CalculateTableInfo(Ox3f2);var Ox3e7=Ox118[OxOf77f[7]];var Ox34=Table_GetCellPositionFromMap(Ox3e7,Ox3ec);var Ox41a=0;for(var Oxae=0;Oxae<Ox3ec[OxOf77f[0]];Oxae++){var Ox411=Table_GetCellFromMap(Ox3e7,Ox34[OxOf77f[8]]+Oxae,Ox34[OxOf77f[12]]+Ox3ec[OxOf77f[4]]);if(Ox411==null){return false;} ;if(Ox41a!=0&&Ox41a!=Ox411[OxOf77f[4]]){return false;} ;Ox41a=Ox411[OxOf77f[4]];var Ox412=Table_GetCellPositionFromMap(Ox3e7,Ox411);if(Ox412[OxOf77f[8]]<Ox34[OxOf77f[8]]){return false;} ;if(Ox412[OxOf77f[8]]+Ox411[OxOf77f[0]]>Ox34[OxOf77f[8]]+Ox3ec[OxOf77f[0]]){return false;} ;} ;return true;} ;function Table_AddRowSpan(Ox3ec){var Ox3f2=Table_GetTable(Ox3ec);var Ox118=Table_CalculateTableInfo(Ox3f2);var Ox3e7=Ox118[OxOf77f[7]];var Ox34=Table_GetCellPositionFromMap(Ox3e7,Ox3ec);var Ox410=0;for(var Ox135=0;Ox135<Ox3ec[OxOf77f[4]];Ox135++){var Ox411=Table_GetCellFromMap(Ox3e7,Ox34[OxOf77f[8]]+Ox3ec[OxOf77f[0]],Ox34[OxOf77f[12]]+Ox135);if(Ox410==0){Ox410=Ox411[OxOf77f[0]];} ;Element_RemoveNode(Ox411,true);} ;Ox3ec[OxOf77f[0]]=Ox3ec[OxOf77f[0]]+Ox410;for(var Ox401=0;Ox401<Ox3ec[OxOf77f[0]];Ox401++){for(var Ox406=0;Ox406<Ox3ec[OxOf77f[4]];Ox406++){Ox118[OxOf77f[7]][Ox34[OxOf77f[8]]+Ox401][Ox34[OxOf77f[12]]+Ox406]=Ox3ec;} ;} ;Table_CleanUpTableInfo(Ox3f2,Ox118);} ;function Table_AddColSpan(Ox3ec){var Ox3f2=Table_GetTable(Ox3ec);var Ox118=Table_CalculateTableInfo(Ox3f2);var Ox3e7=Ox118[OxOf77f[7]];var Ox34=Table_GetCellPositionFromMap(Ox3e7,Ox3ec);var Ox41a=0;for(var Oxae=0;Oxae<Ox3ec[OxOf77f[0]];Oxae++){var Ox411=Table_GetCellFromMap(Ox3e7,Ox34[OxOf77f[8]]+Oxae,Ox34[OxOf77f[12]]+Ox3ec[OxOf77f[4]]);if(Ox41a==0){Ox41a=Ox411[OxOf77f[4]];} ;Element_RemoveNode(Ox411,true);} ;Ox3ec[OxOf77f[4]]+=Ox41a;for(var Ox401=0;Ox401<Ox3ec[OxOf77f[0]];Ox401++){for(var Ox406=0;Ox406<Ox3ec[OxOf77f[4]];Ox406++){Ox118[OxOf77f[7]][Ox34[OxOf77f[8]]+Ox401][Ox34[OxOf77f[12]]+Ox406]=Ox3ec;} ;} ;Table_CleanUpTableInfo(Ox3f2,Ox118);} ;function Table_SubCol(Ox3ec){var Ox3f2=Table_GetTable(Ox3ec);var Ox118=Table_CalculateTableInfo(Ox3f2);var Ox3e7=Ox118[OxOf77f[7]];var Ox3ff=Ox118[OxOf77f[18]];var Ox3fe=Ox118[OxOf77f[17]];if(Ox3fe==0){return ;} ;var Ox418={};var Ox406=Ox3ff-1;for(var Ox401=0;Ox401<Ox3fe;Ox401++){var Ox3ec=Table_GetCellFromMap(Ox3e7,Ox401,Ox406);if(Ox418[Ox3ec[OxOf77f[24]]]){continue ;} ;Ox418[Ox3ec[OxOf77f[24]]]=true;if(Ox3ec[OxOf77f[4]]==1){Element_RemoveNode(Ox3ec,true);} else {Ox3ec[OxOf77f[4]]=Ox3ec[OxOf77f[4]]-1;} ;} ;Ox118[OxOf77f[18]]--;Table_CleanUpTableInfo(Ox3f2,Ox118);} ;var richDropDown=Window_GetElement(window,OxOf77f[25],true);var list_Templates=Window_GetElement(window,OxOf77f[26],true);var subcolumns=Window_GetElement(window,OxOf77f[27],true);var addcolumns=Window_GetElement(window,OxOf77f[28],true);var subcolspan=Window_GetElement(window,OxOf77f[29],true);var addcolspan=Window_GetElement(window,OxOf77f[30],true);var btn_row_dialog=Window_GetElement(window,OxOf77f[31],true);var btn_cell_dialog=Window_GetElement(window,OxOf77f[32],true);var inp_cell_width=Window_GetElement(window,OxOf77f[33],true);var inp_cell_height=Window_GetElement(window,OxOf77f[34],true);var btn_cell_editcell=Window_GetElement(window,OxOf77f[35],true);var tabledesign=Window_GetElement(window,OxOf77f[36],true);var subrows=Window_GetElement(window,OxOf77f[37],true);var addrows=Window_GetElement(window,OxOf77f[38],true);var subrowspan=Window_GetElement(window,OxOf77f[39],true);var addrowspan=Window_GetElement(window,OxOf77f[40],true);btn_cell_editcell[OxOf77f[42]][OxOf77f[41]]=OxOf77f[43];UpdateState=function UpdateState_InsertTable(){btn_cell_editcell[OxOf77f[44]]=btn_row_dialog[OxOf77f[44]]=btn_cell_dialog[OxOf77f[44]]=GetElementCell()==null;} ;SyncToView=function SyncToView_InsertTable(){var Ox430=GetElementCell();if(Ox430){inp_cell_width[OxOf77f[45]]=Ox430[OxOf77f[46]];inp_cell_height[OxOf77f[45]]=Ox430[OxOf77f[47]];} ;} ;SyncTo=function SyncTo_InsertTable(element){var Ox430=GetElementCell();if(Ox430){try{Ox430[OxOf77f[46]]=inp_cell_width[OxOf77f[45]];Ox430[OxOf77f[47]]=inp_cell_height[OxOf77f[45]];} catch(er){alert(CE_GetStr(OxOf77f[48]));} ;} ;} ;function selectTemplate(Oxaa){var Ox433=OxOf77f[49];switch(Oxaa){case 1:Ox433=OxOf77f[50];break ;;case 2:Ox433=OxOf77f[51];break ;;case 3:Ox433=OxOf77f[52];break ;;case 4:Ox433=OxOf77f[53];Ox433=Ox433+OxOf77f[54];Ox433=Ox433+OxOf77f[55];break ;;case 5:Ox433=OxOf77f[53];Ox433=Ox433+OxOf77f[56];break ;;case 6:Ox433=OxOf77f[57];Ox433=Ox433+OxOf77f[58];Ox433=Ox433+OxOf77f[59];break ;;default:break ;;} ;try{var Ox2c=document.createElement(OxOf77f[60]);Ox2c[OxOf77f[13]]=Ox433;var Ox3f2=Ox2c.children(0);ApplyTable(Ox3f2,element);ApplyTable(Ox3f2,tabledesign);HandleTableChanged();hidePopup();} catch(x){} ;} ;subcolumns[OxOf77f[61]]=function subcolumns_onclick(){Table_SubCol(GetElementCell());Table_SubCol(currentcell);HandleTableChanged();} ;addcolumns[OxOf77f[61]]=function addcolumns_onclick(){Table_AddCol(GetElementCell());Table_AddCol(currentcell);HandleTableChanged();} ;subrows[OxOf77f[61]]=function subrows_onclick(){Table_SubRow(GetElementCell());Table_SubRow(currentcell);HandleTableChanged();} ;addrows[OxOf77f[61]]=function addrows_onclick(){Table_AddRow(currentcell);Table_AddRow(GetElementCell());HandleTableChanged();} ;subcolspan[OxOf77f[61]]=function subcolspan_onclick(){Table_SubColSpan(GetElementCell());Table_SubColSpan(currentcell);HandleTableChanged();} ;addcolspan[OxOf77f[61]]=function addcolspan_onclick(){Table_AddColSpan(GetElementCell());Table_AddColSpan(currentcell);HandleTableChanged();} ;subrowspan[OxOf77f[61]]=function subrowspan_onclick(){Table_SubRowSpan(GetElementCell());Table_SubRowSpan(currentcell);HandleTableChanged();} ;addrowspan[OxOf77f[61]]=function addrowspan_onclick(){Table_AddRowSpan(GetElementCell());Table_AddRowSpan(currentcell);HandleTableChanged();} ;function InitDesignTableCells(){for(var Oxae=0;Oxae<tabledesign[OxOf77f[9]][OxOf77f[10]];Oxae++){var Ox3fd=tabledesign[OxOf77f[9]][Oxae];for(var Ox135=0;Ox135<Ox3fd[OxOf77f[11]][OxOf77f[10]];Ox135++){var Ox3ec=Ox3fd[OxOf77f[11]][Ox135];Ox3ec.removeAttribute(OxOf77f[46]);Ox3ec.removeAttribute(OxOf77f[47]);Ox3ec[OxOf77f[46]]=OxOf77f[49];Ox3ec[OxOf77f[47]]=OxOf77f[49];Ox3ec[OxOf77f[62]]=OxOf77f[63];Ox3ec[OxOf77f[64]]=cell_mouseover;Ox3ec[OxOf77f[65]]=cell_mouseout;Ox3ec[OxOf77f[61]]=cell_click;Ox3ec[OxOf77f[66]]=cell_dblclick;} ;} ;} ;function Element_Contains(element,Ox68){if(!Browser_IsOpera()){if(element[OxOf77f[67]]){return element.contains(Ox68);} ;} ;for(;Ox68!=null;Ox68=Ox68[OxOf77f[2]]){if(element==Ox68){return true;} ;} ;return false;} ;function HandleTableChanged(){if(!Element_Contains(tabledesign,currentcell)){SetCurrentCell(tabledesign.rows(0).cells(0));} ;InitDesignTableCells();UpdateButtonStates();editor.ExecCommand(OxOf77f[68]);editor.ExecCommand(OxOf77f[68]);} ;function cell_mouseover(){var Ox3ec=this;Ox3ec[OxOf77f[42]][OxOf77f[69]]=OxOf77f[70];} ;function cell_mouseout(){var Ox3ec=this;Ox3ec[OxOf77f[42]][OxOf77f[69]]=OxOf77f[63];} ;function cell_click(){var Ox3ec=this;SetCurrentCell(Ox3ec);} ;function cell_dblclick(){var Ox3ec=this;SetCurrentCell(Ox3ec);} ;btn_cell_editcell[OxOf77f[61]]=function btn_cell_editcell_onclick(){var Ox3ec=GetElementCell();var Ox177=editor.EditInWindow(Ox3ec.innerHTML,window);if(Ox177!=null&&Ox177!==false){Ox3ec[OxOf77f[13]]=Ox177;} ;} ;btn_cell_dialog[OxOf77f[61]]=function btn_cell_dialog_onclick(){editor.SetNextDialogWindow(window);editor.ShowTagDialogWithNoCancellable(GetElementCell());} ;btn_row_dialog[OxOf77f[61]]=function btn_row_dialog_onclick(){editor.SetNextDialogWindow(window);editor.ShowTagDialogWithNoCancellable(GetElementCell().parentNode);} ;btn_row_dialog[OxOf77f[42]][OxOf77f[41]]=btn_cell_dialog[OxOf77f[42]][OxOf77f[41]]=OxOf77f[43];var currentcell=null;function GetElementCell(){if(currentcell==null){return null;} ;return element[OxOf77f[9]][currentcell[OxOf77f[2]][OxOf77f[8]]][OxOf77f[11]][currentcell[OxOf77f[12]]];} ;function SetCurrentCell(Ox3ec){if(currentcell!=null){if(Browser_IsWinIE()){currentcell[OxOf77f[72]][OxOf77f[71]]=OxOf77f[49];} else {currentcell[OxOf77f[42]][OxOf77f[71]]=OxOf77f[49];} ;} ;currentcell=Ox3ec;if(Browser_IsWinIE()){currentcell[OxOf77f[72]][OxOf77f[71]]=OxOf77f[73];} else {currentcell[OxOf77f[42]][OxOf77f[71]]=OxOf77f[73];} ;UpdateButtonStates();SyncToViewInternal();} ;function UpdateButtonStates(){subcolspan[OxOf77f[44]]=!Table_CanSubColSpan(currentcell);addcolspan[OxOf77f[44]]=!Table_CanAddColSpan(currentcell);subrowspan[OxOf77f[44]]=!Table_CanSubRowSpan(currentcell);addrowspan[OxOf77f[44]]=!Table_CanAddRowSpan(currentcell);subrows[OxOf77f[44]]=Table_GetRowCount(currentcell)<2;subcolumns[OxOf77f[44]]=Table_GetColCount(currentcell)<2;} ;function ApplyTable(src,Ox44a){if(Browser_IsSafari()){Ox44a[OxOf77f[42]][OxOf77f[47]]=OxOf77f[49];} ;for(var Oxae=Ox44a[OxOf77f[9]][OxOf77f[10]]-1;Oxae>=0;Oxae--){Ox44a[OxOf77f[9]][Oxae].removeNode(true);} ;for(var Oxae=0;Oxae<src[OxOf77f[9]][OxOf77f[10]];Oxae++){var Ox44b=src[OxOf77f[9]][Oxae];var Ox44c;if(!Browser_IsSafari()){Ox44c=Ox44a.insertRow(-1);} else {var Ox111=document.createElement(OxOf77f[23]);Ox44a.appendChild(Ox111);Ox44c=Ox111.insertRow(-1);} ;Ox44c[OxOf77f[42]][OxOf77f[71]]=Ox44b[OxOf77f[42]][OxOf77f[71]];for(var Ox135=0;Ox135<Ox44b[OxOf77f[11]][OxOf77f[10]];Ox135++){var Ox44d=Ox44b[OxOf77f[11]][Ox135];var Ox44e=Ox44c.insertCell(-1);Ox44e[OxOf77f[0]]=Ox44d[OxOf77f[0]];Ox44e[OxOf77f[4]]=Ox44d[OxOf77f[4]];Ox44e[OxOf77f[42]][OxOf77f[71]]=Ox44d[OxOf77f[42]][OxOf77f[71]];if(Browser_IsOpera()){Ox44e[OxOf77f[13]]=OxOf77f[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox44e[OxOf77f[13]]=OxOf77f[15];} ;} ;} ;} ;} ;window[OxOf77f[74]]=function window_onload(){ApplyTable(element,tabledesign);InitDesignTableCells();SetCurrentCell(tabledesign[OxOf77f[9]][0][OxOf77f[11]][0]);} ;function updateList(){} ;var oPopup;if(Browser_IsWinIE()){oPopup=window.createPopup();} else {richDropDown[OxOf77f[42]][OxOf77f[41]]=OxOf77f[43];} ;function selectTemplates(){if(Browser_IsWinIE()){oPopup[OxOf77f[76]][OxOf77f[75]][OxOf77f[13]]=list_Templates[OxOf77f[13]];oPopup[OxOf77f[76]][OxOf77f[75]][OxOf77f[42]][OxOf77f[77]]=OxOf77f[78];oPopup.show(0,32,380,220,richDropDown);} ;} ;function hidePopup(){if(Browser_IsWinIE()){if(oPopup){if(oPopup[OxOf77f[79]]){oPopup.hide();} ;} ;} ;} ;