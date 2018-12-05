const axios = require('axios');
axios({
        method: 'get',
        url: 'https://dog.ceo/api/breeds/image/random',
        responseType: 'stream'
    })
    .then(function (response) {
        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
const wallpaper = require('wallpaper');

(async () => {
    await wallpaper.set('dog.jpg');

    await wallpaper.get('/downloads/dogimage');
    //=> '/Users/sindresorhus/unicorn.jpg'
})();
var download = require('download-file')

var url = "https://dog.ceo/api/breeds/image/random"

var options = {
    directory: "/images/dogimage",
    filename: "dog.jpg"
}

download(url, options, function (err) {
    if (err) throw err
    console.log("meow")
})