class Goat {
    constructor(x, y) {
      var options = {
        'density':10,
        'friction': 1.0,
        'restitution':1.0,
      };
      this.body = Bodies.rectangle(x, y, 20, 50, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('brown')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  