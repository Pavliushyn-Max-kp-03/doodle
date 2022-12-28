document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let isGameOver = false
    let speed = 3
    let platformCount = 5
    let platforms = []
    let score = 0
    let doodlerLeftSpace = 50
    let startPoint = 150
    let doodlerBottomSpace = startPoint
    const gravity = 0.9
    let upTimerId
    let downTimerId
    let isJumping = true
    let isGoingLeft = false
    let isGoingRight = false
    let leftTimerId
    let rightTimerId
  
  
    function start() {
      if (!isGameOver) {
        createPlatforms()
        createDoodler()
        setInterval(movePlatforms,30)
        jump(startPoint)
        document.addEventListener('keyup', control)
      } 
    }
    start()
  })