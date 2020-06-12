function setup() {
  var canvas = createCanvas(document.getElementById("sketch-holder").clientWidth, 120) 
  canvas.parent('sketch-holder') 
}


// --------------------- //
let array = []
let colorarray = []
let w = 12
let sleeptimer = 10000
let countdown = 100
let swap1 = 0
let swap2 = 0
let i = 0
let j = 0
// --------------------- //

function draw() {
  background(255)
  for (let x = 0; x < array.length; x++) {
    if(x == swap2 || colorarray[x] == 1) {
      c = color('rgb(255,0,0)');
    } else if(x == swap1) {
      c = color('rgb(0,0,255)');
    } else if(colorarray[x] == 2) { 
      c = color('rgb(173, 29, 29)');
    } else {
      c = color('rgb(0,0,0)');
    }
    fill(c)
    rect(x * w, height - array[x], w, array[x])
  }
}

async function swap(arr, a, b) {
  await sleep(sleeptimer)
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
  swap1 = a
  swap2 = b
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)) 
}

// --------------------- //


// ************************************ //


function bubblesetup() {
  sleeptimer = 230
  array = new Array(floor(width / w))
  colorarray = new Array(floor(width / w))
  i=0;j=0;
  swap1=0;swap2=0;

  for (i = 0; i < array.length; i++) {
    array[i] = random(height)
    colorarray[i] = 0
  }
  bubblesorting(array, array.length)
}
// ************************************ //



// ************************************************************** //


async function bubblesorting(array, len) {
  for(i=0; i<len-1; i++) {
    
    colorarray[len-1-i] = 2
    for(j=0; j<len-1-i; j++) {
      if(array[j] > array[j+1]) {
    
        await swap(array, j, j+1)
        draw()
        if(sleeptimer > 50)
          sleeptimer -= 5
        else 
          if(countdown-- < 0)
            sleeptimer -= 10
      }
    }
    colorarray[j] = 1
  }
  colorarray[0] = 1
}

// ************************************************************** //



