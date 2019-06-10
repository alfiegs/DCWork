
let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    // res.send('hello world')

    let imgURL = ['https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn',
    'https://snworksceo.imgix.net/dtc/10ec0a64-8f9d-46d9-acee-5ef9094d229d.sized-1000x1000.jpg?w=1000',
    'https://thumbs-prod.si-cdn.com/X_8oA8_P57VZtb6CheHfQdX_8hg=/800x600/filters:no_upscale():focal(1501x569:1502x570)/https://public-media.si-cdn.com/filer/1e/1e/1e1e3aea-e930-45d2-9bc4-6dd50cccf66d/istock-511313058.jpg'

    ]

    res.render('index', {
        title: 'working with EJS',
        pageID: 'home page',
        images: imgURL[1]
    })


})


router.get('/puppies', (req, res) => {

    let id = req.params.id;
    let imgURL = ['https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn',
    'https://snworksceo.imgix.net/dtc/10ec0a64-8f9d-46d9-acee-5ef9094d229d.sized-1000x1000.jpg?w=1000',
    'https://thumbs-prod.si-cdn.com/X_8oA8_P57VZtb6CheHfQdX_8hg=/800x600/filters:no_upscale():focal(1501x569:1502x570)/https://public-media.si-cdn.com/filer/1e/1e/1e1e3aea-e930-45d2-9bc4-6dd50cccf66d/istock-511313058.jpg'

    ]

    res.render('index', {
        title: 'working with EJS',
        pageID: 'home page',
        images: imgURL
    })


})


router.get('/puppies/:id', (req, res) => {

    // let id = req.params.id;
    // res.send(id)

        let id = req.params.id;

    let imgURL = ['https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn',
    'https://snworksceo.imgix.net/dtc/10ec0a64-8f9d-46d9-acee-5ef9094d229d.sized-1000x1000.jpg?w=1000',
    'https://thumbs-prod.si-cdn.com/X_8oA8_P57VZtb6CheHfQdX_8hg=/800x600/filters:no_upscale():focal(1501x569:1502x570)/https://public-media.si-cdn.com/filer/1e/1e/1e1e3aea-e930-45d2-9bc4-6dd50cccf66d/istock-511313058.jpg'

    ]

    res.render('index', {
        title: 'working with EJS',
        pageID: 'home page',
        images: imgURL[id]
    })


})


router.get('/doggos', (req, res) => {

    // let id = req.params.id;
    // res.send(id)

        let id = req.params.id;

        let us = {
            fname: "Alfie",
            lname: "Santos", 
        }

    let imgURL = ['https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn',
    'https://snworksceo.imgix.net/dtc/10ec0a64-8f9d-46d9-acee-5ef9094d229d.sized-1000x1000.jpg?w=1000',
    'https://thumbs-prod.si-cdn.com/X_8oA8_P57VZtb6CheHfQdX_8hg=/800x600/filters:no_upscale():focal(1501x569:1502x570)/https://public-media.si-cdn.com/filer/1e/1e/1e1e3aea-e930-45d2-9bc4-6dd50cccf66d/istock-511313058.jpg'

    ]

    res.render('allPuppies', {
        title: 'working with EJS',
        pageID: 'home page',
        images: imgURL,
        users: us,
    })


})

module.exports = router;