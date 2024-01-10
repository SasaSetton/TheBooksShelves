function ExecuteScript(strId)
{
  switch (strId)
  {
      case "680K8xlr7uq":
        Script1();
        break;
      case "6fk9Bx8YmGZ":
        Script2();
        break;
      case "5WlMm1YzRHD":
        Script3();
        break;
      case "5eO8iYZfDcU":
        Script4();
        break;
      case "5buxWFW8pA8":
        Script5();
        break;
      case "6huFqBC8hVt":
        Script6();
        break;
      case "6DbfaPV0iC8":
        Script7();
        break;
      case "5xXXQTEeuWo":
        Script8();
        break;
      case "6XDQRjso04P":
        Script9();
        break;
      case "6iwn0IIZHZ8":
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
			'שאלה: מָה חֲשַׁבְת עַל הַיַּלְדָּה בַּסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מַדּוּעַ הַיַּלְדָּה חוֹזֶרֶת וְשׁוֹאֶלֶת אֶת אָבִיהָ, אִם הוּא אוֹהֵב אוֹתָהּ?, תשובה: '+ player.GetVar('TextEntry9')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מָה דַּעְתְּךָ/דַּעְתֵּךְ עַל הָאָב בַּסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מַדּוּעַ לְדַּעְתְּךָ/דַּעְתֵּךְ קמוּ מוּזֵאוֹנִים?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: מָה מוּזֵאוֹנִים מְלַמְּדִים אוֹתָנוּ?, תשובה: '+ player.GetVar('TextEntry12')
		);


}

