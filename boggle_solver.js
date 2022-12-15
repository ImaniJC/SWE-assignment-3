/*
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */
exports.findAllSolutions = function(grid, dictionary) {
  let solutions = [];

  // 1. Check inputs params are valid
  // 1a. Check for any empty input
  if (grid == null || dictionary == null) {
    return solutions;
  }
  const N = grid.length;
  for (let i = 0; i <N; i++) {
    if (grid[i].length != N) {
      return solutions;
    }
  }
  // Convert input data into the same case
  lowerCase(grid, dictionary);

  // Check if Grid is valid
  if (!isValidGrid(grid)) {
    // console.log('Test' + grid);
    return solutions;
  }
  // Set up data structures
  // (visited, solutions, dictionary, Trie, hash, list, set)

  const solutionSet = new Set();
  const hash = createHashMap(dictionary);

  // Iterate over the NxN grid

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const word = '';

      const visited = new Array(N)
          .fill(false)
          .map(() => new Array(N).fill(false));


      findAllWords(word, y, x, grid, visited, hash, solutionSet);
    }
  }

  solutions = Array.from(solutionSet);
  return solutions;
};

const findAllWords = function(word, y, x, grid, visited, hash, solutionSet) {
  const adjMatrix = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  if (
    y < 0 ||
    x < 0 ||
    y >= grid.length ||
    x >= grid.length ||
    visited[y][x] == true
  ) {
    return;
  }
  word += grid[y][x];

  if (wordChecker(word, hash)) {
    visited[y][x] = true;

    if (isWord(word, hash)) {
      if (word.length >= 3) solutionSet.add(word);
    }

    for (let i = 0; i < 8; i++) {
      printAllWords(
          word,
          y + adjMatrix[i][0],
          x + adjMatrix[i][1],
          grid,
          visited,
          hash,
          solutionSet,
      );
    }
  }

  visited[y][x] = false;
};

const wordChecker = function(word, hash) {
  return hash[word] != undefined;
};

const isWord = function(word, hash) {
  return hash[word] == 1;
};

const createHashMap = function(dictionary) {
  const dict = {};
  for (let i = 0; i < dictionary.length; i++) {
    dict[dictionary[i]] = 1;
    let wordlength = dictionary[i].length;
    const str = dictionary[i];
    for (let j = wordlength; wordlength > 1; wordlength--) {
      console.log(j);
      str = str.substr(0, wordlength-1);
      if (str in dict) {
        if (str == 1) {
          dict[str] = 1;
        }
      } else {
        dict[str] = 0;
      }
    }
  }
  return dict;
};


const lowerCase = function(grid, dict) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = grid[i][j].toLowerCase();
    }
  }

  for (let i = 0; i < dict.length; i++) {
    dict[i] = dict[i].toLowerCase();
  }
};

const isValidGrid = function(grid) {
  const regex = /(st|qu)|[a-prt-z]/;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!grid[i][j].match(regex)) {
        return false;
      }
    }
  }
  return true;
};
