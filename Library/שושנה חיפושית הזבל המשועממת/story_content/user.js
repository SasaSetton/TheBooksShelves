function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vvHA7rAvIs":
        Script1();
        break;
      case "6SvDz4vyBiM":
        Script2();
        break;
      case "5aUFUfBnvAj":
        Script3();
        break;
      case "6LJJeeJn8lM":
        Script4();
        break;
      case "5insMcX14KK":
        Script5();
        break;
      case "5dh5oqCzSU0":
        Script6();
        break;
      case "6Jnr0G4TK99":
        Script7();
        break;
      case "61DpEnGaBXQ":
        Script8();
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
SheetsSet('שאלה 2', 
			'שאלה: מָה קרָה בְּסוֹף הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry9')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 1', 
			'שאלה: מָתַי מַרְגִּישִׁים שִׁעֲמוּם?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: כֵּיצַד חִפּוּשִׁיּוֹת זֶבֶל תּוֹרְמוֹת לָאָדָם?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

