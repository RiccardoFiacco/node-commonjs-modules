const info = require('./names.js')
const hobbies = require('./hobbies.js')

function people(){
    let obj = {
        info: info.nameSur("ric","fiac"),
        hobbies: hobbies.hobbies("calcio","boxe", "pc")
    }
    return obj
}

console.log(people())