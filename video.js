(function () {
	var canvas = document.getElementById('canvas'),
		
		context=canvas.getContext('2d'),
		video=document.getElementById('video'),
		vendorUrl=window.URL || window.webkitURL;
		
	navigator.getMedia=	navigator.getUserMedia ||
						navigator.webkitGetUserMedia ||
						navigator.mozGetUserMedia ||
						navigator.msGetUserMedia;
	//var video= document.querySelector('video');
	var cameraStream='';
	function startt(){
			navigator.getMedia({
				video: true,
				audio: true
			},function(stream){
				cameraStream= stream;
				video.src= vendorUrl.createObjectURL(stream);
				video.play();
			}, function(error) {
				document.writeln("video capture is not supported !")
			}
		);
	}
	document.querySelector('#stopbt').addEventListener(
		'click',
	    function(e)
		{ 
			video.src='';
			cameraStream.stop();
		});
	
		
})();