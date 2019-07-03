var video; 

function setup(){
  canvas = createCanvas(640,480, WEBGL);
  canvas.id('p5canvas');
  video = createCapture(VIDEO);
  video.size(320,240);
  video.id('p5video');
  slider = createSlider(0,1,0.5,0.01);
  slider.id('blur-slider');

  var seriously = new Seriously();
  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');

  var chroma = seriously.effect('chroma');
  chroma.source = src;
  //target.source = chroma;

  var falseColor = seriously.effect('falsecolor')
  falseColor.source = chroma;
  falseColor.black = [0,0,0,1]
  falseColor.white = [0.1,0.2,1,1]

  var blur = seriously.effect('blur');
  blur.amount = '#blur-slider';
  blur.source = falseColor;
  
  //final target
  target.source = blur; 




  var r = 200 / 255; 
  var g = 199 / 255;
  var b = 10 / 255;
  chroma.weight = 1.0;
  chroma.screen = [r,g,b,1];
  

  seriously.go();
}
