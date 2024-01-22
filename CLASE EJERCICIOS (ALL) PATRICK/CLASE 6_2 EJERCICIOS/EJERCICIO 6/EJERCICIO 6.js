// Ordena alfabéticamente un array con 7 palabras puedes usar el algoritmo de la burbuja
// Order in alphabetical order an array with 7 words. You can use the bubble algorythm.


function initiate() {
    words = (prompt("Insert seven words"))
    let n = words.length;
  let swapped;

  if(words) {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (words[i] > words[i + 1]) {
        
        let temp = words[i];
        words[i] = words[i + 1];
        words[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  console.log('Original Array:', wordsArray);
  console.log('Sorted Array:', sortedArray);

  return words;
}

initiate();

// NEEDS CORRECTION.