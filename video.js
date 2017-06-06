(function () {
	var canvas = document.getElementById('canvas'),
		
		context=canvas.getContext('2d'),
		video=document.getElementById('video'),
		start=document.getElementById('startbt'),
		vendorUrl=window.URL || window.webkitURL;
		
	navigator.getMedia=	navigator.getUserMedia ||
						navigator.webkitGetUserMedia ||
						navigator.mozGetUserMedia ||
						navigator.msGetUserMedia;
	
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
	document.querySelector('#startbt').addEventListener(
		'click',
		function(e)
		{
		    startt();
		});
	
		
}
)();