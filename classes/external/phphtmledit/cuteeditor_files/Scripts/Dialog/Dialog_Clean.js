var OxOeb2f=["ig","\x3C/?[^\x3E]*\x3E","","allhtml","\x3C\x5C?xml[^\x3E]*\x3E","\x3C/?[a-z]+:[^\x3E]*\x3E","(\x3C[^\x3E]+) class=[^ |^\x3E]*([^\x3E]*\x3E)","$1 $2","(\x3C[^\x3E]+) style=\x22[^\x22]*\x22([^\x3E]*\x3E)","\x3Cspan[^\x3E]*\x3E\x3C/span[^\x3E]*\x3E","\x3Cspan\x3E\x3Cspan\x3E","\x3Cspan\x3E","\x3C/span\x3E\x3C/span\x3E","\x3C/span\x3E","[ ]*\x3E","\x3E","word","css","\x3C/?font[^\x3E]*\x3E","font","\x3C/?span[^\x3E]*\x3E","span"];var editor=Window_GetDialogArguments(window);function execRE(Ox18e,Ox18f,Ox190){var Ox191= new RegExp(Ox18e,OxOeb2f[0]);return Ox190.replace(Ox191,Ox18f);} ;function getContent(){return editor.GetBodyInnerHTML();} ;function setContent(Ox190){editor.SetHTML(Ox190);} ;function codeCleaner(Ox103){var Ox190=getContent();switch(Ox103){case OxOeb2f[3]:Ox190=execRE(OxOeb2f[1],OxOeb2f[2],Ox190);break ;;case OxOeb2f[16]:Ox190=execRE(OxOeb2f[4],OxOeb2f[2],Ox190);Ox190=execRE(OxOeb2f[5],OxOeb2f[2],Ox190);Ox190=execRE(OxOeb2f[6],OxOeb2f[7],Ox190);Ox190=execRE(OxOeb2f[8],OxOeb2f[7],Ox190);Ox190=execRE(OxOeb2f[9],OxOeb2f[2],Ox190);Ox190=execRE(OxOeb2f[10],OxOeb2f[11],Ox190);Ox190=execRE(OxOeb2f[12],OxOeb2f[13],Ox190);Ox190=execRE(OxOeb2f[14],OxOeb2f[15],Ox190);break ;;case OxOeb2f[17]:Ox190=execRE(OxOeb2f[6],OxOeb2f[7],Ox190);Ox190=execRE(OxOeb2f[8],OxOeb2f[7],Ox190);break ;;case OxOeb2f[19]:Ox190=execRE(OxOeb2f[18],OxOeb2f[2],Ox190);break ;;case OxOeb2f[21]:Ox190=execRE(OxOeb2f[20],OxOeb2f[2],Ox190);break ;;} ;setContent(Ox190);} ;