//Smooth content loader 1.0
//© 2014 by HaeriStudios

// Parameter info:
// holder	(id/class name):		The parent <div>
// loader	(id/class name):		<div> where it should be loaded
// loadFrom	(src + id/class name):		directory of file from where it should be loaded + name of <div>
// eq		(int):				specify which <div> if found multiple with same name. (0-indexed)
// animHeight	(bool): 			should the height be animated?
// animWidth	(bool):				should the width be animated?	
// speed	(int):				animation speed

//callback	(function):			calls a set function when content has finished loading in.(optional)
//callback2	(function):			calls a set function when content has finished fading in.(optional)

function smoothAjax(holder, loader, loadFrom, eq,  animHeight, animWidth, speed, callback, callback2) {
	
	var oldHeight, newHeight, oldWidth, newWidth;
	
	//Set not initialized parameter
	eq = (typeof eq == 'undefined' ? 0 : eq);
	speed = (typeof speed == 'undefined' ? 250 : speed);
	
	//get height
	if(animHeight) {
		oldHeight = $(holder).height();
		$(holder).css("height", oldHeight);
	}
	
	//get width
	if(animWidth) {
		oldWidth = $(holder).width();
		$(holder).css("width", oldWidth);
	}
	
	//things happen
	$(loader).hide();
	$(loader).css("position","absolute");
	$(loader).load(loadFrom + ":eq("+ eq +")", function() {
		
		//check if success callback is needed
		if (typeof callback != 'undefined') {
			callback();
		}
		
		//callback2 already called?
		var call2 = false;
		
		//set width
		if (animWidth) {
			$(loader).css("white-space", "nowrap");
			newWidth = $(loader).width();
			$(holder).animate({width: newWidth}, speed, function() {
				//fade in
				$(loader).css("position","initial");
				$(loader).fadeIn();
				$(holder).css("width","initial");
				if (typeof callback2 != 'undefined' && call2 = false) {
					callback2();
					call2 = true;
				}
			});
		}
		
		//set height
		if(animHeight) {
			newHeight = $(loader).height();
			$(holder).animate({height: newHeight}, speed, function() {
				//fade in
				$(loader).css("position","initial");
				$(loader).fadeIn();
				$(holder).css("height","initial");
				if (typeof callback2 != 'undefined' && call2 = false) {
					callback2();
					call2 = true;
				}
			});
		}
	});
}