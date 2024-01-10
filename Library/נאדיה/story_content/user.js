function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5VlU2ANvZjT":
        Script1();
        break;
      case "5jS1grYwhDa":
        Script2();
        break;
      case "5aNLchMOnzi":
        Script3();
        break;
      case "6i0uQtt7PKy":
        Script4();
        break;
      case "6CLqA19B884":
        Script5();
        break;
      case "6PFYzk78lHH":
        Script6();
        break;
      case "6RQ0ZXA0mNH":
        Script7();
        break;
      case "5pvNQYabsu0":
        Script8();
        break;
      case "6gh6I9wwLWp":
        Script9();
        break;
      case "6Uj7oWSysq3":
        Script10();
        break;
      case "64ID40W6yUC":
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
			'שאלה: מהן התכונות הבולטות של נאדיה?, תשובה: '+ player.GetVar('TextEntry15')
		);


}

function Script7()
{
  var player = GetPlayer();
SheetsSet('שאלה 2', 
			'שאלה: כיצד התנהגו בני הנוער בבית הספר לנאדיה?, תשובה: '+ player.GetVar('TextEntry10')
		);


}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שאלה 3', 
			'שאלה: מה היו המורים והמדריכים צריכים לעשות, כדי לסייע בהשתלבותה של נאדיה?, תשובה: '+ player.GetVar('TextEntry11')
		);


}

function Script9()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: אם הייתם פוגשים את נאדיה, מה הייתם מייעצים לה?, תשובה: '+ player.GetVar('TextEntry12')
		);


}

function Script10()
{
  var player = GetPlayer();
SheetsSet('שאלה 5', 
			'שאלה: מהי לדעתכם הדרך הטובה ביותר להגשמת חלומה של נאדיה?, תשובה: '+ player.GetVar('TextEntry')
		);


}

function Script11()
{
  var player = GetPlayer();
SheetsSet('שאלה 6', 
			'שאלה: כיצד הסתיים הסיפור?, תשובה: '+ player.GetVar('TextEntry13')
		);


}

