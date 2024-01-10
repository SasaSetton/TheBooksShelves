function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Pv3BsLOacK":
        Script1();
        break;
      case "5cHJHfZScZ9":
        Script2();
        break;
      case "6nQvQ5CrEM8":
        Script3();
        break;
      case "6ang0widmFf":
        Script4();
        break;
      case "5enuAVCT4jt":
        Script5();
        break;
      case "6bqjNKY8SXn":
        Script6();
        break;
      case "5ZQxcM5WRI7":
        Script7();
        break;
      case "622dKl0f8Kl":
        Script8();
        break;
      case "6V1lYsJ465E":
        Script9();
        break;
      case "67Hqkio4W2c":
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
			'שאלה: כֵּיצַד נִתָּן לְתָאֵר אֶת הַיְּלָדִים בְּכִתָּתוֹ שֶׁל דָּוִיד?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מַדּוּעַ הַפְּרָחִים שֶׁל דָּוִיד נָשְׁרוּ?, תשובה: '+ player.GetVar('TextEntry9')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מַדּוּעַ הַיְּלָדִים הִתְרַחֲקוּ מִדָּוִיד?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: מָה הִרְגִּישׁ דָּוִיד כְּשֶׁהַפְּרָחִים שֶׁלּוֹ נָשְׁרוּ?, תשובה: '+ player.GetVar('TextEntry17')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: מָה חָשַׁבְתָּ/חָשַׁבְתְּ עַל הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

