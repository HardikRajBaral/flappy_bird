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

