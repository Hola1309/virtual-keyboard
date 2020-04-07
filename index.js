const c = document.getElementById('canvas');
const ctx = c.getContext("2d");

var en = -1;

var ButtonsObj = {
  Backquote: function() {
    
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(5, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("`", 5+20, 5+20);
  },
  Digit1: function() {    
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(50, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("1", 50+20, 5+20);
  },
  Digit2: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(95, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("2", 95+20, 5+20);
  },
  Digit3: function() {    
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(140, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("3", 140+20, 5+20);
  },
  Digit4: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(185, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("4", 185+20, 5+20);
  },
  Digit5: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(230, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("5", 230+20, 5+20);
  },
  Digit6: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(275, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("6", 275+20, 5+20);
  },
  Digit7: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(320, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("7", 320+20, 5+20);
  },
  Digit8: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(365, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("8", 365+20, 5+20);
  },
  Digit9: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(410, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("9", 410+20, 5+20);
  },
  Digit0: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(455, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("0", 455+20, 5+20);
  },
  Minus: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(500, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("-", 500+20, 5+20);
  },
  Equal: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(545, 5, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("=", 545+20, 5+20);
  },
  Backspace: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(590, 5, 105, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Backspace", 590+52.5, 5+20);
  },
  Enter: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(610, 95, 85, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Enter", 610+42.5, 95+20);
  },
  CapsLock: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(5, 95, 105, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("CapsLock", 5+52.5, 95+20);
  },
  KeyQ: function() {
    if(en == -1){char = 'q'}else{char = 'й'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(70, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 70+20, 50+20);
  },
  KeyW: function() {
    if(en == -1){char = 'w'}else{char = 'ц'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(115, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 115+20, 50+20);
  },
  KeyE: function() {
    if(en == -1){char = 'e'}else{char = 'у'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(160, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 160+20, 50+20);
  },
  KeyR: function() {
    if(en == -1){char = 'r'}else{char = 'к'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(205, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 205+20, 50+20);
  },
  KeyT: function() {
    if(en == -1){char = 't'}else{char = 'е'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(250, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 250+20, 50+20);
  },
  KeyY: function() {
    if(en == -1){char = 'y'}else{char = 'н'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(295, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 295+20, 50+20);
  },
  KeyU: function() {
    if(en == -1){char = 'u'}else{char = 'г'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(340, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 340+20, 50+20);
  },
  KeyI: function() {
    if(en == -1){char = 'i'}else{char = 'ш'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(385, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 385+20, 50+20);
  },
  KeyO: function() {
    if(en == -1){char = 'o'}else{char = 'щ'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(430, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 430+20, 50+20);
  },
  KeyP: function() {
    if(en == -1){char = 'p'}else{char = 'з'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(475, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 475+20, 50+20);
  },
  BracketLeft: function() {
    if(en == -1){char = '['}else{char = 'х'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(520, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 520+20, 50+20);
  },
  BracketRight: function() {
    if(en == -1){char = ']'}else{char = 'ъ'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(565, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 565+20, 50+20);
  },
  Backslash: function() {
    
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(610, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText('\x2F', 610+20, 50+20);
  },
  Tab: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(50, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Tab", 50+20, 50+20);
  },
  Delete: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(655, 50, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Delete", 655+20, 50+20);
  },
  ShiftLeft: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(5, 140, 105, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Shift", 5+52.5, 140+20);
  },
  Tab: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(5, 50, 60, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Tab", 5+30, 50+20);
  },
  ControlLeft: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(5, 185, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Ctrl", 5+20, 185+20);
  },
  MetaLeft: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(50, 185, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Win", 50+20, 185+20);
  },
  KeyZ: function() {
    if(en == -1){char = 'z'}else{char = 'я'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(115, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 115+20, 140+20);
  },
  KeyX: function() {
    if(en == -1){char = 'x'}else{char = 'ч'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(160, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 160+20, 140+20);
  },
  KeyC: function() {
    if(en == -1){char = 'c'}else{char = 'с'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(205, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 205+20, 140+20);
  },
  KeyV: function() {
    if(en == -1){char = 'v'}else{char = 'м'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(250, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 250+20, 140+20);
  },
  KeyB: function() {
    if(en == -1){char = 'b'}else{char = 'и'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(295, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 295+20, 140+20);
  },
  KeyN: function() {
    if(en == -1){char = 'n'}else{char = 'т'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(340, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 340+20, 140+20);
  },
  KeyM: function() {
    if(en == -1){char = 'm'}else{char = 'ь'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(385, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 385+20, 140+20);
  },
  Comma: function() {
    if(en == -1){char = ','}else{char = 'б'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(430, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 430+20, 140+20);
  },
  Period: function() {
    if(en == -1){char = '.'}else{char = 'ю'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(475, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 475+20, 140+20);
  },
  Slash: function() {
    if(en == -1){char = '.'}else{char = 'ж'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(520, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 520+20, 140+20);
  },
  ArrowUp: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(565, 140, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText('^', 565+20, 140+20);
  },
  AltLeft: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(95, 185, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Alt", 95+20, 185+20);
  },KeyA: function() {
    if(en == -1){char = 'a'}else{char = 'ф'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(115, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 115+20, 95+20);
  },
  KeyS: function() {
    if(en == -1){char = 's'}else{char = 'ы'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(160, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 160+20, 95+20);
  },
  KeyD: function() {
    if(en == -1){char = 'd'}else{char = 'в'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(205, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 205+20, 95+20);
  },
  KeyF: function() {
    if(en == -1){char = 'f'}else{char = 'а'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(250, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 250+20, 95+20);
  },
  KeyG: function() {
    if(en == -1){char = 'g'}else{char = 'п'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(295, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 295+20, 95+20);
  },
  KeyH: function() {
    if(en == -1){char = 'h'}else{char = 'р'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(340, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 340+20, 95+20);
  },
  KeyJ: function() {
    if(en == -1){char = 'j'}else{char = 'о'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(385, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 385+20, 95+20);
  },
  KeyK: function() {
    if(en == -1){char = 'k'}else{char = 'л'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(430, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 430+20, 95+20);
  },
  KeyL: function() {
    if(en == -1){char = 'l'}else{char = 'д'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(475, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 475+20, 95+20);
  },
  Semicolon: function() {
    if(en == -1){char = ';'}else{char = 'ж'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(520, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 520+20, 95+20);
  },
  Quote: function() {
    if(en == -1){char = '\u0027'}else{char = 'э'}
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(565, 95, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(char, 565+20, 95+20);
  },
  ShiftRight: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(610, 140, 85, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Shift", 610+42.5, 140+20);
  },
  ArrowLeft: function() {
    
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(520, 185, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText('<', 520+20, 185+20);
  },
  ArrowDown: function() {
    
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(565, 185, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText('v', 565+20, 185+20);
  },
  ArrowRight: function() {
    
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(610, 185, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText('>', 610+20, 185+20);
  },
  ControlRight: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(655, 185, 40, 40);
    ctx.fillStyle = 'white';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Ctrl", 655+20, 185+20);
  },
  Space: function() {
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(140, 185, 375, 40);
   
  }
}
function draw(){
for (const property in ButtonsObj) {
  color = "#24292e";
  eval('ButtonsObj.' + property + '(color)');
  
}
}
var Code;

draw();
kinput.onkeydown = kinput.onkeypress = handleInput;
function handleInput(e) {
  color = '#C0C0C0';
  key1 = key;
  key = e.code;
  if(key == 'AltLeft' && key1 == 'ControlLeft'){
    en = en*(-1);
    console.log(en);
    return draw();
  }
  
  eval('ButtonsObj.' + key + '(color)');
  
 
}
kinput.onkeyup = handleOutput;
function handleOutput(e) {
  color = "#24292e";
  key = e.code;

  eval('ButtonsObj.' + key + '(color)');
 
}