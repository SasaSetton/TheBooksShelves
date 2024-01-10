function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65WnArN4saB":
        Script1();
        break;
      case "6EdbNenhpMB":
        Script2();
        break;
      case "5bczPwNdd6q":
        Script3();
        break;
      case "6LugXgdkctw":
        Script4();
        break;
      case "6KDKoPuPH7o":
        Script5();
        break;
      case "6qQYO8BTFww":
        Script6();
        break;
      case "5b4G9FdDKSc":
        Script7();
        break;
      case "6BqYR2JeG9f":
        Script8();
        break;
      case "5Vm48rFjmcN":
        Script9();
        break;
      case "6qHvaDy1zh3":
        Script10();
        break;
      case "6Qe8TQMwmEk":
        Script11();
        break;
      case "63BhcGHZNCv":
        Script12();
        break;
      case "6Hl5dVHf6HV":
        Script13();
        break;
      case "5yskpj02ZR2":
        Script14();
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
			'שאלה: מַדּוּעַ דֻּבֹּנֶת רָצְתָה לָצֵאת מִגַּן הַחַיּוֹת?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: הַאִם  לְדַעְתְּךָ/לְדַעְתֵּךְ אַרְנֶבֶת וְדֻּבֹּנֶת יְכוֹלוֹת לִהְיוֹת חֲבֵרוֹת?, תשובה: '+ player.GetVar('TextEntry26')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: מָה קרָה בְּסוֹף הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry1')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 7', 
			'שאלה: לְאַחַר שֶׁצָּפִיתָ/צָפִית בַּסִּרְטוֹן כְּתֹב/כִּתְבִי: מָה תַּפְקידוֹ שֶׁל גַּן הַחַיּוֹת?, תשובה: '+ player.GetVar('TextEntry3')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('משימת כתיבה', 
			player.GetVar('פנייהלנמען4') +', '+ player.GetVar('משפטפתיחה4') +' '+ player.GetVar('גוףהמכתב4') +' '+ player.GetVar('משפטסיכום4') +' '+ player.GetVar('חתימתהמוען4')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('משימת כתיבה', 
			player.GetVar('לכבוד') + player.GetVar('פנייהלנמען5') +', '+ player.GetVar('תפקידהנמען5')+'.       ' + player.GetVar('הנדון') + player.GetVar('משפטפתיחה5') +'.     '+ player.GetVar('גוףהמכתב5') +'    '+player.GetVar('בכבוד') + player.GetVar('חתימתהמוען5')+', '+ player.GetVar('תפקידהמוען5')
		);


}

function Script12()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מָה לְדַעְתְּךָ/לְדַעְתֵּךְ נִמְצָא מֵעֵבֶר לַחוֹמָה?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script13()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: אֵיךְ מַרְגִּישִׁים כְּשֶׁחַיִּים בְּתוֹךְ חוֹמָה עִם שׁוֹמֵר?, תשובה: '+ player.GetVar('TextEntry22')
		);


}

function Script14()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מַדּוּעַ אַח שֶׁל דֻּבֹּנֶת לֹא הִצְטָרֵף אֵלֶיהָ לַמַּסָּע?, תשובה: '+ player.GetVar('TextEntry24')
		);


}

