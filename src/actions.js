// Actions: 
// Restart Game 
// Submit guess 
// Aural update

// create export for type as string 
// create const export for action

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer
})

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = guess => ({
    type: SUBMIT_GUESS,
    guess
})

export const GIVE_AURAL_UPDATE = 'GIVE_AURAL_UPDATE';
export const giveAuralUpdate = () => ({
    type: GIVE_AURAL_UPDATE
})
