function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eLpHQQ1zNa":
        Script1();
        break;
      case "6XOuYbPR9ZW":
        Script2();
        break;
      case "5XWl0TlXmeO":
        Script3();
        break;
      case "5kwCYvbAYNb":
        Script4();
        break;
      case "65uOHfhVNkM":
        Script5();
        break;
      case "5nAuKVNvPHS":
        Script6();
        break;
      case "5ZRIsBAarEr":
        Script7();
        break;
      case "6EdPH3pt97h":
        Script8();
        break;
      case "5ZjsS4r3mVS":
        Script9();
        break;
      case "6YpQhkuYrcs":
        Script10();
        break;
      case "6o794bow0Wu":
        Script11();
        break;
      case "6cupaKU5qV9":
        Script12();
        break;
      case "6L6YtBYQiL2":
        Script13();
        break;
      case "6O8Fo8h01hG":
        Script14();
        break;
      case "6nzMOKlMXUI":
        Script15();
        break;
      case "5fdXj4nGDa2":
        Script16();
        break;
      case "67lbFmaCYCk":
        Script17();
        break;
      case "5glFQFzdby2":
        Script18();
        break;
      case "6M9EghZuFbo":
        Script19();
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
			'שאלה: מַדּוּעַ לְדַעְתְּךָ/לְדַעְתֵּךְ הַסּוֹפֵר כָּתַב אֶת הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מָה חָשַׁבְתָּ/חָשַׁבְתְּ עַל נֹעַם?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: לָמָּה נֹעַם לֹא סִפֵּר לְאַף אֶחָד שֶׁמְּצִיקים לוֹ?, תשובה: '+ player.GetVar('TextEntry17')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: אֵיךְ אֶפְשָׁר לַעֲזֹר לְנֹעַם?, תשובה: '+ player.GetVar('TextEntry18')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: מָה הָיִיתָ/הָיִית אוֹמֵר/אוֹמֶרֶת לַיְּלָדִים שֶׁמְּצִיקים לְנֹעַם?, תשובה: '+ player.GetVar('TextEntry19')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: מָה עָשְׂתָה הַמִּפְלֶצֶת הַצְּהֻבָּה?, תשובה: '+ player.GetVar('TextEntry21')
		);


}

function Script12()
{
  var player = GetPlayer();
SheetsSet('שאלה 7', 
			'שאלה: מָה קרָה בְּסוֹף הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry20')
		);


}

function Script13()
{
  window.print();
}

function Script14()
{
  window.print();
}

function Script15()
{
  window.print();
}

function Script16()
{
  window.print();
}

function Script17()
{
  window.print();
}

function Script18()
{
  window.print();
}

function Script19()
{
  window.print();
}

