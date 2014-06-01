/**
 * Created by azu on 2014/06/01.
 * LICENSE : MIT
 */
"use strict";
var _ = require("lodash");
// referenceFormID を追加する
function build(data) {
    /*
        参照してる文章
        参照されてる文章
        を追加する
     */
    // 参照してる文章オブジェクトを取得
    function findObjectHasSomeId(data, idList) {
        return data.filter(function (toObject) {
            var ids = toObject.ids;
            return idList.some(function (fromToID) {
                return _.contains(ids, fromToID);
            });
        });
    }

    // 参照されてる文章オブジェクトを取得
    function findReferredObject(data, idList) {
        return data.filter(function (toObject) {
            var ids = toObject.referenceIds;
            return idList.some(function (toId) {
                return _.contains(ids, toId);
            });
        });
    }

    function createFromToList(object) {
        var getFilePath = _.property('filePath');
        var ownIds = object.ids;
        var referenceIds = object.referenceIds;
        // objectが参照してるidを持ってるオブジェクトの配列を取得
        object.referFilePaths = findObjectHasSomeId(data, referenceIds).map(getFilePath);
        object.referredFilePaths = findReferredObject(data, ownIds).map(getFilePath);
        return object;
    }

    return data.map(createFromToList);
}
module.exports = build;