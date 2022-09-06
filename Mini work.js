
function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  

  console.log('This is my first console log!!')

  function draw() {
    background(0,0,225);
     
    //left side

    fill(225,0,0);
    rect(0,0,windowWidth/12, windowHeight);

    fill(0,225,0);
    rect(windowWidth/12, 0, windowWidth/12, windowHeight);

    fill(0,0,225);
    rect((windowWidth/12)*2, 0, windowWidth/12, windowHeight);

    fill(225);
    rect((windowWidth/12)*3, 0, windowWidth/12, windowHeight);

    fill(0);
    rect((windowWidth/12)*4, 0, windowWidth/12, windowHeight);

    noStroke();

    fill(225);
    rect((windowWidth/12)*5, 0, windowWidth/12, windowHeight);

    //right side


    fill(0);
    rect(windowWidth/2, 0, windowWidth/2, windowHeight/6)

    fill(225);
    rect(windowWidth/2, windowHeight/6, windowWidth/2, windowHeight/6)

    fill(0);
    rect(windowWidth/2, (windowHeight/6)*2, windowWidth/2, windowHeight/6)

    fill(225);
    rect(windowWidth/2, (windowHeight/6)*3, windowWidth/2, windowHeight/6)

    fill(0);
    rect(windowWidth/2, (windowHeight/6)*4, windowWidth/2, windowHeight/6)

    fill(225);
    rect(windowWidth/2, (windowHeight/6)*5, windowWidth/2, windowHeight/6)






  }