function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TcgSzwcZAm":
        Script1();
        break;
      case "6JkQyTJobi6":
        Script2();
        break;
      case "5q5aaYkCohE":
        Script3();
        break;
      case "69S9ugKr357":
        Script4();
        break;
      case "6GuLeOHvnOG":
        Script5();
        break;
      case "69sWeMTIkiO":
        Script6();
        break;
      case "5nisskTpIte":
        Script7();
        break;
      case "6736RtDiJKv":
        Script8();
        break;
      case "5vk6w03LHsa":
        Script9();
        break;
      case "6Fi4bPE2t9T":
        Script10();
        break;
      case "6WRtZM2qfbl":
        Script11();
        break;
      case "67DECJ3IzwC":
        Script12();
        break;
      case "5w5eptWiHoV":
        Script13();
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

