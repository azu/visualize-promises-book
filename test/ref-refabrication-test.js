/**
 * Created by azu on 2014/06/01.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var data = require("../data.json");
var build = require("../app/Model/ref-refabrication");
describe("ref-refabrication", function () {
    it("#build", function () {
        var reData = build(data);
        console.log(reData);
    });
});