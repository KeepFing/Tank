var G;
function winner(G){
	var winnr=document.getElementById("note");
	winnr.setAttribute('class','wrapper');
	winnr.style.display="block";
	if(G==1){
		winnr.innerHTML="玩家一取得本局胜利";
		}
	if(G==2){
		winnr.innerHTML="玩家二取得本局胜利";
		}
	setTimeout(function () { winnr.style.display="none"; }, 1500);
}
function nextmission(fen1,fen2){
	var mission=document.getElementById("mission");
	k++;
	num1+=5;
	num2+=5;
	if(k==2){
		mission.innerHTML="第三关";
		var miss = setTimeout(function () { mission.style.display="none"; }, 2000);
		}
	if(k==3)
	  {
		  gameover(fen1,fen2);
	  }
	Map();
	}
	
function gameover(fen1,fen2){
	var perfect;
	var winner=document.getElementById("winner");
	if(fen1>fen2){
		perfect="赢家：玩家一";
		}
	if(fen2>fen1){
		perfect="赢家：玩家二";
		}
	if(fen2==fen1){
		perfect="平局";
		}
	main.style.display="none";
	num_1.style.display="none";
	num_2.style.display="none";
	end.style.display="block";
	winner.innerHTML=perfect;
	}