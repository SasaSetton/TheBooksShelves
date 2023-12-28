function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6lZofnVgvLn":
        Script1();
        break;
      case "62LUlTn20sv":
        Script2();
        break;
      case "6bLse1dTDH8":
        Script3();
        break;
      case "5lygN2kFmPo":
        Script4();
        break;
      case "6kXN0rO0l4I":
        Script5();
        break;
      case "6PXKmPGue9w":
        Script6();
        break;
      case "68eAjcJSBqY":
        Script7();
        break;
      case "6JYksCrbVGJ":
        Script8();
        break;
      case "5bFMkqqEvyO":
        Script9();
        break;
      case "6cEWDwS1KSI":
        Script10();
        break;
      case "5gxi3WdaA8p":
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
			'שאלה: כיצד הרגישה הילדה-גולדה כשעבדה בחנות?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מה היו החלומות של גולדה?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: האם גולדה הצליחה להגשים את חלומותיה?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מה דעתכם על תפקודה של גולדה כראשת ממשלה?, תשובה: '+ player.GetVar('TextEntry12')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: אילו תכונות נדרשות למי שממלא תפקיד של ראש ממשלה?, תשובה: '+ player.GetVar('TextEntry')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'משימה: כתבו לגולדה מכתב, תשובה: '+ player.GetVar('TextEntry13')
		);


}

