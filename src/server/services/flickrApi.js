const https = require("https");
const { processImage } = require("./cardGenerator");
const { addToS3AndRedis,  isItInRedis, isItInS3,}= require("./persistance");
require("dotenv").config();

const flickr = {
    method: "flickr.photos.search",
    api_key: process.env.FLICKR_API_KEY,
    format: "json",
    media: "photos",
    content_type: 0,
    safe_search: 1,
    nojsoncallback: 1,
};
  
function createFlickrOptions(query, number) {
const options = {
    hostname: "api.flickr.com",
    port: 443,
    path: "/services/rest/?",
    method: "GET",
};
const str =
    "method=" +
    flickr.method +
    "&api_key=" +
    flickr.api_key +
    "&tags=" +
    query +
    "&per_page=" +
    number +
    "&format=" +
    flickr.format +
    "&media=" +
    flickr.media +
    "&content_type=" +
    flickr.content_type +
    "&safe_search=" +
    flickr.safe_search +
    "&nojsoncallback=" +
    flickr.nojsoncallback;
options.path += str;
return options;
}

async function parsePhotoRsp(rsp) {
  cardNames = [ "2c", "2d", "2h", "2s", "3c", "3d", "3h", "3s", "4c", "4d", "4h", "4s", 
  "5c", "5d", "5h", "5s", "6c", "6d", "6h", "6s", "7c", "7d", "7h", "7s", "8c", "8d", "8h", "8s", 
  "9c", "9d", "9h", "9s", "10c", "10d", "10h", "10s", "jc", "jd", "jh", "js",
  "qc", "qd", "qh", "qs", "kc", "kd", "kh", "ks", "ac", "ad", "ah", "as", "bj"];

  let themeCards = [];

  for (let i = 0; i < rsp.photos.photo.length; i++) {
      photo = rsp.photos.photo[i];
      url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
      let themeCard = await processImage(url, cardNames[i]);
      let jsonCard = { name: `${cardNames[i]}`, buffer: `${themeCard}` };
      themeCards.push(jsonCard);
  }
  return themeCards;
}

async function getFromFlickr(res, theme, cardKey, data){
  const options = createFlickrOptions(theme, 53);
  console.log("Getting information from flickr api");

  const flickReq = https.request(options, async (flickRes) => {
    let body = [];
    flickRes.on("data", function (chunk) {
      body.push(chunk);
    });
    flickRes.on("end", async function () {
      console.log(theme)
      let themeCards; 
      const bodyString = body.join("");
      const rsp = JSON.parse(bodyString);
      if (rsp.photos.photo.length === 0){
        console.log(" No result found in flickr")
        themeCards = [];
        data.push(themeCards);
      }
      else{
        themeCards = await parsePhotoRsp(rsp);
        data.push(themeCards);
        await addToS3AndRedis(data, cardKey);
      }
      res.send(data);
      res.end();
    });
  });
  flickReq.on("error", (e) => {
    console.error(e);
  });
  flickReq.end();
}

async function flickrImages(res, theme, cardKey){
  let data = [[{theme: `${theme}`}]];
  const checkRedis = await isItInRedis()
  if (checkRedis) {
    const resultJSON = JSON.parse(checkRedis);
    console.log("Getting cards from the redis cache");
    res.send(resultJSON.themeCards);

  } else {
    try {
      // If AWS available, try to get it from there, otherwise go to flickr
      if(process.env.AWS_DEV == 1){
      const S3Cards = await isItInS3()
      res.send(S3Cards);
      }
      else{
        getFromFlickr(res, theme, cardKey, data);
      }

    } catch (err) {
      // If error ocurred getting from S3 or cant find it, get it from Flickr
      if (err.statusCode === 404) {
        getFromFlickr(res, theme, cardKey, data);
      }
    }
  }
}

module.exports = {flickrImages};