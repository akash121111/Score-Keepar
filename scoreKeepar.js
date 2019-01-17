var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var reset=document.querySelector("#reset");
var num=document.querySelector("input");
var winingScoreDisplay=document.querySelector("p span");
var p1Score=0;
var p2Score=0;
var gameWining=5;
var gameOver =false;

p1.addEventListener('click', function() {
	p1Score++;
	if(!gameOver)
	{

		if(p1Score===gameWining)
		{
		p1Display.classList.add("co");
	    gameOver=true;
        }
     p1Display.textContent =p1Score;
     }

 });

p2.addEventListener('click', function() {
	p2Score++;
	if(!gameOver)
	{
		if(p2Score===gameWining){
			p2Display.classList.add("co");

	         gameOver=true;
}
	p2Display.textContent =p2Score;
}

});
reset.addEventListener('click', function() {
	clear();
});
function clear(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent =p1Score;
	p2Display.textContent =p2Score;
	p1Display.classList.remove("co");
	p2Display.classList.remove("co");
	gameOver=false;
}

num.addEventListener("change", function(){
	winingScoreDisplay.textContent=num.value;
	gameWining =Number(num.value);
	clear();
})

