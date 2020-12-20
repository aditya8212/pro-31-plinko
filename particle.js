class PARTICLE{
    constructor(x,y){
       var  options={
        isStatic:false,
        restitution:0.4

       }

        this.body = Bodies.circle(x,y,10,options);
        this.radius=10;
        this.color = color(random(0,255),random(0,255),random(0,255))

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        noStroke();
        fill(this.color)
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }

}