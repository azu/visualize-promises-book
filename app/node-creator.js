"use strict";
var pather = require("path");
var _ = require("lodash");

function createNodes(data) {
    return data.map(function (object, index) {
        return {
            "id": index,// id is indexOf id
            "label": pather.dirname(object.filePath).split(pather.sep).pop() + "/" + pather.basename(object.filePath)
        };
    })

}
// create an array with edges
/*
    ids
    referenceIds
 */
function createEdges(data) {
    function findObjectHasSomeId(idList) {
        return data.filter(function (toObject) {
            var ids = toObject.ids;
            return idList.some(function (fromToID) {
                return _.contains(ids, fromToID);
            });
        });
    }

    function createFromToList(object, fromId) {
        var referenceIds = object.referenceIds;
        // objectが参照してるidを持ってるオブジェクトの配列を取得
        var toObjectList = findObjectHasSomeId(referenceIds);
        return toObjectList.map(function (object) {
            return {
                "from": fromId,
                "to": data.indexOf(object)
            };
        })
    }

    var arrayOfArray = data.map(createFromToList);
    return _.flatten(arrayOfArray);
}


module.exports.createNodes = createNodes;
module.exports.createEdges = createEdges;