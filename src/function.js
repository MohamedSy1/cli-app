const prompt = require('prompt-sync')();

const askYourName = () => {
    const name = prompt("what is your name? ")
    return `hello ${name} `
}

const timesTwo = () => {
    const num = prompt(`How many more times? `)
    console.log(`Your num multiplied by two is: ${num * 2}`)
}

module.exports = {
    askYourName,
    timesTwo
}