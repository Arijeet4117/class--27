class Line{
    constructor(a,b){
      var options={
          bodyA:a,
          bodyB:b,
          stiffness:0.5,
          length:23
      }
      this.body=Constraint.create(options);
      World.add(world,this.body);
    }
    disp(){
    
      var posa = this.body.bodyA.position;
      var posb =this.body.bodyB.position ;
      push();
      strokeWeight(5);
      line(posa.x,posa.y,posb.x,posb.y);
      pop();
    }
}