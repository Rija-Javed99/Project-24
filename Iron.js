class Iron {
    constructor(x, y) {
      var options = {
          
//add physical properties


      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
     
        //set display properties
        
        
      pop();
    }
  };
  
