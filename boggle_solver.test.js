const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */

//recieved help from Mariah

function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {
  describe('Normal input', () => {
    
    test('4x4 Grid Size' , () => {
        let grid = [['T', 'B', 'D', 'C'], 
                    ['I', 'E', 'P', 'O'],
                    ['N', 'A', 'U', 'W'],
                    ['Y', 'R', 'G', 'L']];
        
        let dictionary = ['tiny','tin','bear','yap','ned','pug','cow','owl','rug','rag','cop','dear','tea','den','car','bears','wrap','pear'];
        let expected = ['tiny','tin','bear','yap','ned','pug','cow','owl','rug','rag','cop','dear','tea','den','pear'];

        let solutions = boggle_solver.findAllSolutions(grid, dictionary);

        // Lowercasing for case-insensitive string array matching.
        lowercaseStringArray(solutions);
        lowercaseStringArray(expected);
        expect(solutions.sort()).toEqual(expected.sort());
        
        });
    
    test('3x3 Grid Size' , () => {
        let grid = [['T', 'B', 'D'], 
                    ['I', 'H', 'F'],
                    ['N', 'A', 'E'],
                    ];
        
        let dictionary = ['tin', 'the', 'fan', 'bed', 'bin', 'tab', 'bat', 'fat', 'faint'];
        let expected = ['tin', 'the', 'fan', 'bin'];

        let solutions = boggle_solver.findAllSolutions(grid, dictionary);

        // Lowercasing for case-insensitive string array matching.
        lowercaseStringArray(solutions);
        lowercaseStringArray(expected);
        expect(solutions.sort()).toEqual(expected.sort());
        
        });
    
    test('3x3 Grid- Recurse Diagonal' , () => {
        let grid = [['E', 'B', 'B'], 
                    ['K', 'I', 'F'],
                    ['N', 'A', 'O'],
                    ];
        
        let dictionary = ['bin', 'kin', 'fan', 'bed', 'fin', 'tab', 'bat', 'fat', 'bent'];
        let expected = ['bin', 'kin', 'fan','fin'];

        let solutions = boggle_solver.findAllSolutions(grid, dictionary);

        // Lowercasing for case-insensitive string array matching.
        lowercaseStringArray(solutions);
        lowercaseStringArray(expected);
        expect(solutions.sort()).toEqual(expected.sort());
        
        });
  });

  
  describe('Problem contraints', () => {
    // Cases such as Qu
    test('Qu Test case', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B',  'C', 'Qu'],
                  ['E', 'F',  'G', 'H'],
                  ['I', 'Qu', 'I', 'N'],
                  ['M', 'N',  'A', 'T']];
      let dictionary = ['quaint', 'nat', 'min', 'fab', 'quat', 'giant', 'fit', 'fig', 'change', 'test', 'quit'];
      let expected = ['quaint', 'nat', 'min', 'fab', 'quat', 'giant', 'fit', 'fig', 'quit'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
    test('Q test case', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                  ['Q', 'U', 'G', 'H'],
                  ['I', 'J', 'I', 'L'],
                  ['M', 'N', 'O', 'T']];
      let dictionary = ['quit', 'git', 'oil', 'hi', 'qin','not', 'tin'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
    test('St test case', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                  ['Y', 'St','K', 'H'],
                  ['I', 'J', 'G', 'L'],
                  ['M', 'N', 'O', 'P']];
      let dictionary = ['stay', 'staying', 'jog', 'sting', 'loop', 'pool', 'aim'];
      let expected = ['stay', 'staying', 'jog', 'sting'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
    test('S test case', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'T', 'C', 'D'],
                  ['Y', 'S','K', 'H'],
                  ['I', 'J', 'G', 'L'],
                  ['M', 'N', 'O', 'P']];
      let dictionary = ['stay','staying', 'jog', 'poll', 'aim', 'dog'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
 
  });

  
  describe('Input edge cases', () => {

    // Example Test using Jess
    test('Dictionary is empty', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                  ['E', 'F', 'G', 'H'],
                  ['I', 'J', 'K', 'L'],
                  ['M', 'N', 'O', 'P']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
    test('Duplicate Letters' , () => {
        let grid = [['E', 'B', 'E', 'N'], 
                    ['N', 'H', 'O', 'W'],
                    ['O', 'I', 'Y', 'K'],
                    ['K', 'T', 'Y', 'G']
                    ];
        
        let dictionary = ['kit', 'hit', 'yow', 'ben', 'hen', 'tab', 'bat', 'fat', 'bent'];
        let expected = ['kit', 'hit', 'yow', 'ben', 'hen'];

        let solutions = boggle_solver.findAllSolutions(grid, dictionary);

        // Lowercasing for case-insensitive string array matching.
        lowercaseStringArray(solutions);
        lowercaseStringArray(expected);
        expect(solutions.sort()).toEqual(expected.sort());
        
        });
    
    test('Short words' , () => {
        let grid = [['E', 'B', 'B'], 
                    ['K', 'I', 'F'],
                    ['H', 'A', 'N'],
                    ];
        
        let dictionary = ['hi', 'bin', 'kin', 'fan', 'kia', 'fin', 'brain', 'bet', 'bnf', 'bent'];
        let expected = ['bin', 'kin', 'fan','fin', 'kia'];

        let solutions = boggle_solver.findAllSolutions(grid, dictionary);

        // Lowercasing for case-insensitive string array matching.
        lowercaseStringArray(solutions);
        lowercaseStringArray(expected);
        expect(solutions.sort()).toEqual(expected.sort());
        
        });
    
    
  });
});
