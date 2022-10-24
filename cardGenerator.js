
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

    const resize_image = sharp(buffer)
    .resize({
        width: 179,
        height: 281
    })
    await resize_image.toFile("test3_resize.jpg")
}

async function step2() {

    const card_image = sharp(card)
    .composite([
        {input: 'test3_resize.jpg'} 
    ])
    await card_image.toFile("uwu.jpg")
    .then(() => console.log("done..."))
}

async function processImage(){
    await step1();
    await step2();
}


processImage();
  