function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TUKG8RgcZt":
        Script1();
        break;
      case "6ScEj8ugDjr":
        Script2();
        break;
      case "5rrzTVXX89w":
        Script3();
        break;
      case "64A2cayTXV9":
        Script4();
        break;
      case "6HL1cRyPdum":
        Script5();
        break;
      case "61qzdUVA5dt":
        Script6();
        break;
      case "5wix1CtxUmC":
        Script7();
        break;
      case "5aK5O6KLGUW":
        Script8();
        break;
      case "6qIJqjo4Z82":
        Script9();
        break;
      case "6Hl7erWEI6A":
        Script10();
        break;
      case "5sRrKLDiTEn":
        Script11();
        break;
      case "5js1BFGCuDD":
        Script12();
        break;
      case "6F8ePJkxe9S":
        Script13();
        break;
      case "5vlf4pscQIJ":
        Script14();
        break;
      case "6pKTdX9YYAn":
        Script15();
        break;
      case "5awdxeUsE4T":
        Script16();
        break;
      case "5evX6ggU7bC":
        Script17();
        break;
      case "6Si1HwMHnjE":
        Script18();
        break;
      case "625EYN565ft":
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

