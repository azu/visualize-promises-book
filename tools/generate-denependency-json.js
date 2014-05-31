#!/usr/bin/env node

var AdocDependency = require("asciidoc-dependency-graph");
var path = require("path");
var adoc = new AdocDependency({
    "cwd": path.resolve(process.argv[2]) ,
    "pattern": "**/*.adoc"
});
adoc.parse().then(function (array) {
    process.stdout.write(JSON.stringify(array));
}).catch(console.error.bind(console));