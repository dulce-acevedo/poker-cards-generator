const axios = require('axios')
const sharp = require('sharp')


//Use fs here
async function generate(url, cardName) {
    const imageResponse = await axios({url: url, responseType: 'arraybuffer'})
    const buffer = Buffer.from(imageResponse.data, 'binary') 
    const card = `cards/${cardName}.jpg`
    
    //console.log("{ Card URL: " + url +" }" + "{Card Name: " +  cardName + " }")
    
    const imageResize = await sharp(buffer).resize({
        width: 308,
        height: 607
    }) .toBuffer({resolveWithObject: true})

    const imageComposite = await sharp(card).composite([
        {input: imageResize.data} 
    ]) .toBuffer({resolveWithObject: true})

    // console.log(imageComposite.data.toString('base64'))
    return imageComposite.data.toString('base64');
    
}

async function processImage(url, cardName) {
    let image = await generate(url, cardName);
    return image;
}

module.exports = {processImage};