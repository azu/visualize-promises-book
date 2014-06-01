"use strict";
var assert = require("power-assert");
var creator = require("../app/Model/node-creator");
describe("node-creator", function () {
    describe("#createEdges", function () {
        var data = [
            { filePath: '/Users/azu/Dropbox/workspace/JavaScript/library/asciidoc-dependency-graph/test/fixtures/x.adoc',
                ids: ['x-doc'],
                referenceIds: [] },
            { filePath: '/Users/azu/Dropbox/workspace/JavaScript/library/asciidoc-dependency-graph/test/fixtures/y.adoc',
                ids: ['y-doc', 'embed-y-code'],
                referenceIds: ['x-doc'] }
        ];
        it("should return array", function () {
            var array = creator.createEdges(data);
            assert(Array.isArray(array));
        });
        it("y -> x([1->0])", function () {
            var expected = [
                {from: 1, to: 0}
            ];
            var array = creator.createEdges(data);
            assert.deepEqual(array, expected);
        });
    });

});