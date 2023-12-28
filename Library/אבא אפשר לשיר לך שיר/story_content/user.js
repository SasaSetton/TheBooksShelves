function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6h6DuJjKGnI":
        Script1();
        break;
      case "6GIg2NEvp5u":
        Script2();
        break;
      case "6JXsKckZLCO":
        Script3();
        break;
      case "6BC70fstZxz":
        Script4();
        break;
      case "5yDebLuRGwl":
        Script5();
        break;
      case "6Huu8eCAR0P":
        Script6();
        break;
      case "5nPNvT9hvEW":
        Script7();
        break;
      case "6KJL099wmhb":
        Script8();
        break;
      case "6XaSfmorujx":
        Script9();
        break;
      case "6rDGBDPFr48":
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

