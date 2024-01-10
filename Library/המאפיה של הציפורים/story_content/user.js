function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zmb8PaJaKu":
        Script1();
        break;
      case "6BA4II1cZEk":
        Script2();
        break;
      case "6TJGeuwiFaC":
        Script3();
        break;
      case "6eECh1KlF87":
        Script4();
        break;
      case "6WfeLLy3CgV":
        Script5();
        break;
      case "5Zd1Rjtz3qS":
        Script6();
        break;
      case "5bHKPCj69wB":
        Script7();
        break;
      case "5p4RMPZSSpm":
        Script8();
        break;
      case "619KOqAmzlC":
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
SheetsSet('שאלה 1', 
			'שאלה: מָה דַּעְתְּךָ/דַּעְתֵּךְ עַל דְּמוּתוֹ שֶׁל יוֹאָב?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מַדּוּעַ לְדַּעְתְּךָ/לְדַּעְתֵּךְ הַסּוֹפֶרֶת כָּתְבָה אֶת הַסִּפּוּר?, תשובה: '+ player.GetVar('TextEntry9')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מָהֵם הַמַּאֲכָלִים הָאֲהוּבִים עָלֶיךָ/עָלַיִךְ?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('משימת כתיבה', 
			'1. ' +player.GetVar('TextEntry11') +'   2. '+ player.GetVar('TextEntry12') +'   3. '+ player.GetVar('TextEntry13') +'   4. '+ player.GetVar('TextEntry14') +'   5. '+ player.GetVar('TextEntry16')
		);



}

