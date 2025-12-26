export default class Obstacle {
    constructor(x,y){
        this.position={
            x:x,
            y:0
        }
        this.size={
            width:50,
            height:canvas.height*0.3+y
        }

        this.direction={
            x:-1,
            y:0
        }
        this.speed={
            x:1,
            y:1
        }
        this.space=150
    }
      get gap(){
        return  this.size.height + this.space
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle='Green'
        ctx.fillRect(this.position.x,this.position.y,this.size.width,this.size.height)
        ctx.fillRect(this.position.x,this.gap,this.size.width,canvas.height)
    }

    move(){
        this.position.x+=this.speed.x*this.direction.x
        
    }
}