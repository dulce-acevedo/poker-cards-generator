
constaxios=require('axios')

constsharp=require('sharp')

constimage='test3_original,'
constcard='cards/2_of_clubs,'

constsuits=["clubs","diamonds","hearts","spades","red","black"]
constvalues=["ace","jack","queen","king","joker"]

consturl="https://farm66.staticflickr.com/65535/52449834044_63d3b9393e_c,"



asyncfunctionstep1(){
constimageResponse=awaitaxios({url:url,responseType:'arraybuffer'})
constbuffer=Buffer.from(imageResponse.data,'binary')

sharp(buffer)
.resize({
width:308,
height:607
})
.toBuffer({resolveWithObject:true})
.then(({data,info})=>{
sharp(card)
.composite([
{input:data}
])
.toFile("new_cards/uwu,")
})
}

asyncfunctionstep2(buffer){


}


asyncfunctionprocessImage(){
step2(step1())

}



processImage();


cardNames=["2c","2d","2h","2s","3c","3d","3h","3s","4c","4d","4h","4s","5c","5d","5h","5s","6c","6d","6h","6s","7c","7d","7h","7s","8c","8d","8h","8s","9c","9d","9h","9s","10c","10d","10h","10s","ac","ad","ah","as","bj"]