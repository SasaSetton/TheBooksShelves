function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5soHTOyta2a":
        Script1();
        break;
      case "6UUWTFui4Jt":
        Script2();
        break;
      case "6YIC74Z4fiH":
        Script3();
        break;
      case "6C6QVQcedj5":
        Script4();
        break;
      case "6V8I3wEPjtO":
        Script5();
        break;
      case "6IitjkkZVg2":
        Script6();
        break;
      case "6HKMn076HZt":
        Script7();
        break;
      case "6pIEGr6DnLe":
        Script8();
        break;
      case "5c59aN42W8Z":
        Script9();
        break;
      case "6MizBiUBjlq":
        Script10();
        break;
      case "6FbP9EFUYt2":
        Script11();
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
			'שאלה: מַדּוּעַ כְּרוּבִינָה לֹא מוֹכֶרֶת אֶת הַבַּרְוָז?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: אֵילוּ צַעֲצוּעִים הָיִיתָ/הָיִית מַסְכִּים/מַסְכִּימָה לִמְכֹּר?, תשובה: '+ player.GetVar('TextEntry18')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: אֵילוּ צַעֲצוּעִים לֹא הָיִיתָ/הָיִית מַסְכִּים/מַסְכִּימָה לִמְכֹּר?, תשובה: '+ player.GetVar('TextEntry19')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: סַפֵּר/סַפְּרִי עַל הַצַּעֲצוּעַ אוֹ הַמִּשְׂחָק שֶׁאַתָּה/שֶׁאַתְּ הֲכִי אוֹהֵב/אוֹהֶבֶת, תשובה: '+ player.GetVar('TextEntry20')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: הַאִם כְּרוּבִינָה אַגְרָנִית?, תשובה: '+ player.GetVar('TextEntry23')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 1', 
			'שאלה: מָה חָשַׁבְתָּ/חָשַׁבְתְּ עַל הַחֶדֶר שֶׁל כְּרוּבִּינָה?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

