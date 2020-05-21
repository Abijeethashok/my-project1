class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.button1 = createButton('Shop');
    this.title = createElement('h2');
  }
  hide(){
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.button1.hide();
  }

  display(){
    this.title.html("KILL THE VIRUS");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button1.position(displayWidth/2 + 30, displayHeight/2 +30);

    this.button1.mousePressed(()=>{
    this.hide();
    shop1 = new shop();
    shop1.display();

    });

    this.button.mousePressed(()=>{
     this.hide();
      name = this.input.value();
      ground.visible = true;
      player.visible = true;
      gameState = "play"
    });

  }
}
