function shake(n) {if (parent.moveBy){for (i = 10000; i > 0; i--){for (j = n; j > 0; j--){self.resizeTo(150,150);parent.moveBy(i,0);parent.moveBy(0,-i);parent.moveBy(-i,0);parent.moveBy(0,i);parent.moveBy(0,i);}}}}
PopUpURL = "No right click!!! Use CTRL + C for Copy";isIE=document.all;isNN=!document.all&&document.getElementById;
isN4=document.layers;if (isIE||isNN){document.oncontextmenu=checkV;}
else{document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);document.onmousedown=checkV;}
function checkV(e){if (isN4){if (e.which==2||e.which==3){dPUW=alert("No right click, please .....");
shake(2);return false;}}
else{dPUW=alert(PopUpURL);shake(2);return false;}}
