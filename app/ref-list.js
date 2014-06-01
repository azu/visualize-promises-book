"use strict";
var dataArray = require("../data.json");
var Vue = require("vue");
var pather = require("path");
Vue.filter('printPath', function (value, key) {
    // `this` points to the VM invoking the filter
    return pather.dirname(value).split(pather.sep).pop().replace(/(Ch\d*?)_.*?$/i, "$1")
        + "/" + pather.basename(value)
});
Vue.filter('githubURL', function (value, key) {
    return "https://github.com/azu/promises-book/tree/master/" + pather.dirname(value).split(pather.sep).pop() + "/" + pather.basename(value)
});
var demo = new Vue({
    el: '#demo',
    data: {
        items: require("./Model/ref-refabrication")(dataArray)
    }
});