window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  if(void 0===window.stencilsheets){t="https://cluelabs.com/stencil/display/widget-sheets-init-v2",s={authtool:"sl",chart:"MTQ5M3w0NDQ4fDA4ZmFlMGMzM2ZmMzVkNGE5MGNhN2FiNzFiNjlmNDE5"},a=Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&");(xhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var e=this.responseText,t=document.getElementsByTagName("head")[0],s=document.createElement("script");t.appendChild(s),s.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},xhttp.open("POST",t,!0),xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),xhttp.send(a)}
        
}

window.Script2 = function()
{
  var player = GetPlayer();
SheetsSet('כינוי', player.GetVar('name'));
}

window.Script3 = function()
{
  var player = GetPlayer();
SheetsSet('שם בית החולים', player.GetVar('HospitalName'));
}

window.Script4 = function()
{
  var player = GetPlayer();
SheetsSet('שם המדף', player.GetVar('shelf'));
}

window.Script5 = function()
{
  var player = GetPlayer();
SheetsSet('שם הספר', player.GetVar('BookName'));
}

window.Script6 = function()
{
  var player = GetPlayer();
SheetsSet('שאלה 4', 
			'שאלה: אֵיזוֹ מַתָּנָה מֻשְׁלֶמֶת הָיִיתָ רוֹצֶה/הָיִיתְ רוֹצָה לְקבֵּל?, תשובה: '+ player.GetVar('TextEntry3')
		);


}

};
