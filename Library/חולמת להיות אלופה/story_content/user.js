function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PSng5Y2G1p":
        Script1();
        break;
      case "62apSsSX0oD":
        Script2();
        break;
      case "5hhGU3H9f17":
        Script3();
        break;
      case "6CfoqYfoOZg":
        Script4();
        break;
      case "6ldGaihEk3E":
        Script5();
        break;
      case "6LDfOLv13hv":
        Script6();
        break;
      case "6edCaOAIhTc":
        Script7();
        break;
      case "64gjaQ3p1ev":
        Script8();
        break;
      case "5bMzntlPUon":
        Script9();
        break;
      case "6phkkS4Im8S":
        Script10();
        break;
      case "69rEIlxPssx":
        Script11();
        break;
      case "6GziZLK9C3j":
        Script12();
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
			'שאלה: מדוע גבי אהבה להתאמן בגודו?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מה חשבתם על הבנות בכיתתה?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מה הייתם אומרים לאמא של גבי?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מדוע מתן מסתיר מחבריו את התחביב שלו?, תשובה: '+ player.GetVar('TextEntry12')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: האם לדעתכם יש משחקים שמיועדים לבנות בלבד?, תשובה: '+ player.GetVar('TextEntry')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: מה חשבתם על מתן?, תשובה: '+ player.GetVar('TextEntry1')
		);


}

function Script12()
{
  var player = GetPlayer();
SheetsSet('שאלה 7', 
			'שאלה: מהו החלום שלכם?, תשובה: '+ player.GetVar('TextEntry2')
		);


}

