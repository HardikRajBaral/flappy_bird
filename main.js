import  Bird  from "./Bird.js"
import  Obstacle  from "./obstacle.js"

const canvas= document.getElementById("canvas")
const ctx=canvas.getContext('2d')


canvas.width=window.innerWidth
canvas.height=window.innerHeight

const bird=new Bird()


const obstacles=[]

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
    if(collisionDetectionForTop(bird,obstacles[i])){
      alert("Game Over");
      document.location.reload();
      break
    }
    if(collisionDetectionForBottom(bird,obstacles[i])){
      alert("Game Over");
      document.location.reload();
      break
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