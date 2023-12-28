function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kZ5WL6ld0J":
        Script1();
        break;
      case "5n9DTtjnXQc":
        Script2();
        break;
      case "66WqwbWoKR0":
        Script3();
        break;
      case "5vMBdONlln4":
        Script4();
        break;
      case "5bQNvVc5WbV":
        Script5();
        break;
      case "6jHlcuLFMLV":
        Script6();
        break;
      case "6hwEdEoaPEv":
        Script7();
        break;
      case "5wcTrtmR5ng":
        Script8();
        break;
      case "65m5lNZI2Bv":
        Script9();
        break;
      case "5mbpa01AWK7":
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
			'שאלה: כֵּיצַד נִתָּן לְתָאֵר אֶת הַיְּלָדִים בְּכִתָּתוֹ שֶׁל דָּוִיד?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מַדּוּעַ הַפְּרָחִים שֶׁל דָּוִיד נָשְׁרוּ?, תשובה: '+ player.GetVar('TextEntry9')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מַדּוּעַ הַיְּלָדִים הִתְרַחֲקוּ מִדָּוִיד?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מָה הִרְגִּישׁ דָּוִיד כְּשֶׁהַפְּרָחִים שֶׁלּוֹ נָשְׁרוּ?, תשובה: '+ player.GetVar('TextEntry17')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: מָה חָשַׁבְתָּ/חָשַׁבְתְּ עַל הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

