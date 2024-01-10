function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5krVujsHvrf":
        Script1();
        break;
      case "5wh8BLHyr0T":
        Script2();
        break;
      case "6nzlld0aOcv":
        Script3();
        break;
      case "69bLUFDG5Cy":
        Script4();
        break;
      case "5Vb3B4L52T3":
        Script5();
        break;
      case "6qEw9ee8YUc":
        Script6();
        break;
      case "5kGAGeccbQ7":
        Script7();
        break;
      case "6bTYlbTwJwR":
        Script8();
        break;
      case "62p7GUhtKKy":
        Script9();
        break;
      case "5uyQQ8yXHvY":
        Script10();
        break;
      case "6EursmdulwR":
        Script11();
        break;
      case "6CVUkkPP1lS":
        Script12();
        break;
      case "65WBheaurwz":
        Script13();
        break;
      case "6IsmmLqeNzX":
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
SheetsSet('שאלה 1', 
			'שאלה: כֵּיצַד הָיִיתָ/הָיִית מְתָאֲרִים אֶת רוֹזָלִינְדָה?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מָה רוֹזָלִינְדָה הִרְגִּישָׁה כְּשֶׁהִיא עָבְרָה דִּירָה?, תשובה: '+ player.GetVar('TextEntry26')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מַדּוּעַ רוֹזְלִינְדָּה רָצְתָה לְהִתְקרֵב לְאִיתַי וּלְאִמּוֹ?, תשובה: '+ player.GetVar('TextEntry1')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: הַסִּפּוּר מַצִּיג בְּפָנֵינוּ סוּגִים שׁוֹנִים שֶׁל מִשְׁפָּחוֹת. מַהִי מִשְׁפָּחָה?, תשובה: '+ player.GetVar('TextEntry2')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: כְּתֹב/כִּתְבִי עַל הַמִּשְׁפָּחָה שֶׁלְּךָ/שֶׁלָּךְ., תשובה: '+ player.GetVar('TextEntry3')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: בְּסוֹף הַסִּפּוּר רוֹזָלִינְדָה וְהַחֲבֵרִים הַחֲדָשִׁים יוֹשְׁבִים עַל עָנָף גָּבוֹהַּ בְּצַמֶּרֶת עֵץ הָאַלּוֹן שֶׁלָּהּ. מַדּוּעַ הֵם יוֹשְׁבִים שָׁם? לָמָּה בָּחֲרוּ לָשֶׁבֶת עַל צַמֶּרֶת הָעֵץ? , תשובה: '+ player.GetVar('TextEntry25')
		);


}

function Script12()
{
  window.print();
}

function Script13()
{
  window.print();
}

function Script14()
{
  window.print();
}

