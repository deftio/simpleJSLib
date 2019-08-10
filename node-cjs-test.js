#!/usr/bin/env node 

var x = require ("./simpleJSLib.js"); //this is to assign your module to the var x for usage in node

console.log("running module test...");

console.log("our module has the following keys (visible properties):");
console.log("\n" + Object.keys(x).map(function(z){return z.toString()+" : "+ typeof(x[z])}).join("\n"));

console.log("\nsimple tests:");
console.log("x.a returns "+x.a());
console.log("x.b returns "+x.b());
