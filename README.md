smoothAjax
==========

This "plugin" allows for content to be loaded in with Ajax and adds an animation to make the load process look smooth.
JQuery is required to make this work.

to call the function you need to type:

smoothAjax(holder, loader, loadFrom, eq,  animHeight, animWidth, speed, callback, callback2);

some information about the parameter:
holder	    (id/class name):		The parent <div>
loader	    (id/class name):		<div> where it should be loaded
loadFrom	(src + id/class name):	directory of file from where it should be loaded + name of <div>
eq		    (int):				    specify which <div> if found multiple with same name. (0-indexed)
animHeight	(bool): 			    should the height be animated?
animWidth	(bool):				    should the width be animated?	
speed	    (int):				    animation speed
 
callback	(function):			    calls a set function when content has finished loading in.(optional)
callback2	(function):			    calls a set function when content has finished fading in.(optional)
