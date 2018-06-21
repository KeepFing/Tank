//坦克的炮弹和射击函数
function createbullet(tank,fangxiang){
	var bullet1 = document.createElement('div');
		bullet1.style.width="40px";
		bullet1.style.height="40px";
		bullet1.x =tank.x;
        bullet1.y =tank.y;
		bullet1.fx=fangxiang;
		bullet1.style.top = 40*tank.x+50+"px";
		bullet1.style.left =40*tank.y+50+"px";
		bullet1.style.zIndex="11";
		bullet1.style.background="none";
		bullet1.style.position="absolute";
        document.body.appendChild(bullet1);//把bullte追加到body里
		tank1_sheji(bullet1,bullet1.fx);
	}
function tank1_sheji(bullet1,fx) {
if (fx == 1) {
	bullet1.style.left=parseInt(bullet1.style.left)-40+"px";bullet1.y--;
	bullet1.style.background="url('img/bullet-left.png')";
}
if (fx == 2) {
	bullet1.style.left=parseInt(bullet1.style.left)+40+"px";bullet1.y++;
	bullet1.style.background="url('img/bullet-right.png')";
}
if (fx == 3) {
	bullet1.style.top=parseInt(bullet1.style.top)-40+"px";bullet1.x--;
	bullet1.style.background="url('img/bullet-up.png')";
}
if (fx == 4) {
	bullet1.style.top=parseInt(bullet1.style.top)+40+"px";bullet1.x++;
	bullet1.style.background="url('img/bullet-down.png')";
}

		var Time = setTimeout(function () { tank1_sheji(bullet1,bullet1.fx); }, 100);
		
function boom(){
			var map = document.getElementById("map" + bullet1.x + bullet1.y+ k);
				map.style.background="url('img/boom.gif')";
			var boomlean = setTimeout(function () { map.style.background="url(img/road.png)"; }, 1500);
			}					
          if (a[k][bullet1.x][bullet1.y] == 4) //击毁玩家二
			{
				Time = window.clearInterval(Time);
				bullet1.parentNode.removeChild(bullet1);
				winner(1);
				fen1+=10;
				tank1_fen.innerHTML=fen1;
				nextmission(fen1,fen2);
			}
			
			 if (a[k][bullet1.x][bullet1.y] == 2) //击毁玩家一
			{
				Time = window.clearInterval(Time);
				bullet1.parentNode.removeChild(bullet1);
                winner(2);
				fen2+=10;
				tank2_fen.innerHTML=fen2;        
				nextmission(fen1,fen2);
			}
			if (a[k][bullet1.x][bullet1.y] == 1) 
			{
				boom();
				a[k][bullet1.x][bullet1.y] =0; 
				Time = window.clearInterval(Time);
				bullet1.parentNode.removeChild(bullet1);
			}
			
			if (a[k][bullet1.x][bullet1.y] == 3) 
			{
				Time = window.clearInterval(Time);
				bullet1.parentNode.removeChild(bullet1);
			}
	
			if (bullet1.x == a[k].length-1 || bullet1.y==a[k][0].length || bullet1.y == 0 || bullet1.x == 0)
			{
				Time = window.clearInterval(Time);
				 bullet1.parentNode.removeChild(bullet1);
			}
	}
