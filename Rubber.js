class Rubber{
	constructor(x,y,r)
	{
		var options={
			
//add physical properties

		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			
		//set display properties
		
		
			pop()
	}

}
