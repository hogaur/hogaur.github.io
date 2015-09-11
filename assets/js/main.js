// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};

function setSection(sectionName){
  if(sectionName == 'life'){
    console.log('in - '+sectionName);
    $('#life').removeClass('hide');
    $('#code').addClass('hide');
    $('#music').addClass('hide');
  }
  else if(sectionName == 'music'){
    console.log('in - '+sectionName);
    $('#music').removeClass('hide');
    $('#life').addClass('hide');
    $('#code').addClass('hide');
  }
  else if (sectionName == 'code'){
    console.log('in - '+sectionName);
    $('#code').removeClass('hide');
    $('#life').addClass('hide');
    $('#music').addClass('hide');
  }

}

function retina() {

	if (!isRetina())
		return;

	$("img.2x").map(function(i, image) {

		var path = $(image).attr("src");

		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");

		$(image).attr("src", path);
	});

  if (window.location.pathname==='/' && window.location.hash==='#Life'){
    console.log('Setting section life');
    setSection('life');
  }
  else if (window.location.pathname==='/' && window.location.hash==='#Music'){
    console.log('Setting section music');
    setSection('music');
  }
  else if (window.location.pathname==='/' && (window.location.hash==='#Code' || window.location.hash==='')){
    console.log('Setting section code');
    setSection('code');
  }
};

$(document).ready(retina);
