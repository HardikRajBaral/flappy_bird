export default class Bird{
    constructor(){
        this.position={
            x:canvas.width/4,
            y:canvas.height/2
        }
        this.size={
            width:50,
            height:50
        }

        this.direction={
            x:0,
            y:0
        }
        this.speed={
            x:0,
            y:3
        }
        this.image=new Image()
        this.image.src='./Image/bird.png' 
        this.isDead=false
    }

    get left() {
        return this.position.x;
    }

    get right() {
        return this.position.x + this.size.width;
    }

    get top() {
        return this.position.y;
    }

    get bottom() {
        return this.position.y + this.size.height;
    }
    draw(ctx){
        ctx.beginPath()
        ctx.drawImage(this.image,0,0,300,218,this.position.x,this.position.y,this.size.width,this.size.height)
        
    }

    jump(){
        this.position.x+=this.speed.x*this.direction.x
        this.position.y+=this.speed.y*this.direction.y
        
        
    }
        
    


}

