class wall {
    constructor(x,y) {
 this.wall1 = createSprite(x,y,10,80);
    }
    visible(show){
        this.wall1.visible = show;
    }
    display(){
        this.wall1.velocityX = -6;
        player.collide(this.wall1);
    }
}