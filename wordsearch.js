// This was pair-programmed with Victor H.

// Implement function to populate the transposed matrix for vertical search
const transpose = function(matrix) {
  const newMatrix = [];
  
  // Populate the arrays
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i].push(matrix[j][i]);
    }
  }
  return newMatrix;
};


const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join('')); // joins the transposed array. will return the vertical string of letters
  for (let l of horizontalJoin) { // checks if word is in string of letters: horizontal version
    if (l.includes(word)) return true;
  }
  for (let l of verticalJoin) { // checks if word is in string of letters: vertical version
    if (l.includes(word)) return true;
  }
  return false;
    
};

module.exports = wordSearch;