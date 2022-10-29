
const axios = require('axios')

const sharp = require('sharp')




async function generate(url, cardName) {
    const imageResponse = await axios({url: url, responseType: 'arraybuffer'})
    const buffer = Buffer.from(imageResponse.data, 'binary') 
    const card = `cards/${cardName}.jpg`
    sharp(buffer)
    .resize({
        width: 308,
        height: 607
    })
    .toBuffer({resolveWithObject: true})
    .then(({ data, info }) =>{
        sharp(card)
        .composite([
            {input: data} 
        ])
        .toFile(`new_cards/${cardName}_new.jpg`)
    })
}

async function processImage(url, cardName) {
    generate(url, cardName)
}

module.exports = {processImage};