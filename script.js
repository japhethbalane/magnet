
var pinWidth, container, pins;

function init() {
	pinWidth = 50;
	
	container = document.querySelector('.container');
	container.innerHTML = '';
	container.width = window.innerWidth;   container.style.width = container.width+'px';
	container.height = window.innerHeight; container.style.height = container.height+'px';
	
	for (var i = pinWidth; i < container.width - pinWidth; i += pinWidth) {
		for (var j = pinWidth; j < container.height - pinWidth; j+= pinWidth) {
			var html = '<div class="pin" style="left:'+i+'px; top:'+j+'px"></div>'
			container.innerHTML += html;
		}
	}

	pins = document.querySelectorAll('.pin');
	for (var pin of pins) {
		pin.style.width = (pinWidth - 10) + 'px';
		pin.style.height = (3) + 'px';
		pin.style.backgroundColor = randColor();
	}

}; init();

window.addEventListener('resize', init); 

window.addEventListener("mousemove", function(e) {
	var angles , diffx, diffy;

	for (var pin of pins) {
		diffx = (pin.style.left).split('');
		diffx.pop(); diffx.pop();
		diffx = parseInt(diffx.join('')) - e.pageX;

		diffy = (pin.style.top).split('');
		diffy.pop(); diffy.pop();
		diffy = parseInt(diffy.join('')) - e.pageY;
		
		angle = -1 * (Math.atan2(diffx, diffy) * (180 / Math.PI) + 90);

		pin.style.transform = 'rotate('+angle+'deg)';
	}
});

function rBetween(min, max) {
	return parseInt(min + Math.random() * max);
}

function randColor() {
	return 'rgb('+rBetween(230,255)+','+rBetween(230,255)+','+rBetween(1,155)+')';
	return 'rgb(255,100,100)';
}