class Chain{
    constructor(bodyA,bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            lenght: 5

        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
      }
      display(){
       var a = this.chain.bodyA.position;
       var b = this.chain.bodyB.position;
       strokeWeight(4);
       line(a.x,a.y,b.x,b.y);
      }
}