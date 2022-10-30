const axios = require('axios')
const sharp = require('sharp')



//Use fs here
async function generate(url, cardName) {
    const imageResponse = await axios({url: url, responseType: 'arraybuffer'})
    const buffer = Buffer.from(imageResponse.data, 'binary') 
    const card = `cards/${cardName}.jpg`
    
    //console.log("{ Card URL: " + url +" }" + "{Card Name: " +  cardName + " }")
    
    sharp(buffer)
    .resize({
        width: 308,
        height: 607
    })
    .toBuffer({resolveWithObject: true})
    .then(({ data }) =>{
        sharp(card)
        .composite([
            {input: data} 
        ])
        //Check if the folder new_card exist 
        //If it doesn't make the folder and do .toFile
        //If it does then do nothing and keep going with the process
        .toFile(`new_cards/${cardName}_new.jpg`)
    })
}

async function processImage(url, cardName) {
    generate(url, cardName)
}

module.exports = {processImage};