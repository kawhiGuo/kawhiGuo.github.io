var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
var htmlDom = document.getElementsByTagName('html')[0];

htmlDom.style.fontSize = screenWidth / 10 + 'px';


window.addEventListener('resize',function(){
		var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
		htmlDom.style.fontSize = screenWidth / 10 + 'px';
		console.log(htmlDom.style.fontSize);
});