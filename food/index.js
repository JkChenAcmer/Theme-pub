// JavaScript Document


function reset(){
	var element=document.getElementById("PIC");
	element.style.width=document.documentElement.clientWidth-600;
	element.height=max(780,element.style.width*78/125);
}

function fadeIn(nam,speed){
	speed/=10;
	var element=document.getElementById(nam);
    if(element.style.opacity !==1){
        var num = 0;
        var st = setInterval(function(){
        num++;
        element.style.opacity = num/10;
        if(num>=10)  {  clearInterval(st);  }
        },speed);
    }
}

function fadeOut(nam,speed){
	speed/=10;
	var element=document.getElementById(nam);
    if(element.style.opacity !==0){
        var num = 10;
        var st = setInterval(function(){
			num--;
			element.style.opacity = num / 10 ;
			if(num<=0)  {   clearInterval(st);  }
        },speed);
    }
}


function show_PIC(p) { 
	//alert(document.documentElement.clientWidth); 1920
	//alert("xxx");
	var speed=100;
	fadeOut("PIC",speed);
	setTimeout(function(){
		var box=document.getElementById("PIC");
		box.style.backgroundImage=p;
		fadeIn("PIC",speed);
	},speed);
}