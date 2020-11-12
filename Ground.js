class Ground {
    constructor(){
    var options={
     'isStatic':true
    }
    this.body=Matter.Bodies.rectangle(800,690,1600,20,options);
    World.add(world,this.body);
    }
    display() {
    push();
    fill("yellow");
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,1600,20);
    pop();
    }
 }