import  Bird  from "./Bird.js"
import  Obstacle  from "./obstacle.js"

const canvas= document.getElementById("canvas")
const ctx=canvas.getContext('2d')


canvas.width=window.innerWidth
canvas.height=window.innerHeight

const bird=new Bird()


const obstacles=[]


 const scoreUpdate = document.getElementById("score");
  let score = 0;



setInterval(()=>{
    let x=canvas.width/2
    let y=Math.floor(Math.random()*(canvas.height-(canvas.height*0.6)-(canvas.height*0.4)+canvas.height*0.4))
    obstacles.push(new Obstacle(x,y))
},3500)



function collisionDetectionForTop(A, B) {
  if (!A || !B) return false;

  if (
    A.left < B.right &&
    A.right> B.left &&
    A.top < B.bottomForTopObstacle &&
    A.bottom> B.topForTopObstacle
  ) {
    A.direction.y=0
    return true;
  }
}
function collisionDetectionForBottom(A, B) {
  if (!A || !B) return false;

  if (
    A.left < B.right &&
    A.right > B.left &&
    A.top < B.bottomForBottomObstacle &&
    A.bottom > B.topForBottomObstacle
  ) {
    A.direction.y=0
    return true;
  }
}

function collisioOnTheEdges(A){  
    if(A.top<=0 || A.bottom>=canvas.height){
        A.direction.y=0
        return true;
    }
}
const loop=()=>{
    requestAnimationFrame(loop)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bird.draw(ctx)
    bird.jump()
   for(let i =0; i<obstacles.length;i++){
        obstacles[i].draw(ctx)
        obstacles[i].move()
   }

   for(let i=0;i<obstacles.length;i++){
    if(bird.isDead){
      bird.direction.y=0
      ctx.beginPath()
      ctx.fillStyle='red'
      ctx.font="48px Arial"
      ctx.fillText('Game Over',canvas.width/2 -150,canvas.height/2)
      break;
    }
      bird.isDead =(collisionDetectionForTop(bird,obstacles[i]) || collisionDetectionForBottom(bird,obstacles[i])|| collisioOnTheEdges(bird))

      if(obstacles[i].position.x<0){
        obstacles.splice(i,1)
      }
      if(obstacles[i].position.x===bird.position.x){
        score++;
        scoreUpdate.textContent = score
      }
    
   }
    
    

}


loop()

document.addEventListener("keydown",(event)=>{
  if (event.key==" "){
    bird.direction.y=-1
    bird.direction.x=1
    

  }  
})
document.addEventListener("keyup",(event)=>{
   bird.direction.y=1
})