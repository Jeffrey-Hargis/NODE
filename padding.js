const _ = require("lodash");

const nums = [43, 73, 4776, 78374, 245];

nums.forEach(e => {

    console.log(_.padStart(e.toString(), 20, '.'));
});