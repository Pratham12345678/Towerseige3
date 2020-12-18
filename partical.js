class Particle {
    constructor(x,y,radius) {
      this.body = Bodies.circle(x,y,15,options);
      this.radius = radius;
      this.color= color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      circle(pos.x, pos.y, this.radius);
    }
  };