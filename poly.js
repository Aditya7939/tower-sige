class Polygon{
    constructor(x, y,r) {
        var options = {
                     
        }
        this.body = Bodies.circle(x, y,r, options);
        x=this.body.position.x;
        y=this.body.position.y;
        r=this.body.radius;
        World.add(world, this.body);
        this.image = loadImage("polygon.png");
      }
      display(){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        circle(0,0,this.r);
        pop();
      }
}