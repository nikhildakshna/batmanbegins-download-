class droplet{
constructor(x,y){
var options = {
isStatic: false,
'restitution': 0.5,
'friction': 0.5,
'density': 1
}
this.body = Bodies.circle(x,y,4,options);
this.radius = 3;
this.x = this.body.position.x;
this.y = this.body.position.y;

World.add(world, this.body);
console.log(this.x,this.y);
}

display(){
push();
translate(this.x,this.y);
fill("blue");
ellipseMode(RADIUS);
ellipse(0,0,this.radius);
pop();
}

reposition(){
if(this.y > displayHeight){
var pos = {x: random(displayWidth/2 - 500,displayWidth/2 + 500),y: 100};
Matter.Body.translate(pos);
}
}

}