function randomNumber(length) {
    let result = '';
    let characters = '0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function randomEmail(length, domain) {
    var randomcharacters = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        randomcharacters += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    var  result= `${randomcharacters}@${domain}`
    return result;
}
function randomAlfabet(length) {
    let result = '';
    let characters = '0123456780ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


// console.log(randomEmail(20,'privyid.tech'));
module.exports = {randomNumber,randomEmail,randomAlfabet};