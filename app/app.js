/**
 * Created by azu on 2014/05/31.
 * LICENSE : MIT
 */
"use strict";
var dataArray = require("../data.json");

var creator = require("./node-creator");
// create an array with nodes
var nodes = creator.createNodes(dataArray);
var edges = creator.createEdges(dataArray);

// create a graph
var container = document.getElementById('mygraph');
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    width: '100%',
    height: '100%',
    stabilize: false
};
var graph = new vis.Graph(container, data, options);

