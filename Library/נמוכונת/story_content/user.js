function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5n3rGA1B4h8":
        Script1();
        break;
      case "5gRdNSiWW3b":
        Script2();
        break;
      case "6lECHv8TZoK":
        Script3();
        break;
      case "5VntS0DIbrV":
        Script4();
        break;
      case "5bjmwl4c5yc":
        Script5();
        break;
      case "6dO7QO0na3X":
        Script6();
        break;
      case "5uZjYWnsvCj":
        Script7();
        break;
      case "6b3Kt9YrNlD":
        Script8();
        break;
      case "69fOQr6KEnx":
        Script9();
        break;
      case "6o4JDHF1WKe":
        Script10();
        break;
      case "5WpzHEvAtzh":
        Script11();
        break;
      case "6l9co6L2dTw":
        Script12();
        break;
      case "6OOy5IDDkqp":
        Script13();
        break;
      case "5x9SAOx2fS1":
        Script14();
        break;
      case "5WQASsC7lmG":
        Script15();
        break;
      case "6gG0CekWoXa":
        Script16();
        break;
      case "68YTrqHhgJ5":
        Script17();
        break;
      case "6IQZXVCwU2P":
        Script18();
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
			'שאלה: מַדּוּעַ הַיַּלְדָּה יוֹצֵאת לְהַפְגָּנָה?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: מָה תַּגִּיד/תַּגִּידִי לַיַּלְדָּה כְּדֵי לְעוֹדֵד אוֹתָהּ כְּשֶׁהִיא עֲצוּבָה?, תשובה: '+ player.GetVar('TextEntry26')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 7', 
			'שאלה: מַדּוּעַ לְדַעְתְּךָ/דַּעְתֵּךְ הַסּוֹפֶרֶת כָּתְבָה אֶת הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry9')
		);


}

function Script9()
{
  window.print();
}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מָתַי מַפְגִּינִים?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: הַאִם הַיַּלְדָּה בַּסִּיפּוּר הִשְׁתַּנְּתָה?, תשובה: '+ player.GetVar('TextEntry25')
		);


}

function Script12()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: אִם הֱיִיתֶם מְתַכְנְנִים הַפְגָּנָה, אֵיזוֹ הַפְגָּנָה הֱיִיתֶם מְתַכְנְנִים? עַל אֵיזֶה נוֹשֵׂא תִּרְצוּ לְהַפְגִּין עַל מְנַת לְשַׁנּוֹתוֹ?, תשובה: '+ player.GetVar('TextEntry22')
		);


}

function Script13()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: דִּימּוּי עַצְמִי הוּא מָה שֶׁאֲנַחְנוּ חוֹשְׁבִים עַל עַצְמֵנוּ. מָה הַיַּלְדָּה חוֹשֶׁבֶת עַל עַצְמָהּ?, תשובה: '+ player.GetVar('TextEntry24')
		);


}

function Script14()
{
  if(void 0===window.stencilsheets){t="https://cluelabs.com/stencil/display/widget-sheets-init-v2",s={authtool:"sl",chart:"MTQ5M3w0NDQ4fDA4ZmFlMGMzM2ZmMzVkNGE5MGNhN2FiNzFiNjlmNDE5"},a=Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&");(xhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var e=this.responseText,t=document.getElementsByTagName("head")[0],s=document.createElement("script");t.appendChild(s),s.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},xhttp.open("POST",t,!0),xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),xhttp.send(a)}
        
}

function Script15()
{
  var player = GetPlayer();
SheetsSet('כינוי', player.GetVar('name'));
}

function Script16()
{
  var player = GetPlayer();
SheetsSet('שם בית החולים', player.GetVar('HospitalName'));
}

function Script17()
{
  var player = GetPlayer();
SheetsSet('שם המדף', player.GetVar('shelf'));
}

function Script18()
{
  var player = GetPlayer();
SheetsSet('שם הספר', player.GetVar('BookName'));
}

