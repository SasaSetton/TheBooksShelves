function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5lkLPIndvJ0":
        Script1();
        break;
      case "65AAv7DLCoz":
        Script2();
        break;
      case "6eMFKWVEmOK":
        Script3();
        break;
      case "5vpL4GaEMBX":
        Script4();
        break;
      case "6Ng10lV3F6Y":
        Script5();
        break;
      case "60f4pHHpuSb":
        Script6();
        break;
      case "6WPVXzVt9zU":
        Script7();
        break;
      case "6rj7QnMoTku":
        Script8();
        break;
      case "6cmaOFZB9DY":
        Script9();
        break;
      case "6VeipaV0s7i":
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
			'שאלה: מה חשבתם על ציון?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: כיצד הרגיש ציון בבית משפחת שרוני?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: כיצד התנהג ניר כלפי ציון?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מדוע ציון כותב - "אני לעולם לא אהיה שייך אליהם"?, תשובה: '+ player.GetVar('TextEntry12')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: מה יכול לגרום לציון להיות מאושר?, תשובה: '+ player.GetVar('TextEntry13')
		);


}

