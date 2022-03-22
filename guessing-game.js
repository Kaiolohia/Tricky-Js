function guessingGame() {
    let num = Math.floor(Math.random() * 100)
    let guesses = 0
    let won = false
    return function game(guess) {
        if (won) {
            return "The game is over, you already won!"
        }
        guesses++
        if ( guess === num && won === false) {
            won = true
            return `You win! You found ${num} in ${guesses} guesses.`
        }
        if ( guess >= num) {
            return `${guess} is too high!`
        }
        return `${guess} is too low!`
    }
}

module.exports = { guessingGame };
