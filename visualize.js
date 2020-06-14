// --------- INITIAL PARMS ----------- //
let swap1 = -1
let swap2 = -1
let w = 10
let sleeptimer = 260
let countdown = 100
let sorted = true
let array = []
let pivot = -1
// ------------------------------------ BASIC DRAWING, SWAPPING FUNCTIONS --------------------------------------- //
function draw() {
  background(255)
  noStroke()
  for (let x = 0; x < array.length; x++) {
    if(x == array.indexOf(pivot)) {
      c = color('rgb(0,0,255)');
    } else if(x == swap1) {
      c = color('rgb(239, 45, 252)');
    } else if(x == swap2) {
      c = color('rgb(255,255,0)');
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
  let canvas = createCanvas(document.getElementById("sketch-holder").clientWidth, 120) 
  canvas.parent('sketch-holder') 

  if((choice && sorted) || !choice) {
    array = new Array(floor(width / w))
    for (i = 0; i < array.length; i++) {
      array[i] = random(height)
    }
    sorted = false
  }
  
  if(choice) {  
    sleeptimer = 260
    countdown = 100

    // Disabling all buttons
    let buttons = document.getElementsByTagName('button')
    for(i=0; i<buttons.length; i++) {
      buttons[i].disabled = true
    }

    if(choice == 1)
      bubblesorting(array, array.length)
    else if(choice == 2)
      mergesorting(array, array.length)
    else if(choice == 3)
      insertionsorting(array, array.length)
    else if(choice == 4)
      quicksorting(array, 0, array.length-1)
    else if(choice == 5)
      selectionsorting(array, array.length)


  } 
  
}
// *************************************************************************************************************** //




// ***************************************** BUBBLE SORT ********************************************************* //

async function bubblesorting(array, len) {
  let flag
  for(i=0; i<len-1; i++) 
  {
    flag = 1
    for(j=0; j<len-1-i; j++) 
    {
      if(array[j] > array[j+1]) 
      {
        await swap(array, j, j+1)
        flag = 0

        // for speed
        if(sleeptimer > 50) sleeptimer -= 5
        else if(countdown-- < 0) sleeptimer = 0 
      }
    }
    if(flag == 1)
      break
  }
  swap1 = -1
  swap2 = -1
  sorted = true
  // Enable buttons
  let buttons = document.getElementsByTagName('button')
  for(i=0; i<buttons.length; i++) {
    buttons[i].disabled = false
  }
}

// ***************************************** QUICK SORT ********************************************************* //

async function quicksorting(array, left, right) {
  let tempLeft = left;
  let tempRight = right;
  pivot = array[floor((left+right)/2)];

  while(tempLeft < tempRight)
  {
    while(array[tempLeft] < pivot)
      tempLeft++;
    while(array[tempRight] > pivot)
      tempRight--;

    if(tempLeft<tempRight) {
      
      await swap(array, tempLeft, tempRight)
      
      // for speed
      if(sleeptimer > 50) sleeptimer -= 5
      else if(countdown-- < 0) sleeptimer = 0
    }
  }

  if(left < tempLeft)
    await quicksorting(array, left, tempLeft-1);
  if(right > tempRight)
    await quicksorting(array, tempRight+1, right);

  swap1 = -1
  swap2 = -1
  pivot = -1
  sorted = true
  // Enable buttons
  let buttons = document.getElementsByTagName('button')
  for(i=0; i<buttons.length; i++) {
    buttons[i].disabled = false
  }
}
