
	var num1=15;//坦克1的炮弹数量
	var fx;	//坦克1的炮弹方向
	var num2=15;//坦克2的炮弹数量
	var fy; //坦克2的炮弹方向
	var ammo=5;	
	var win=document.getElementById("win");
	var menu=document.getElementById("menu");
	
	var main=document.getElementById("main");
	
	var end=document.getElementById("end");
	var num_1=document.getElementById("left-framwork");
	var num_2=document.getElementById("right-framwork");
	
	var fen1=0;
	var fen2=0;
	var fen=document.getElementById("fenshu");
	var tank1_fen=document.getElementById("tank1_fen");
	var tank2_fen=document.getElementById("tank2_fen");

function startgame(){
document.getElementById("start").onclick=function(){
	Map();
	menu.style.display="none";
	fen.style.display="block";
	};
document.getElementById("exit").onclick=function(){
	window.close();
	};
}
startgame();
