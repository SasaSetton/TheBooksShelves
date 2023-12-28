function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Hv9RT2PpAN":
        Script1();
        break;
      case "6W6ohUq68wq":
        Script2();
        break;
      case "5Zt2W3qlfAA":
        Script3();
        break;
      case "5Wko9wmZnjQ":
        Script4();
        break;
      case "6VqfQ34tero":
        Script5();
        break;
      case "6EvdWBiR9Jv":
        Script6();
        break;
      case "5z6bnsVXKF4":
        Script7();
        break;
      case "6cmZzWSYpqu":
        Script8();
        break;
      case "6ZNa4eDuri5":
        Script9();
        break;
      case "5WLaU5k1Szx":
        Script10();
        break;
      case "5kpawM2OWNz":
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
			'שאלה: מה חשבת על הסיפור?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: כיצד התרשמת מאוטו ויידט, מנהל בית המלאכה?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מה הרגישה הילדה כשהסתתרה בארון?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מה מלמד החלום שחלמה הגיבורה על חייה?, תשובה: '+ player.GetVar('TextEntry12')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: מי הם חסידי אומות העולם?, תשובה: '+ player.GetVar('TextEntry13')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: מה אפשר ללמוד מהסיפור על חיי היהודים בתקופת שלטון הנאצים?, תשובה: '+ player.GetVar('TextEntry17')
		);


}

