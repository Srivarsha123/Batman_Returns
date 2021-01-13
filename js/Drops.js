class Drop{
    constructor(x,y){
        var options = {
            friction: 0.00001,  
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    position(){     
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,windowWidth), y:random(0,windowWidth)})
        }
    }

    display(){
        fill("#C8C8C8");
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}