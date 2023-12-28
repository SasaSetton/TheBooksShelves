function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6168NNzfEAu":
        Script1();
        break;
      case "63i0oJiYFqX":
        Script2();
        break;
      case "5yUVHKoJTIn":
        Script3();
        break;
      case "5zPyaiu9TNJ":
        Script4();
        break;
      case "6FIXlyw2aH0":
        Script5();
        break;
      case "5cVQyslVh0A":
        Script6();
        break;
      case "64Czy9T7t9P":
        Script7();
        break;
      case "5dVpBgbKEMm":
        Script8();
        break;
      case "5oWm7YMBUxD":
        Script9();
        break;
      case "5wrCVoAwhW0":
        Script10();
        break;
      case "6TzwFlZMwrE":
        Script11();
        break;
      case "5uPypT4zWog":
        Script12();
        break;
      case "5xLNhEid0eB":
        Script13();
        break;
      case "5hSvhoxr8cO":
        Script14();
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
			'שאלה: מה חשבתם/ן על ארווין, המספר?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מה היו הקשיים של ארווין?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: תנו לארווין עצות. מה לעשות כשקשה לו?, תשובה: '+ player.GetVar('TextEntry')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 7', 
			'שאלה: האם מי שמהגר למדינה אחרת צריך לשנות את שמו?, תשובה: '+ player.GetVar('TextEntry2')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 9', 
			'שאלה: מה חשבתם/ן על היצירה?, תשובה: '+ player.GetVar('TextEntry4')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מהי לדעתכם ההתמודדות הקשה ביותר של ארווין במהלך המסע?, תשובה: '+ player.GetVar('TextEntry12')
		);


}

function Script12()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: מדוע ארווין מתלבט באשר לשינוי שמו?, תשובה: '+ player.GetVar('TextEntry1')
		);


}

function Script13()
{
  var player = GetPlayer();
SheetsSet('שאלה 8', 
			'שאלה: מהם הקשיים של האחים עם עלייתם לישראל?, תשובה: '+ player.GetVar('TextEntry3')
		);


}

function Script14()
{
  var player = GetPlayer();
SheetsSet('שאלה 1', 
			'שאלה: מהי ההתלבטות של המשפחה בסיפור?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

