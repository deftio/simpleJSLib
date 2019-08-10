#!/usr/bin/env node 

//test AMD loader


var requirejs = require("./libs/r.js"); // this is to load the AMD style loader from requirejs (see requirejs.org)
//console.log(requirejs);

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs (["jsumd.js"]); //this is to assign your module to the var x for usage in node

var x=requirejs("jsumd");

console.log("running module test...");

console.log("our module has the following keys (visible properties):");
console.log("\n" + Object.keys(x).map(function(z){return z.toString()+" : "+ typeof(x[z])}).join("\n"));

console.log("\nsimple tests:");
console.log("x.a returns "+x.a());
console.log("x.b returns "+x.b());
