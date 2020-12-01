class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,117,options);
        this.image = loadImage("walking_1.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,300,300);
        pop();
    }
}