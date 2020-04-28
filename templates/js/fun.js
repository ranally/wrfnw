// JavaScript Document
var oButton = document.getElementsByClassName('button')[0];  //模式选择按钮
var fButton = document.getElementsByClassName('fbutton'); //物理量选择按
var fButton1 = document.getElementsByClassName('fbutton1')[0]; //单站产品物理量选择按钮
var oButton1 = document.getElementsByClassName('button1')[0]; //单站模式选择按钮
var fsButton = document.getElementsByClassName('fsbutton')[0];  //单站机场选择按钮
var tButton = document.getElementsByClassName('tbutton'); //时次选择按钮
var oDate = document.getElementById('sdate');             //创建的日历对象
var oImg = document.getElementById('img');	// 包装图片的div
var oInitialT = document.getElementById('initialtime'); //初始场时次下拉菜单对象
var menubox_wrf = document.getElementById('menubox_wrf'); //包装物理量按钮的div
var all_menubox=document.getElementById('all_menubox');
var wrf_singlebox=document.getElementById('wrf_singlebox');
var all_singlebox=document.getElementById('all_singlebox');


var oInitialval = oInitialT.getElementsByTagName('option');//时次下拉菜单选择项
var timebox = document.getElementById('timebox');//包装时次按钮的div
var menu = document.getElementById('menu');//包装模式按钮的div
var odownBtn1=document.getElementById('downbtn1');  //用来折叠模式按钮
var odownBtn2=document.getElementById('downbtn2');  //用来折叠气象要素按钮
var odownBtn3=document.getElementById('downbtn3');  //用来折叠时间按钮
var odownBtn4=document.getElementById('downbtn4');  //用来折叠单站产品div
var mainmenu=document.getElementById('main_menu');   //顶层菜单栏
var singleStation=document.getElementById('single_station'); //单站产品div
var oLi=mainmenu.getElementsByTagName('li'); //顶层菜单排列对象
var oplayDiv=document.getElementById('playdiv');  //动画播放div
var oBackward=document.getElementById('backward'); // 上一张播放按钮
var oPlay=document.getElementById('play'); //播放按钮
var oPause=document.getElementById('pause'); //暂停按钮
var oForward=document.getElementById('forward'); //下一张播放按钮
var oT1=document.getElementById('t1'); //动画间隔按钮
var oT2=document.getElementById('t2');   //动画间隔按
var oT3=document.getElementById('t3'); //动画间隔按
var oT4=document.getElementById('t4'); //动画间隔按
var oTn=document.getElementById('tn'); //动画间隔按
var omarkId=1;
var sDate="";
var sImg="";
var buttonVal1="";
var buttonVal="";
var fbuttonVal="";
var fbuttonVal1="";
var fsbuttonVal="";
var tbuttonVal="";
var time=new Date();
var nDate=time.toLocaleDateString();
var nDay=time.getDate();
var nMonth=time.getMonth();
var nYear=time.getFullYear();
var nHour=time.getHours();
var nnDay="";
var nnMonth="";
var ssDate="";
var oInitialH=oInitialT.value;
var nnYear=String(nYear);
var iinitialH="";
var insDay="";
var insMonth="";
var inMonth=Number(nMonth)+1;
//alert(nMonth);
//alert(inMonth);
var insYear="";
var inYear=nYear;
var inDay=nDay-1;
//以上为定义的全局变量
if(inDay===0){
	inMonth=inMonth-1;
	if(inMonth===1||inMonth===3||inMonth===5||inMonth===7||inMonth===8||inMonth===10){
		inDay=31;}	
	if(inMonth===4||inMonth===6||inMonth===9||inMonth===11){
		inDay=30;}
	if(inMonth===2 && nYear%4===0){
		inDay=29;}
	if(inMonth===2 && nYear%4!==0){
		inDay=28;}
	if(inMonth===0){
			inMonth=12;
			inYear=nYear-1;
			inDay=31;
	}
}
//alert(nMonth);
//alert(inMonth);
//alert(inDay);

if(nHour>=0 && nHour<3){
	oInitialH='00';
	oInitialval[0].selected=true;}
if(nHour>=3 && nHour<15){
	oInitialH='12';
	oInitialval[2].selected=true;}
if(nHour>=15){
	inDay=nDay;
	inMonth=nMonth+1;
	oInitialH='00';
	oInitialval[0].selected=true;}

if (inDay<10) insDay="0"+String(inDay);
else insDay=String(inDay);
if (inMonth<10) insMonth="0"+String(inMonth);
else insMonth=String(inMonth);
insYear=String(inYear);

if (nDay<10) nnDay="0"+String(nDay);
else nnDay=String(nDay);
if (nMonth<10) nnMonth="0"+String(nMonth+1);
else nnMonth=String(nMonth);
//显示左右按钮功能如下

Initial();//初始化程序；
// 下面两行将当天日期设置为日历初始显示时间
sDate=insYear+"-"+insMonth+"-"+insDay;
oDate.setAttribute('value',sDate);

oInitialT.onchange=function(){
	oInitialH=this.value;
	switch(singleStation.style.display){
		case 'none':GetPicture();
		break;
		case 'block':GetsPicture();
		break;
		default:GetPicture();}
	}
