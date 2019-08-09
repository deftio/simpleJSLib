
# Javascript UMD working example

This repo contains a working example of a simple UMD javascript library which exports correctly on both nodejs and <web> without need for a build tool.  Useful for quick n dirty jobs.

## Usage

Using the file jsumd.js as a template define your module here:
```javascript
//see jsumd.js in this repo

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        //console.log("AMD")
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

    // YOUR LIBRARY CODE HERE 
    myLibraryCode.a = function(){return "a"};
    myLibraryCode.b = function(){return "b"};
    myLibraryCode.simpleMethod = function(){return "simpleMethod called"};
    
    myLibraryCode.simplePropArray = [1,2,3,4,5];

    // return your module
    return myLibraryCode;
}));

```

Now in the browser simply include a tag like this:
```HTML

<script src="./jsumd.js" type="text/javascript"></script>
<script>
//use your library with the name you gave in in the export name line...
myModule.simpleMethod()  // calls function simpleMethod in myModule
</script>
```

And in nodejs do this:
```javascript

var x = require ("./jsumd.js"); //this is to assign your module to the var x for usage in node
x.simpleMethod();  // calls simpleMethod in your node js code

```
 
### License yada
BSD 2.0 License (see file in repo)

Good luck!
-Manu
