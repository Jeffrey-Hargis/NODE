var wallpaper = require('wallpaper');
var axios = require('axios');
var downloadFile = require('download-file');

axios.get('https://dog.ceo/api/breeds/image/random').then(function (response) {

    var img = response.data.message;

    var options = {
        directory: "./images/dog/",
        filename: "dog.jpg"
    }

    downloadFile(img, options, function (err) {
        if (err) throw err
        wallpaper.set('./images/dog/dog.jpg');
    });
});