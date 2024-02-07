let scene = document.querySelector('.scene')
let directionBox = document.querySelector('.direction-box')
let dialogueBubble = document.querySelector('.dialogue')
let txtBox = document.querySelector('.txt-box')

let nextDialogue = document.querySelector('.next-dialogue')
let directions = document.querySelectorAll('.direction')


function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function displayMap() {
  // txtBox.style.display = 'none';
  directionBox.style.display = 'block';
  directionBoxChoice()
}

function displayMapNone() {
  // txtBox.style.display = 'block';
  directionBox.style.display = 'none';
}

function wrongPlace1() {
  scene.style.background = 'url(images/adam-mawby-forest-scene.jpg) center / cover';
}
function backZone1() {
  scene.style.background = 'url(images/do-pixel-tileset-for-game-or-map.jpg) center / cover';
}

function foundTheCat() {
  scene.style.background = 'url(images/draw-pixel-art-sprites.jpg) center / cover';
  directionBox.innerHTML += `<img class="kitty" src="images/1215347632cute-kitty-animated-gif-72.gif" alt="">`

  dialogueBubble.innerHTML = `C'est lui mon chat! (ramener lui son chat)`
  nextDialogue.style.display = 'none'

  console.log(`found the cat!`);
  
  let pinkCat = document.querySelector('.kitty')

  pinkCat.addEventListener('click', function(e) {
    if (e.target.classList.contains('kitty')) {
      pinkCat.remove()
      backZone1()
      document.querySelectorAll('.direction').style.display = 'none' // dsn't wwork
      dialogueBubble.innerHTML = `Merci de ton aide ! (+3 xp)`
      
    }
  });

}




// au click, chiffre random, si = 1 => find cat, else nope 
function directionBoxChoice() {
  directions.forEach((direction) => {
    
    direction.addEventListener('click', function () {
      
      const randomInt = randomIntFromInterval(1, 3)
      console.log(randomInt)
      
      if (randomInt == 1 ){
        console.log(`You hear the cat!`);

        dialogueBubble.innerHTML = `j'entend un ronflement`
        nextDialogue.innerHTML = `allons voir de plus prèt`

        nextDialogue.addEventListener('click', function () {
          foundTheCat()
        })

      } else if (randomInt != 1 ){
        console.log(`look more!`);
        wrongPlace1()
        displayMapNone()
        dialogueBubble.innerHTML = `Je ne le vois pas ici T-T`
        nextDialogue.innerHTML = `continion de chercher !`
      }

    })
  })
}




nextDialogue.addEventListener('click', function () {
  displayMap()
})
















