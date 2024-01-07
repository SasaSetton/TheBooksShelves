function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kixBu1t1RI":
        Script1();
        break;
      case "6LIly238xGE":
        Script2();
        break;
      case "6S1QiuLCqM9":
        Script3();
        break;
      case "6Sx7J9c4Msj":
        Script4();
        break;
      case "6YMhFJB4ADw":
        Script5();
        break;
      case "6d3plF1Z3rj":
        Script6();
        break;
      case "6h5P8bGRtZJ":
        Script7();
        break;
      case "6nnLrvHDel8":
        Script8();
        break;
      case "6Yy5mN3A3rP":
        Script9();
        break;
      case "5WouxkkoKea":
        Script10();
        break;
      case "5rdyDc1unfQ":
        Script11();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencilsheets){t="https://cluelabs.com/stencil/display/widget-sheets-init-v2",s={authtool:"sl",chart:"MTQ5M3w0NDQ4fDA4ZmFlMGMzM2ZmMzVkNGE5MGNhN2FiNzFiNjlmNDE5"},a=Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&");(xhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var e=this.responseText,t=document.getElementsByTagName("head")[0],s=document.createElement("script");t.appendChild(s),s.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},xhttp.open("POST",t,!0),xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),xhttp.send(a)}
        
}

function Script2()
{
  var player = GetPlayer();
SheetsSet('כינוי', player.GetVar('name'));
}

function Script3()
{
  var player = GetPlayer();
SheetsSet('שם בית החולים', player.GetVar('HospitalName'));
}

function Script4()
{
  var player = GetPlayer();
SheetsSet('שם המדף', player.GetVar('shelf'));
}

function Script5()
{
  var player = GetPlayer();
SheetsSet('שם הספר', player.GetVar('BookName'));
}

function Script6()
{
  var player = GetPlayer();
SheetsSet('שאלה 1', 
			'שאלה: בַּמֶּה עוֹסֵק הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מָה הִרְגִּישָׁה הַגִּבּוֹרָה כְּשֶׁנּוּרִית עָזְבָה?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: הַאִם הַלִּוְיָתָן בַּסִּפּוּר אֲמִתִּי?, תשובה: '+ player.GetVar('TextEntry25')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: מָה קרָה בְּסוֹף הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry4')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: תֵּן/תְּנִי לְיַלְדָּה עֵצוֹת: כֵּיצַד מִתְמוֹדְדִים עִם עֲזִיבָה שֶׁל חֲבֵרָה?, תשובה: '+ player.GetVar('TextEntry22')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מִי לְדַעְתְּךָ/לְדַעְתֵּךְ צָרִיךְ לַעֲזֹר לַגִּבּוֹרָה כְּשֶׁקשֶׁה לָהּ?, תשובה: '+ player.GetVar('TextEntry24')
		);


}

