function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VkbOYsvSx3":
        Script1();
        break;
      case "6HZrXJ5cFfB":
        Script2();
        break;
      case "6YOH7bvicaX":
        Script3();
        break;
      case "6OAlHgudl4o":
        Script4();
        break;
      case "6DRvvXtRYt8":
        Script5();
        break;
      case "6D6uOkTQgHk":
        Script6();
        break;
      case "5oTDGzWqDIV":
        Script7();
        break;
      case "6XZLLZqGdvo":
        Script8();
        break;
      case "5tu3OYc0Rk0":
        Script9();
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
			'שאלה: מַדּוּעַ הַמּוֹרִים לֹא קבְּלוּ אֶת הַנְּכָדִים לְבֵית הַסֵּפֶר?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('משימת כתיבה', 
			player.GetVar('לכבוד') +player.GetVar('פנייהלנמען') +', '+ player.GetVar('תפקידהנמען')+'.       ' + player.GetVar('הנדון') + player.GetVar('משפטפתיחה') +'.     '+ player.GetVar('גוףהמכתב') +'    '+player.GetVar('בכבוד') + player.GetVar('חתימתהמוען')+', '+ player.GetVar('תפקידהמוען')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: הִתְבּוֹנֵן/הִתְבּוֹנְנִי בָּאִיּוּר הַבָּא, וְחַבֵּר/חַבְּרִי סְבִיבוֹ סִפּוּר אָלֵגוֹרִי, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 1', 
			'שאלה: מָה חָשַׁבְתָּ/חָשַׁבְתְּ עַל הַסָּבְתָא בַּסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

