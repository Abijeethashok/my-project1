class shop {

    constructor(){
      this.title = createElement('h2');
      this.title1 = createElement('h2');
      this.title2 = createElement('h2');
      this.title3 = createElement('h2');
      this.button = createButton('back');
    }
    hide(){
    this.title.hide();
    this.title1.hide();
    this.title2.hide();
    this.title3.hide();
    this.button.hide();
    }
  
    display(){
      this.title.html("SHOP");
      this.title.position(displayWidth/2, displayHeight/8);
      console.log( displayHeight);
      console.log( displayWidth); 

      this.title1.html("Upgrade wepon");
      this.title1.position(displayWidth/2 - 50, displayHeight/6);

      this.title2.html("Change Player");
      this.title2.position(displayWidth/2 - 50, displayHeight/3);

      this.title3.html("SHILD");
      this.title3.position(displayWidth/2 - 50, displayHeight/1.5);

      this.button.position(displayWidth-170,20);
      this.button.mousePressed(()=>{
          this.hide();
          form2 = new Form();
          form2.display();

      });
      }
  
   
      }
