function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pnPxQ6BSBd":
        Script1();
        break;
      case "6E6eB2lUfeC":
        Script2();
        break;
      case "6TLrnBvRxYT":
        Script3();
        break;
      case "60BRuxLvJ4W":
        Script4();
        break;
      case "5niFmbmNqRj":
        Script5();
        break;
      case "6R3grOIL8ic":
        Script6();
        break;
      case "6nUxkIuV2Uc":
        Script7();
        break;
      case "6VfLYI79TJX":
        Script8();
        break;
      case "6gicVYUvLqL":
        Script9();
        break;
      case "5s5Kd1WaU7O":
        Script10();
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
			'שאלה: מַדּוּעַ הָאַחִים רַבִים?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מִי מֵהָאַחִים צוֹדֵק?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: הִתְבּוֹנֵן/הִתְבּוֹנְנִי בָּאִיּוּר הָאַחֲרוֹן. כְּתֹב/כִּתְבִי מָה מִתְרַחֵשׁ בְּאִיּוּר זֶה, תשובה: '+ player.GetVar('TextEntry25')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: תֵּן/תְּנִי לְאַחִים עֵצוֹת, כֵּיצַד לְהִסְתַּדֵּר יוֹתֵר טוֹב?, תשובה: '+ player.GetVar('TextEntry22')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מָה הַהוֹרִים צְרִיכִים לַעֲשׂוֹת כְּשֶׁהָאַחִים רַבִים?, תשובה: '+ player.GetVar('TextEntry24')
		);


}

