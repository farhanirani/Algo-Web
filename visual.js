// --------- INITIAL PARMS ----------- //
let swap1 = -1
let swap2 = -1
let w = 12
let sleeptimer = 260
let countdown = 100

// ------------------------------------ BASIC DRAWING, SWAPPING FUNCTIONS --------------------------------------- //
function draw() {
  background(255)
  for (let x = 0; x < array.length; x++) {
    if(x == swap1) {
      c = color('rgb(0,0,255)');
    } else if(x == swap2) {
      c = color('rgb(255,0,0)');
    } else {
      c = color('rgb('+floor(255*array[x]/120)+',0,0)');
    }
    fill(c)
    rect(x * w, height - array[x], w, array[x])
  }
}

// swap pos a and b from array
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

// ---------------------------------------------------------------------------------------------------------------- //




// ************************* MAIN SETUP, CHOICE IS WHICH SORTING TAKES PLACE ************************************* //
// *************************************************************************************************************** //

function setup(choice) {

  if(choice) {  
    var canvas = createCanvas(document.getElementById("sketch-holder").clientWidth, 120) 
    canvas.parent('sketch-holder') 
    
    array = new Array(floor(width / w))
    sleeptimer = 260
    countdown = 100

    // Disabling all buttons
    var buttons = document.getElementsByTagName('button')
    for(i=0; i<buttons.length; i++) {
      buttons[i].disabled = true
    }

    for (i = 0; i < array.length; i++) {
      array[i] = random(height)
    }
  }

  if(choice == 1)
    bubblesorting(array, array.length)
  if(choice == 2)
    mergesorting(array, array.length)
}
// *************************************************************************************************************** //




// ***************************************** BUBBLE SORT ********************************************************* //

async function bubblesorting(array, len) {
  var flag
  for(i=0; i<len-1; i++) 
  {
    flag = 1
    for(j=0; j<len-1-i; j++) 
    {
      if(array[j] > array[j+1]) 
      {
        await swap(array, j, j+1)
        draw()
        flag = 0

        // for speed
        if(sleeptimer > 50) sleeptimer -= 5
        else if(countdown-- < 0) sleeptimer -= 10
      }
    }
    if(flag == 1)
      break
  }
  swap1 = -1
  swap2 = -1
  draw()
  // Enable buttons
  var buttons = document.getElementsByTagName('button')
  for(i=0; i<buttons.length; i++) {
    buttons[i].disabled = false
  }
}
