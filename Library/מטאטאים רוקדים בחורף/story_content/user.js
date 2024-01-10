function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tkjcU7ZvUV":
        Script1();
        break;
      case "6f0KgHLAxd9":
        Script2();
        break;
      case "5rHOt7QCA0K":
        Script3();
        break;
      case "5mmgIp7pb4s":
        Script4();
        break;
      case "5uy0mmJn8iK":
        Script5();
        break;
      case "6VK4FhbOa1E":
        Script6();
        break;
      case "6A3B1QlgcBF":
        Script7();
        break;
      case "5aTQ09bAdwq":
        Script8();
        break;
      case "5x8Hf9z3J9G":
        Script9();
        break;
      case "66yzZGzpgOM":
        Script10();
        break;
      case "5buMGN1qZds":
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

