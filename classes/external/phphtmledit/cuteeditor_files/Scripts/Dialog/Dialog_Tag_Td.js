var OxOc387=["inp_width","inp_height","sel_align","sel_valign","inp_bgColor","inp_borderColor","inp_borderColorLight","inp_borderColorDark","inp_class","inp_id","inp_tooltip","sel_noWrap","sel_CellScope","value","bgColor","backgroundColor","style","","id","borderColor","borderColorLight","borderColorDark","className","width","height","align","vAlign","title","noWrap","scope","ValidNumber","ValidID","class","valign","cssText","border-image: none;","onclick"];var inp_width=Window_GetElement(window,OxOc387[0],true);var inp_height=Window_GetElement(window,OxOc387[1],true);var sel_align=Window_GetElement(window,OxOc387[2],true);var sel_valign=Window_GetElement(window,OxOc387[3],true);var inp_bgColor=Window_GetElement(window,OxOc387[4],true);var inp_borderColor=Window_GetElement(window,OxOc387[5],true);var inp_borderColorLight=Window_GetElement(window,OxOc387[6],true);var inp_borderColorDark=Window_GetElement(window,OxOc387[7],true);var inp_class=Window_GetElement(window,OxOc387[8],true);var inp_id=Window_GetElement(window,OxOc387[9],true);var inp_tooltip=Window_GetElement(window,OxOc387[10],true);var sel_noWrap=Window_GetElement(window,OxOc387[11],true);var sel_CellScope=Window_GetElement(window,OxOc387[12],true);SyncToView=function SyncToView_Td(){inp_bgColor[OxOc387[13]]=element.getAttribute(OxOc387[14])||element[OxOc387[16]][OxOc387[15]]||OxOc387[17];inp_id[OxOc387[13]]=element.getAttribute(OxOc387[18])||OxOc387[17];inp_bgColor[OxOc387[16]][OxOc387[15]]=inp_bgColor[OxOc387[13]];inp_borderColor[OxOc387[13]]=element.getAttribute(OxOc387[19])||OxOc387[17];inp_borderColor[OxOc387[16]][OxOc387[15]]=inp_borderColor[OxOc387[13]];inp_borderColorLight[OxOc387[13]]=element.getAttribute(OxOc387[20])||OxOc387[17];inp_borderColorLight[OxOc387[16]][OxOc387[15]]=inp_borderColorLight[OxOc387[13]];inp_borderColorDark[OxOc387[13]]=element.getAttribute(OxOc387[21])||OxOc387[17];inp_borderColorDark[OxOc387[16]][OxOc387[15]]=inp_borderColorDark[OxOc387[13]];inp_class[OxOc387[13]]=element[OxOc387[22]];inp_width[OxOc387[13]]=element.getAttribute(OxOc387[23])||element[OxOc387[16]][OxOc387[23]]||OxOc387[17];inp_height[OxOc387[13]]=element.getAttribute(OxOc387[24])||element[OxOc387[16]][OxOc387[24]]||OxOc387[17];sel_align[OxOc387[13]]=element.getAttribute(OxOc387[25])||OxOc387[17];sel_valign[OxOc387[13]]=element.getAttribute(OxOc387[26])||OxOc387[17];inp_tooltip[OxOc387[13]]=element.getAttribute(OxOc387[27])||OxOc387[17];sel_noWrap[OxOc387[13]]=element.getAttribute(OxOc387[28])||OxOc387[17];sel_CellScope[OxOc387[13]]=element.getAttribute(OxOc387[29])||OxOc387[17];} ;SyncTo=function SyncTo_Td(element){if(inp_bgColor[OxOc387[13]]){if(element[OxOc387[16]][OxOc387[15]]){element[OxOc387[16]][OxOc387[15]]=inp_bgColor[OxOc387[13]];} else {element[OxOc387[14]]=inp_bgColor[OxOc387[13]];} ;} else {element.removeAttribute(OxOc387[14]);} ;element[OxOc387[19]]=inp_borderColor[OxOc387[13]];element[OxOc387[20]]=inp_borderColorLight[OxOc387[13]];element[OxOc387[21]]=inp_borderColorDark[OxOc387[13]];element[OxOc387[22]]=inp_class[OxOc387[13]];if(element[OxOc387[16]][OxOc387[23]]||element[OxOc387[16]][OxOc387[24]]){try{element[OxOc387[16]][OxOc387[23]]=inp_width[OxOc387[13]];element[OxOc387[16]][OxOc387[24]]=inp_height[OxOc387[13]];} catch(er){alert(CE_GetStr(OxOc387[30]));} ;} else {try{element[OxOc387[23]]=inp_width[OxOc387[13]];element[OxOc387[24]]=inp_height[OxOc387[13]];} catch(er){alert(CE_GetStr(OxOc387[30]));} ;} ;var Ox276=/[^a-z\d]/i;if(Ox276.test(inp_id.value)){alert(CE_GetStr(OxOc387[31]));return ;} ;element[OxOc387[25]]=sel_align[OxOc387[13]];element[OxOc387[18]]=inp_id[OxOc387[13]];element[OxOc387[26]]=sel_valign[OxOc387[13]];element[OxOc387[28]]=sel_noWrap[OxOc387[13]];element[OxOc387[27]]=inp_tooltip[OxOc387[13]];element[OxOc387[29]]=sel_CellScope[OxOc387[13]];if(element[OxOc387[18]]==OxOc387[17]){element.removeAttribute(OxOc387[18]);} ;if(element[OxOc387[29]]==OxOc387[17]){element.removeAttribute(OxOc387[29]);} ;if(element[OxOc387[28]]==OxOc387[17]){element.removeAttribute(OxOc387[28]);} ;if(element[OxOc387[14]]==OxOc387[17]){element.removeAttribute(OxOc387[14]);} ;if(element[OxOc387[19]]==OxOc387[17]){element.removeAttribute(OxOc387[19]);} ;if(element[OxOc387[20]]==OxOc387[17]){element.removeAttribute(OxOc387[20]);} ;if(element[OxOc387[21]]==OxOc387[17]){element.removeAttribute(OxOc387[21]);} ;if(element[OxOc387[22]]==OxOc387[17]){element.removeAttribute(OxOc387[22]);} ;if(element[OxOc387[22]]==OxOc387[17]){element.removeAttribute(OxOc387[32]);} ;if(element[OxOc387[25]]==OxOc387[17]){element.removeAttribute(OxOc387[25]);} ;if(element[OxOc387[26]]==OxOc387[17]){element.removeAttribute(OxOc387[33]);} ;if(element[OxOc387[27]]==OxOc387[17]){element.removeAttribute(OxOc387[27]);} ;if(element[OxOc387[23]]==OxOc387[17]){element.removeAttribute(OxOc387[23]);} ;if(element[OxOc387[24]]==OxOc387[17]){element.removeAttribute(OxOc387[24]);} ;if(element[OxOc387[16]][OxOc387[34]]==OxOc387[35]){element.removeAttribute(OxOc387[16]);} ;} ;inp_borderColor[OxOc387[36]]=function inp_borderColor_onclick(){SelectColor(inp_borderColor);} ;inp_bgColor[OxOc387[36]]=function inp_bgColor_onclick(){SelectColor(inp_bgColor);} ;inp_borderColorLight[OxOc387[36]]=function inp_borderColorLight_onclick(){SelectColor(inp_borderColorLight);} ;inp_borderColorDark[OxOc387[36]]=function inp_borderColorDark_onclick(){SelectColor(inp_borderColorDark);} ;