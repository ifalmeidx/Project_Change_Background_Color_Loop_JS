//Project Change Background Color
// My function

function changeBackgroundColor() {
  button = document.querySelector('button');    //Select the button element
  body = document.querySelector('body'); //Select the body element
  h1 = document.querySelector('h1'); //Select the header element

  //Set the background color
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  var col = "rgb(" + red + "," + green + "," + blue + ")";   
  
  
  // Opposity color for H1 
  const redH1 = Math.floor(Math.random() * 255);
  const greenH1 = Math.floor(Math.random() * 255);
  const blueH1 = Math.floor(Math.random() * 255);
  var colH1 = "rgb(" + redH1 + "," + greenH1 + "," + blueH1 + ")";   


  body.style.backgroundColor = col;
  h1.style.color = colH1;

}