oDate.onchange=function(){
	sDate=this.value;
	switch(singleStation.style.display){
		case 'none':GetPicture();
		break;
		case 'block':GetsPicture();
		break;
		default:GetPicture();}
    }
oButton.onclick=function() {
  oButton.removeAttribute('id');
  buttonVal=this.getAttribute('value');
  GetPicture();
  this.setAttribute('id','on');
}

oButton1.onclick=function() {
    oButton1.removeAttribute('id');
    buttonVal1=this.getAttribute('value');
    GetsPicture();
	this.setAttribute('id','on');
	}

for(i = 0;i<fButton.length;i++) {
    fButton[i].onclick=function() {
    for(i=0;i<fButton.length;i++) {
    fButton[i].removeAttribute('id');
    }
	fbuttonVal=this.getAttribute('value');
	GetPicture(); 
	// 通过按钮实现物理量的选取
   this.setAttribute('id','on1');
    }
}

    fButton1.onclick=function() {
    fButton1.removeAttribute('id');
	fbuttonVal1=this.getAttribute('value');
	oImg.style.width='90%';
	GetsPicture(); 
	this.setAttribute('id','on1');
    }

    fsButton.onclick=function() {
    fsButton.removeAttribute('id');
	fsbuttonVal=this.getAttribute('value');
	GetsPicture(); 
	// 通过按钮实现物理量的选取
   this.setAttribute('id','on1');
    }
for(i = 0;i<tButton.length;i++) {
   tButton[i].onclick=function() {
   for(i=0;i<tButton.length;i++) {
       tButton[i].removeAttribute('id');
   }
   tbuttonVal=this.getAttribute('value');
   GetPicture();
   // 通过按钮实现预报时次的选取
   this.setAttribute('id','on2');
   omarkId=parseInt(this.getAttribute('index'))-1;
   //alert(omarkId);
   } 
}
//以下为鼠标事件（图片滚动播放）
oBackward.onclick=function(){
	singleStation.style.display='none';
    menu.style.display='block';
    timebox.style.display='block';
	prevPic();
	oBackward.src='../static/images/backward0.png';
	oForward.src='../static/images/forward1.png';
	oPlay.src='../static/images/play1.png';
	oPause.src='../static/images/pause1.png';
}

oForward.onclick=function(){
	singleStation.style.display='none';
    menu.style.display='block';
    timebox.style.display='block';
	nextPic();
	oForward.src='../static/images/forward0.png';
	oBackward.src='../static/images/backward1.png';
	//oPlay.src='images/play1.png';
	oPause.src='../static/images/pause1.png';
}

var oT=1000;
oT1.onclick=function(){
	clearInterval(timer);
	oT=parseInt(oT1.value*1000);
	oT1.setAttribute('class','on');
	oT2.setAttribute('class','interval');
	oT3.setAttribute('class','interval');
	var oTt=parseInt(oT)/1000;
    oTn.value="T:"+oTt+"s";
    oTn.setAttribute('class','on');}
	
oT2.onclick=function(){
	clearInterval(timer);
	oT=parseInt(oT2.value*1000);
	oT2.setAttribute('class','on');
	oT1.setAttribute('class','interval');
	oT3.setAttribute('class','interval');
	var oTt=parseInt(oT)/1000;
    oTn.value="T:"+oTt+"s";
    oTn.setAttribute('class','on');}
	
oT3.onclick=function(){
	clearInterval(timer);
	oT=parseInt(oT3.value*1000)
	oT3.setAttribute('class','on');
	oT2.setAttribute('class','interval');
	oT1.setAttribute('class','interval');
	var oTt=parseInt(oT)/1000;
    oTn.value="T:"+oTt+"s";
    oTn.setAttribute('class','on');}	
	
oT4.onclick=function(){
	clearInterval(timer);
	oT=parseInt(oT+1000);
	var oTt=parseInt(oT)/1000;
    oTn.value="T:"+oTt+"s";
    oTn.setAttribute('class','on');}
if(oT==0){
	oT==1000;}
if(oT==1000){
	oT1.setAttribute('class','on');}
if(oT==2000){
	oT2.setAttribute('class','on');}
if(oT==3000){
	oT3.setAttribute('class','on');}

var timer="";
	oPause.onclick=oImg.onclick=function()
	{
		singleStation.style.display='none';
        menu.style.display='block';
        timebox.style.display='block';
		oPause.src='../static/images/pause.png';
		oPlay.src='../static/images/play1.png';
		oForward.src='../static/images/forward1.png';
		oBackward.src='../static/images/backward1.png';
		clearInterval(timer);
	}
	oPlay.onclick=oImg.ondblclick=function()
	{
		singleStation.style.display='none';
        menu.style.display='block';
        timebox.style.display='block';
		oPlay.src='../static/images/play.png';
		oPause.src='../static/images/pause1.png';
		//oForward.src='images/forward1.png';
		oBackward.src='../static/images/backward1.png';
		timer=setInterval(oForward.onclick,oT);
	}

