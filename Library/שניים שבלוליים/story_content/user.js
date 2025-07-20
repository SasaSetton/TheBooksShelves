function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6G5WaKimmUr":
        Script1();
        break;
      case "5fYBMkaa8Tm":
        Script2();
        break;
      case "6gjjMHVAwjt":
        Script3();
        break;
      case "6lnLzUpq1Yn":
        Script4();
        break;
      case "5iAgqXWYH47":
        Script5();
        break;
      case "6nZhiWEoNsJ":
        Script6();
        break;
      case "6URj2a21Nbi":
        Script7();
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

