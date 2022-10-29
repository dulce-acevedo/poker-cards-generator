const express = require('express');
const https = require('https');
const router = express.Router();

router.get('/:query', (req, res) => {
    const options = cr
})


function createFlickrOptions(query,number) {
    const options = {
    hostname: 'api.flickr.com',
    port: 443,
    path: '/services/rest/?',
    method: 'GET'
 }
 const str = 'method=' + flickr.method +
    '&api_key=' + flickr.api_key +
    '&tags=' + query +
    '&per_page=' + number +
    '&format=' + flickr.format +
    '&media=' + flickr.media +
    '&nojsoncallback=' + flickr.nojsoncallback;
    options.path += str;
    return options;
} 