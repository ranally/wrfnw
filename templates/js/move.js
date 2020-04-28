// JavaScript Document
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