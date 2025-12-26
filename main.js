import  Bird  from "./Bird.js"
import  Obstacle  from "./obstacle.js"

const canvas= document.getElementById("canvas")
const ctx=canvas.getContext('2d')


canvas.width=window.innerWidth
canvas.height=window.innerHeight

const bird=new Bird()

const audio=new Audio('./Audio/background-music.mp3')

const obstacles=[]


 const scoreElement = document.getElementById("score");
  let score = 0;



setInterval(()=>{
    let x=canvas.width/2
    let y=Math.floor(Math.random()*(canvas.height-(canvas.height*0.6)-(canvas.height*0.4)+canvas.height*0.4))
    obstacles.push(new Obstacle(x,y))
},3500)

function updateScore() {
  if (bird.right > obstacles[i].width &&  bird.left < obstacles[i].right ){
        return true
  }
}


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

      if(obstacles[i].position.x<0){
        obstacles.splice(i,1)
      }
      if (updateScore()) {
        score++;
        scoreElement.textContent = score;
        break; 
      }
    
   }
    if(bird.top<=0 || bird.bottom>=canvas.height){
      alert("Game Over");
      document.location.reload();
    }
    

}


loop()

document.addEventListener("keydown",(event)=>{
  if (event.key==" "){
    bird.direction.y=-1
    bird.direction.x=1
    audio.play()

  }  
})
document.addEventListener("keyup",(event)=>{
   bird.direction.y=1
})