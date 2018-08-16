(function(){

	var winWidth;
	function init(){
		var winWidth = window.innerWidth > 750 ? 750 : window.innerWidth;
		document.getElementsByTagName('html')[0].style.fontSize = winWidth / 10 + 'px';
	}
	init();

	window.addEventListener('resize', function(){
		init();
	});
	window.addEventListener('DOMContentLoaded', function(){
		if(winWidth !== window.innerWidth && 'ontouchstart' in window){
			document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px';
		}
	});
})();