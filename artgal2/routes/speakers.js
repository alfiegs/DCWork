let express = require('express');
let router = express.Router();
let data = require('../data/data.json')

let pagePhotos = [];
// let pageSpeakers = [];

router.get('/speakers', (req, res) => {
    data.speakers.forEach((speakerObj)=>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })
    res.render('speakers', {
        artwork: pagePhotos,
        allSpeakers: data.speakers,

    })
});
router.get('/speakers/:speakerid', (req, res) => {

    let pagePhotos = []
    let pageSpeakers = []
    data.speakers.forEach((speakerObj)=>{
        if(speakerObj.shortname == req.params.speakerid){
            pageSpeakers.push(speakerObj)
            pagePhotos = pagePhotos.concat(speakerObj.artwork)
        }

        pageTitle = pageSpeakers[0].title;
        artistName = pageSpeakers[0].name;

        res.render('speakers', {
            pageTitle: "Speaker List",
            artistName: "",
            artwork: pagePhotos,
            allSpeakers: pageSpeakers,

        })

    })
    // res.send('speaker page')
});

module.exports = router