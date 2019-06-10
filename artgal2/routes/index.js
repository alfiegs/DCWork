let express = require('express');
let router = express.Router();
let data = require('../data/data.json') //data avriable equals whole json object

router.get('', (req, res) => {
    let pagePhotos = [];
    let pageSpeakers = data.speakers;
    pageSpeakers.forEach((speakerObj)=>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork);
    })
    console.log(pagePhotos)
    res.render('index', {
        artwork: pagePhotos,
        speakers: data.speakers,
        allSpeakers: data.speakers
    })
});

module.exports = router

