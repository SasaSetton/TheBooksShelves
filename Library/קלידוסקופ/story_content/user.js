function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66DZIqxT6se":
        Script1();
        break;
      case "6PypHZC6srR":
        Script2();
        break;
      case "5rqrwhrj8kT":
        Script3();
        break;
      case "5j3qWmju9LY":
        Script4();
        break;
      case "6MVE786uxWN":
        Script5();
        break;
      case "6FeLLbgt4Hg":
        Script6();
        break;
      case "6E0NX8mSaEq":
        Script7();
        break;
      case "6YGjeqDbLla":
        Script8();
        break;
      case "5hFUQOye1yI":
        Script9();
        break;
      case "68BUYqPr7B8":
        Script10();
        break;
      case "6VZu56mjIoR":
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
SheetsSet('משימת כתיבה', 
			player.GetVar('פנייהלנמען') +', '+ player.GetVar('משפטפתיחה') +' '+ player.GetVar('גוףהמכתב') +' '+ player.GetVar('משפטסיכום') +' '+ player.GetVar('חתימתהמוען')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מהן התכונות הבולטות של אווה?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: כיצד מצטיירים מהסיפור החיים בגטו?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מה דעתך על דמותה של ברוניסלבה?, תשובה: '+ player.GetVar('TextEntry12')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: מה חשבת על הסיפור?, תשובה: '+ player.GetVar('TextEntry13')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 1', 
			'שאלה: מדוע לדעתך נכתב הסיפור?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

