function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Yd3U2SBdOE":
        Script1();
        break;
      case "6f6qYGOS5Rb":
        Script2();
        break;
      case "5f20VpIbZoT":
        Script3();
        break;
      case "6FoYtCz3IL1":
        Script4();
        break;
      case "5tYys0Wngzy":
        Script5();
        break;
      case "5rfO5ox5Iqx":
        Script6();
        break;
      case "5Zc2TvTXDnE":
        Script7();
        break;
      case "6FEytNa0y6J":
        Script8();
        break;
      case "686gOZRlOpI":
        Script9();
        break;
      case "6fpSF860G0H":
        Script10();
        break;
      case "5c55a2lBQSk":
        Script11();
        break;
      case "6irONQTQDDR":
        Script12();
        break;
      case "6BfsXsfR5I3":
        Script13();
        break;
      case "6kuiOpdd7v8":
        Script14();
        break;
      case "5eKVC60i3NM":
        Script15();
        break;
      case "60e7fUgnnjk":
        Script16();
        break;
      case "5sHX9cS9g1x":
        Script17();
        break;
      case "6Nd2vRTjk21":
        Script18();
        break;
      case "6lyKi4vIIM6":
        Script19();
        break;
      case "5x9qpb2k2Kn":
        Script20();
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
			'שאלה: מַדּוּעַ לְדַעְתְּךָ/לְדַעְתֵּךְ הַסּוֹפֵר כָּתַב אֶת הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: אֵיזוֹ מַתָּנָה מֻשְׁלֶמֶת הָיִיתָ רוֹצֶה/הָיִיתְ רוֹצָה לְקבֵּל?, תשובה: '+ player.GetVar('TextEntry3')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: לָמָּה הַיֶּלֶד רָצָה מְכוֹנִית מֵרוֹץ עִם שַׁלָּט?, תשובה: '+ player.GetVar('TextEntry1')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מָה קרָה בְּסוֹף הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry2')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: לְמִי הָיִיתָ רוֹצֶה/ הָיִיתְ רוֹצָה לְהַעֲנִיק מַתָּנָה מְיֻחֶדֶת?, תשובה: '+ player.GetVar('TextEntry4')
		);


}

function Script11()
{
  window.print();
}

function Script12()
{
  window.print();
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

function Script20()
{
  window.print();
}

