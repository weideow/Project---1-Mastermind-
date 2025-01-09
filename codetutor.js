

// function checkGuess(playerGuess) {
//     let exactMatches = 0;
//     let correctColorsWrongPosition = 0;
//     let compSelectionCopy = [...compSelection];
//     let playerGuessCopy = [...playerGuess];

//     // Check for exact matches
//     for (let i = 0; i < compSelection.length; i++) {
//         if (compSelection[i] === playerGuess[i]) {
//             exactMatches++;
//             compSelectionCopy[i] = null;
//             playerGuessCopy[i] = null;
//         }
//     }
//     //credits to https://stackoverflow.com/questions/2790 8135/mastermind-in-java-right-color-in-the-wrong-position
//     // Check for correct color, wrong position
//     for (let i = 0; i < playerGuessCopy.length; i++) {
//         if (playerGuessCopy[i] !== null) {
//             for (let j = 0; j < compSelectionCopy.length; j++) {
//                 if (playerGuessCopy[i] === compSelectionCopy[j]) {
//                     correctColorsWrongPosition++;
//                     compSelectionCopy[j] = null; // prevent the loop from continuing and prevent duplicates
//                     break;
//                 }
//             }
//         }
//     }

//     console.log('Exact matches: ', exactMatches);
//     console.log('Correct color, wrong position: ', correctColorsWrongPosition);
// }

// const playerGuess = ['green', 'white', 'red', 'blue'];
// const compSelection = ['green', 'blue', 'red', 'purple'];

// checkGuess(playerGuess);

function checkGuess(finalAns) {
    let exactMatches = 0;
    let correctColorsWrongPosition = 0;
    let compSelectionCopy = [...compSelection];
    let playerGuessCopy = [...finalAns];

    // Check for exact matches
    for (let i = 0; i < compSelection.length; i++) {
        if (compSelection[i] === finalAns[i]) {
            exactMatches++;
            compSelectionCopy[i] = null; // to prepare 2 arrays for second check below, null is to skip over checks done earlier
            playerGuessCopy[i] = null;
        }
    }
    
    // Check for correct color, wrong position
    for (let i = 0; i < playerGuessCopy.length; i++) {
        if (playerGuessCopy[i] !== null) {
            for (let j = 0; j < compSelectionCopy.length; j++) {
                if (playerGuessCopy[i] === compSelectionCopy[j]) {
                    correctColorsWrongPosition++;
                    compSelectionCopy[j] = null; // prevents duplicates from showing
                    break;
                }
            }
        }
    }

    console.log('Exact matches: ', exactMatches);
    console.log('Correct color, wrong position: ', correctColorsWrongPosition);

    // Prepare the hint result text
    const hintResult = `Exact matches: ${exactMatches}, Correct color, wrong position: ${correctColorsWrongPosition}`;
    console.log(hintResult);

    if (exactMatches === 4) {
        winner = true; // Game won if all matches are exact
    }

    return hintResult; // Return the hint result
}