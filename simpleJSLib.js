// Uses Node, AMD or browser globals to create a module.

//begin "boiler plate" 
(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        
        define([], factory);
    } else if (typeof exports === 'object') {
        
        if ((typeof module !== 'object' ) || (typeof module !== "function") ) // this hack required for older versions of node
            var m =require('module');
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        //console.log("node...");
        var lib= factory();
        module.exports=lib;

    } else {
        //console.log("browser..",root, typeof root);
        // Browser globals (root is window)
        var lib = factory();
        root[lib["exportName"]] = lib;
  }
//end of "boilerplate" ======
}(typeof self !== 'undefined' ? self : this, function ( /* dependancies go here, eg. lib1, $, ... ,  */) {
    "use strict";
    
    var myLibraryCode = {};
    myLibraryCode.exportName = "myModule"; // this is the name you give to your library in browser apps.  In nodejs this is not relavant.

    // your code goes here... 
    myLibraryCode.a = function(){return "a"};
    myLibraryCode.b = function(){return "b"};
    myLibraryCode.simpleMethod = function(){return "simpleMethod called"};
    myLibraryCode.simplePropArray = [1,2,3,4,5];

    // return your module
    return myLibraryCode;
}));

