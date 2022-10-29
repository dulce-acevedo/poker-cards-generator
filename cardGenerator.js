
const axios = require('axios')

const sharp = require('sharp')

const image = 'test3_original.jpg'
const card = 'cards/2_of_clubs.jpg'

const suits = ["clubs", "diamonds", "hearts", "spades", "red", "black"]
const values = ["ace", "jack", "queen", "king", "joker"]

const url = "https://farm66.staticflickr.com/65535/52449834044_63d3b9393e_c.jpg"



async function step1() {
    const imageResponse = await axios({url: url, responseType: 'arraybuffer'})
    const buffer = Buffer.from(imageResponse.data, 'binary') 

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
        .toFile("new_cards/uwu.jpg")
    })
}

async function step2(buffer) {

    
}


async function processImage() {
    step2(step1())

}



processImage();
  