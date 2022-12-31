#!/usr/bin/env node 

import myModule  from "./myModule.js"; //import as an ES module

//console.log(Object.keys(y));
console.log("running module import test...");
console.log(Object.keys(myModule));

console.log("our module has the following keys (visible properties):");
console.log("\n" + Object.keys(myModule).map(function(z){return z.toString()+" : "+ typeof(myModule[z])}).join("\n"));

console.log("\nsimple tests:");
console.log("myModule.emyModuleportName returns '"+myModule.emyModuleportName+"'");
console.log("myModule.a returns "+myModule.a());
console.log("myModule.b returns "+myModule.b());
console.log("myModule.b returns "+JSON.stringify(myModule.nestObject));
console.log("");
