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
    physics: {barnesHut: {gravitationalConstant: -3400, centralGravity: 0.5, springLength: 222, springConstant: 0.046, damping: 0.1}}
};
var graph = new vis.Graph(container, data, options);

