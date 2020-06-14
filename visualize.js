// --------- INITIAL PARMS ----------- //
let swap1 = -1
let swap2 = -1
let w = 10
let sleeptimer = 260
let countdown = 100
let sorted = true
let array = []
let pivot = -1
let ismergesort = false
let b = [] //for merge sort

// ------------------------------------ BASIC DRAWING, SWAPPING FUNCTIONS --------------------------------------- //
// daraw is draw function
function daraw() {
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
  
  daraw()
  
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
      mergesorting(array, 0, array.length-1)
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
        daraw()
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
  daraw()
  
  // Enable buttons
  let buttons = document.getElementsByTagName('button')
  for(i=0; i<buttons.length; i++) {
    buttons[i].disabled = false
  }
}

// ***************************************** MERGE SORT ********************************************************* //

async function mergesortalgorithm(array, left, mid, right) {
  let l1,l2
  for(l1 = left, l2 = mid + 1, i = left; l1 <= mid && l2 <= right; i++) {
    swap1 = l1
    swap2 = l2
    if(array[l1] <= array[l2]) {
      b[i] = array[l1++];
      daraw()
      await sleep(sleeptimer)
    }
    else {
      b[i] = array[l2++];
      daraw()
      await sleep(sleeptimer)
    }
    
    // for speed
    if(sleeptimer > 15) sleeptimer -= 5
  }

  while(l1 <= mid)    
    b[i++] = array[l1++];
  while(l2 <= right)   
    b[i++] = array[l2++];

  for(i = left; i <= right; i++) {
    swap1 = i
    swap2 = right
    array[i] = b[i];
    daraw()
    await sleep(sleeptimer)
  }

}

async function mergesorting(array, left, right) {
  ismergesort = true

  if(left<right) {
    let mid = floor((left+right) / 2)
    await mergesorting(array, left, mid)
    await mergesorting(array, mid+1, right)
    await mergesortalgorithm(array, left, mid, right)
  }

  // to end if sorted and over
  let flag = true;
  for (s = 0; s < array.length - 1; s++) {
      if (array[s] > array[s+1]) {
          flag = false;
          break;
      }
  }
  if(flag) {
    swap1 = -1
    swap2 = -1
    sorted = true
    daraw()

    // Enable buttons
    let buttons = document.getElementsByTagName('button')
    for(i=0; i<buttons.length; i++) {
      buttons[i].disabled = false
    }
    ismergesort = false
  }
  
}

// ***************************************** QUICK SORT ********************************************************* //

async function quicksorting(array, left, right) {
  daraw()
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
      daraw()
      
      // for speed
      if(sleeptimer > 50) sleeptimer -= 5
      else if(countdown-- < 0) sleeptimer = 0
    }
  }

  if(left < tempLeft)
    await quicksorting(array, left, tempLeft-1);
  if(right > tempRight)
    await quicksorting(array, tempRight+1, right);

  // to end if sorted and over
  let flag = true;
  for (s = 0; s < array.length - 1; s++) {
      if (array[s] > array[s+1]) {
          flag = false;
          break;
      }
  }
  if(flag) {
    swap1 = -1
    swap2 = -1
    pivot = -1
    sorted = true
    daraw()

    // Enable buttons
    let buttons = document.getElementsByTagName('button')
    for(i=0; i<buttons.length; i++) {
      buttons[i].disabled = false
    }
  }
}
