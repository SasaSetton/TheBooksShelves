function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pBM3aO2Ul1":
        Script1();
        break;
      case "5nX7O7wkceu":
        Script2();
        break;
      case "6NAqryr3wqy":
        Script3();
        break;
      case "5wagx1vIs0M":
        Script4();
        break;
      case "5Zq0REX3SV7":
        Script5();
        break;
      case "6RNdCfVHGCe":
        Script6();
        break;
      case "5sh0Xvs1Ejb":
        Script7();
        break;
      case "6pkIvATulez":
        Script8();
        break;
      case "6fmzwHU3oTQ":
        Script9();
        break;
      case "5pNeict9zbu":
        Script10();
        break;
      case "6fSjvInZFFP":
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
SheetsSet('שאלה 1', 
			'שאלה: בַּמֶּה עוֹסֵק הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מָה חָשַׁבְתָּ/חָשַׁבְתְּ עַל קרְנִי?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: הַאִם קרְנִי נֶהֶנְתָה בִּמְסִיבַּת יוֹם הַהֻלֶּדֶת שֶׁלָּהּ?, תשובה: '+ player.GetVar('TextEntry17')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: אִם הָיִיתָ פּוֹגֵשׁ/הָיִית פּוֹגֶשֶׁת אֶת קרְנִי - מָה הָיִיתָ אוֹמֵר/הָיִית אוֹמֶרֶת לָהּ?, תשובה: '+ player.GetVar('TextEntry18')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: כֵּיצַד הִסְתַּיֵּם הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry19')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: קרְנִי אוֹהֶבֶת מַחֲבֹאִים. אֵילוּ מִשְׂחָקים אַתָּה אוֹהֵב/אַתְּ אוֹהֶבֶת?, תשובה: '+ player.GetVar('TextEntry20')
		);


}

