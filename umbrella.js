class Umbrella{
constructor(){
this.body = Bodies.circle(width/2,width/2 + 100,30,{isStatic: true});
this.radius = 30;

World.add(world,this.body);
};
}