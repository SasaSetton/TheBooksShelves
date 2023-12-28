function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67FsdyWvPZy":
        Script1();
        break;
      case "6W3koddrIgD":
        Script2();
        break;
      case "6f6mQCwZyXS":
        Script3();
        break;
      case "6rcvYbAnNvM":
        Script4();
        break;
      case "6OsI9APHNdr":
        Script5();
        break;
      case "6lm2pMnWESA":
        Script6();
        break;
      case "5axSpjUUTY6":
        Script7();
        break;
      case "6MNmAtXtfFZ":
        Script8();
        break;
      case "6nuFr2KDbRw":
        Script9();
        break;
      case "6I9RsBixEXe":
        Script10();
        break;
      case "6DCZK96Sg6I":
        Script11();
        break;
      case "63eeZi2qCE2":
        Script12();
        break;
      case "5WGFKWttDoA":
        Script13();
        break;
      case "6Zcekp0Vk2U":
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
			'שאלה: מָה חָשַׁבְתָּ/חָשַׁבְתְּ עַל אֵמִילְיָה?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: מַדּוּעַ אַנְשֵׁי הָעִיר מְגַלִּים לְאֶמִלְיָה אֶת הַסּוֹדוֹת שֶׁלָּהֶם?, תשובה: '+ player.GetVar('TextEntry26')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 7', 
			'שאלה: מָה הִשְׁתַּנָּה בָּעִיר שֶׁל אֶמִילְיָה בִּזְכוּת חֲנוּת הַכּוֹבָעִים?, תשובה: '+ player.GetVar('TextEntry1')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 8', 
			'שאלה: בְּסִיּוּם הַסִּפּוּר שׁוּב הָרוּחַ לָקחָה אֶת הַכּוֹבַע. מַדּוּעַ הַפַּעַם אֶמִלְיָה לֹא רָצָה אַחֲרָיו?, תשובה: '+ player.GetVar('TextEntry2')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 9', 
			'שאלה: מַהוּ הַחֲלוֹם שֶׁלְּךָ/שֶׁלָּךְ?, תשובה: '+ player.GetVar('TextEntry3')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: מַדּוּעַ אֶמִילְיָה מַחֲלִיטָה לִפְתֹּחַ חֲנוּת כּוֹבָעִים?, תשובה: '+ player.GetVar('TextEntry16')
		);


}

function Script12()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: אֵיךְ הָאֲנָשִׁים הִרְגִּישׁוּ כְּשֶׁחָבְשׁוּ אֶת הַכּוֹבָעִים?, תשובה: '+ player.GetVar('TextEntry25')
		);


}

function Script13()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: הַחֲנוּת שֶׁל אֶמִילְיָה הִיא לֹא חֲנוּת רְגִילָה. מָה מְיֻחָד בַּחֲנוּת שֶׁלָּהּ?, תשובה: '+ player.GetVar('TextEntry22')
		);


}

function Script14()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: בַּהַתְחָלָה אַף אֶחָד לֹא מְעֻנְיָן לְהִכָּנֵס לַחֲנוּת שֶׁל אֶמִילְיָה. מַדּוּעַ?, תשובה: '+ player.GetVar('TextEntry24')
		);


}