//以下为键盘事件	
document.onkeydown=function(event){
  singleStation.style.display='none';
  menu.style.display='block';
  timebox.style.display='block';
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if(e && e.keyCode==37){ 
    prevPic();
   }
  if(e && e.keyCode==39){ 
   nextPic();  
  }
}


odownBtn1.onclick=function(){
	GetPicture();
	menu.style.display =!menu.style.display||menu.style.display=='block' ? 'none':'block';
	singleStation.style.display='none';}
	
odownBtn2.onclick=function(){
	GetPicture();
	all_menubox.style.display =!all_menubox.style.display||all_menubox.style.display=='block' ? 'none':'block';
	singleStation.style.display='none';}
	
odownBtn4.onclick=function(){
	Initial_single();
	GetsPicture();
	singleStation.style.display =!singleStation.style.display||singleStation.style.display=='none' ? 'block':'none';
	all_menubox.style.display='none';
	menu.style.display='none';
	timebox.style.display='none';}
	
odownBtn3.onclick=function(){
	GetPicture();
	timebox.style.display =!timebox.style.display||timebox.style.display=='block' ? 'none':'block';
	singleStation.style.display='none';}


for(i=0;i<oLi.length;i++){
	oLi[i].onmouseover=function(){
		this.setAttribute('class','active');}
	oLi[i].onmouseout=function(){
		this.removeAttribute('class');}
}

/*
oImg.src=sImg;
oImg.addEventListener('load', function(event) {
       console.log("图片加载成功")
});
*/

function GetPicture(){
	sImg="../static/images/"+sDate.substring(0,4)+sDate.substring(5,7)+sDate.substring(8,10)+oInitialH+"/"+buttonVal+"_"+fbuttonVal+"_"+tbuttonVal+"h.png";
    //alert(sImg);
	oImg.setAttribute('src',sImg);
}
function GetsPicture(){
	sImg1="../static/images/"+sDate.substring(0,4)+sDate.substring(5,7)+sDate.substring(8,10)+oInitialH+"/"+buttonVal1+"_"+fsbuttonVal1+"_"+fbuttonVal1+".png";
    oImg.setAttribute('src',sImg1);
}	
function Initial(){
	clearInterval(timer);
	oButton.setAttribute('id','on');
	fButton[2].setAttribute('id','on1');
	tButton[1].setAttribute('id','on2');
    menubox_wrf.style.display='block';

	initialTime=insYear+insMonth+insDay+oInitialH;
	buttonVal="wrf";
	fbuttonVal="ht_850hpa";
	tbuttonVal="01";
	sImg="../static/images/"+initialTime+"/"+buttonVal+"_"+fbuttonVal+"_"+tbuttonVal+"h.png";
    oImg.setAttribute('src',sImg);
}

function Initial_single(){
	clearInterval(timer);
	oButton1.setAttribute('id','on');
	fsButton.setAttribute('id','on1');
	fButton1.setAttribute('id','on2');
	
	wrf_singlebox.style.display='block';
    oImg.style.width='90%';
	initialTime=insYear+insMonth+insDay+oInitialH;
	buttonVal1="wrf";
	fbuttonVal1="zugy";
	fsbuttonVal="rain24_sfc";
	sImg1="../static/images/"+initialTime+"/"+buttonVal1+"_"+fsbuttonVal+"_"+fbuttonVal1+".png";
    oImg.setAttribute('src',sImg1);
}

var tMax=48;
var tp=1;
var tmin=0;

function prevPic(){
	tButton[omarkId].removeAttribute('id');
	omarkId=Number(omarkId)-tp;
	tmin=0
	//alert(omarkId);
	if(omarkId<tmin){
		omarkId=tMax;
		tbuttonVal=tButton[omarkId].getAttribute('value');
		GetPicture();
		tButton[omarkId].setAttribute('id','on2');}
	else {
		tbuttonVal=tButton[omarkId].getAttribute('value');
		GetPicture();
		tButton[omarkId].setAttribute('id','on2');} 
}

function nextPic() {
	tButton[omarkId].removeAttribute('id');
	omarkId=Number(omarkId)+tp;
	//alert(omarkId);		
	if(omarkId>tMax){
		omarkId=tmin;
		tbuttonVal=tButton[omarkId].getAttribute('value');
		GetPicture();
		tButton[omarkId].setAttribute('id','on2');}
	else {
		tbuttonVal=tButton[omarkId].getAttribute('value');
		GetPicture();
		tButton[omarkId].setAttribute('id','on2');}	
}

//下面是完美运动框架
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
	
}
function startMove(obj,element,iTarget,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{
		var cur=0;
		if(element=='opacity')
		{
			cur=Math.round(parseFloat(getStyle(obj,element))*100);
		}
		else
		{
			cur=parseInt(getStyle(obj,element));
		}
		var speed=(iTarget-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur==iTarget)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}
		else
		{
			if(element=='opacity')
			{
				obj.style[element]=(cur+speed)/100;
				obj.style.filter='alpha(opacity:'+cur+speed+')';
			}
			else
			{
			   obj.style[element]=cur+speed+'px';
			}
		}
		
	},30);
	
}
