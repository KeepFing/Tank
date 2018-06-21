function move(e)
{
	var e=e||window.event;
	var keycode=e.keyCode||e.which;
	var LEFT=37;
	var RIGHT=39;
	var UP=38;
	var DOWN=40;
	var ENTER=13;//坦克1开火
	
	var W=87;
	var S=83;
	var A=65;
	var D=68;
	var J=74;//坦克2开火
///////////////////////////////////////////////////////////////////////////
	var tank1=document.getElementById("tank1");//坦克1的移动
	var tank2=document.getElementById("tank2");//坦克1的移动
///////////////////////////////////////////////////////////////////////////
	if(keycode==LEFT)
	{
		if(a[k][tank1.x][tank1.y-1]==0)
		{
			a[k][tank1.x][tank1.y]=0;
			tank1.style.left=parseInt(tank1.style.left)-40+"px";
			tank1.y--;//炮弹向左
			a[k][tank1.x][tank1.y] = 2;                   
		}
		else if(a[k][tank1.x][tank1.y-1]==5)
		{
			a[k][tank1.x][tank1.y]=0;
			tank1.style.left=parseInt(tank1.style.left)-40+"px";
			num1+=ammo;
			tank1.y--;
			var map = document.getElementById("map" + tank1.x + tank1.y+k);
			map.style.background = "url(img/road.png)";
			}
		tank1.style.background="url('img/tank1-left.png')";
		tank1.fx=1;
		}
	if(keycode==RIGHT)
	{
		if(a[k][tank1.x][tank1.y+1]==0)
		{
			a[k][tank1.x][tank1.y]=0;
			tank1.style.left=parseInt(tank1.style.left)+40+"px";
			tank1.y++;
			a[k][tank1.x][tank1.y] = 2;
			}
		else if(a[k][tank1.x][tank1.y+1]==5)
		{
			a[k][tank1.x][tank1.y]=0;
			tank1.style.left=parseInt(tank1.style.left)+40+"px";
			num1+=ammo;
			tank1.y++;
			var map = document.getElementById("map" + tank1.x + tank1.y+k);
			map.style.background = "url(img/road.png)";
			}
		tank1.style.background="url('img/tank1-right.png')";
		tank1.fx=2;
		}
	if(keycode==UP)
	{
		if(a[k][tank1.x-1][tank1.y]==0)
		{
			a[k][tank1.x][tank1.y]=0;
			tank1.style.top=parseInt(tank1.style.top)-40+"px";
			tank1.x--;
			a[k][tank1.x][tank1.y] = 2;
			}
		else if(a[k][tank1.x-1][tank1.y]==5)
		{
			a[k][tank1.x][tank1.y]=0;
			tank1.style.top=parseInt(tank1.style.top)-40+"px";
			num1+=ammo;
			tank1.x--;
			var map = document.getElementById("map" + tank1.x + tank1.y+k);
			map.style.background = "url(img/road.png)";
			}
		else{}
	tank1.style.background="url('img/tank1-up.png')";
		tank1.fx=3;
		}
	if(keycode==DOWN)
	{
		if(a[k][tank1.x+1][tank1.y]==0)
		{
			a[k][tank1.x][tank1.y]=0;
			tank1.style.top=parseInt(tank1.style.top)+40+"px";	
			tank1.x++;
			a[k][tank1.x][tank1.y] = 2;
			}
		else if(a[k][tank1.x+1][tank1.y]==5)
		{
			a[k][tank1.x][tank1.y]=0;
			tank1.style.top=parseInt(tank1.style.top)+40+"px";
			num1+=ammo;
			tank1.x++;
			var map = document.getElementById("map" + tank1.x + tank1.y+k);
			map.style.background = "url(img/road.png)";
			}
		tank1.style.background="url('img/tank1-down.png')";
		tank1.fx=4;
		}
	if (keycode==13) 
	{
		if(num1==0)
		{
			win.innerHTML="玩家一弹药不足!";
			win.style.display="block";
			setTimeout(function () { win.style.display="none"; }, 2500);
		}
		else
		{
		createbullet(tank1,tank1.fx);
		num1--;
		 }
	}document.getElementById("num1").innerHTML=num1;
	
////////////////////////////////////////////////////////////////////////////第二个坦克
	if(keycode==A)
	{
		if(a[k][tank2.x][tank2.y-1]==0)
		{
			a[k][tank2.x][tank2.y]=0;
			tank2.style.left=parseInt(tank2.style.left)-40+"px";
			tank2.y--;
			a[k][tank2.x][tank2.y]=4;
			}
		else if(a[k][tank2.x][tank2.y-1]==5)
		{
			a[k][tank2.x][tank2.y]=0;
			tank2.style.left=parseInt(tank2.style.left)-40+"px";
			num2+=ammo;
			tank2.y--;
			var map = document.getElementById("map" + tank2.x + tank2.y+k);
			map.style.background = "url(img/road.png)";
			}
			tank2.style.background="url('img/tank2-left.png')";
			tank2.fy=1;//炮弹向左
		}
	if(keycode==D)
	{
		if(a[k][tank2.x][tank2.y+1]==0)
		{
			a[k][tank2.x][tank2.y]=0;
			tank2.style.left=parseInt(tank2.style.left)+40+"px";
			tank2.y++;
			a[k][tank2.x][tank2.y]=4;
			}
		else if(a[k][tank2.x][tank2.y+1]==5)
		{
			a[k][tank2.x][tank2.y]=0;
			tank2.style.left=parseInt(tank2.style.left)+40+"px";
			num2+=ammo;
			tank2.y++;
			var map = document.getElementById("map" + tank2.x + tank2.y+k);
			map.style.background = "url(img/road.png)";
			}
			tank2.style.background="url('img/tank2-right.png')";
			tank2.fy=2;
		}
	if(keycode==W)
	{
		if(a[k][tank2.x-1][tank2.y]==0)
		{
			a[k][tank2.x][tank2.y]=0;
			tank2.style.top=parseInt(tank2.style.top)-40+"px";
			tank2.x--;
			a[k][tank2.x][tank2.y]=4;
			}
		else if(a[k][tank2.x-1][tank2.y]==5)
		{
			a[k][tank2.x][tank2.y]=0;
			tank2.style.top=parseInt(tank2.style.top)-40+"px";
			num2+=ammo;
			tank2.x--;
			var map = document.getElementById("map" + tank2.x + tank2.y+k);
			map.style.background = "url(img/road.png)";
			}
			tank2.style.background="url('img/tank2-up.png')";
			tank2.fy=3;
			
		}
	if(keycode==S)
	{
		if(a[k][tank2.x+1][tank2.y]==0)
		{
			a[k][tank2.x][tank2.y]=0;
			tank2.style.top=parseInt(tank2.style.top)+40+"px";
			tank2.x++;
			a[k][tank2.x][tank2.y]=4;
			}
		else if(a[k][tank2.x+1][tank2.y]==5)
		{
			a[k][tank2.x][tank2.y]=0;
			tank2.style.top=parseInt(tank2.style.top)+40+"px";
			num2+=ammo;
			tank2.x++;
			var map = document.getElementById("map" + tank2.x + tank2.y+k);
			map.style.background = "url(img/road.png)";
			}
			tank2.style.background="url('img/tank2-down.png')";
			tank2.fy=4;
		}
	if (keycode==J) 
	{
		if(num2==0)
		{
			win.innerHTML="玩家二弹药不足!";
			win.style.display="block";
			setTimeout(function () { win.style.display="none"; }, 2500);
		}
		else
		{
       createbullet(tank2,tank2.fy);
		num2--;
		 }
	}document.getElementById("num2").innerHTML=num2;
	
	if(window.event && window.event.keyCode == 123) {
	  event.keyCode=0;
	  event.returnValue=false;
	 }
	 if( window.console && window.console.firebug ) {
    document.body.innerHTML = "";
	 } 
    if (123 == (e || {}).keyCode)  return false;
}
document.onkeydown = move;
