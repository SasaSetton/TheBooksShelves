function ExecuteScript(strId)
{
  switch (strId)
  {
      case "661xEWIPrRL":
        Script1();
        break;
      case "5XMGwgHehJZ":
        Script2();
        break;
      case "6PzOQynLgRa":
        Script3();
        break;
      case "5oAaZA0FsSb":
        Script4();
        break;
      case "5uZI8KNJGt7":
        Script5();
        break;
      case "5Wqc4JF2gGZ":
        Script6();
        break;
      case "68qHOwX4qLo":
        Script7();
        break;
      case "5u9oA4ifqU7":
        Script8();
        break;
      case "6CwA84xdNcA":
        Script9();
        break;
      case "5x5CfiEfgvl":
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
SheetsSet('משימת כתיבה', 
			player.GetVar('פנייהלנמען') +', '+ player.GetVar('משפטפתיחה') +' '+ player.GetVar('גוףהמכתב') +' '+ player.GetVar('משפטסיכום') +' '+ player.GetVar('חתימתהמוען')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מה דעתך על דמותו של פלוריאן?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מה מבין פלוריאן על שנאת יהודים בסוף הסיפור?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מה דעתך על הסיפור?, תשובה: '+ player.GetVar('TextEntry12')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 1', 
			'שאלה: איך הרגיש פלוריאן כשאווה הסתתרה בביתו?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

