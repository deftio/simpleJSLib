
# Simple JS Lib: A portable Javascript library working example based on the UMD (Universal Module Defition)

This repo contains a working example of a simple "universal" javascript library which exports correctly on commonjs (nodejs), requirejs, and web-browser environments without need for a build/packing tool.  This allows properly written js code to work in both browser and console apps.

Useful for quick n dirty jobs. Based on the UMD univeral module definition.

## Usage

Using the file simpleJSlib.js as a template define your module here:

```javascript
//see simpleJSlib.js in this repo

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        //console.log("AMD") 
        define([], factory);
    } else if (typeof exports === 'object') {
        
        if ((typeof module !== 'object' ) || (typeof module !== "function") ) // this hack required for older versions of node
            var m =require('module');
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports, like Node.
        //console.log(" CommonJS ...");
        var lib= factory();
        module.exports=lib;

    } else {
        //console.log("browser..",root, typeof root);
        // Browser globals (root is window)
        var lib = factory();
        root[lib["exportName"]] = lib;
  }
//end of "boilerplate" ====== below is where the real library code is written
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

<script src="./simpleJSlib.js" type="text/javascript"></script>
<script>
//use your library with the name you gave in in the export name line...
myModule.simpleMethod()  // calls function simpleMethod in myModule
</script>
```

And in nodejs do this (using built-in require)
```javascript

var x = require ("./simpleJSlib.js"); //this is to assign your module to the var x for usage in node
x.simpleMethod();  // calls simpleMethod in your node js code

```

And if using AMD style definitions (see [requirejs.org](requirejs.org) ) use this
```javascript

var requirejs = require("./path/to/requirejs/r.js"); // this is to load the AMD style loader from requirejs (see requirejs.org)

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs (["path/to/your/library/simpleJSlib.js"]); // note jsumd is just what the example is named here.  It should be whatever your actual library is called.

var x=requirejs("simpleJSLib"); // requirejs uses the filename given above as the object name 

x.simpleMethod();  // calls simpleMethod
```

### Testing

In the repo are 3 crude tests:
```
umdtest.html        - a simple web page loading the example module - just load in any browser 
node-cjs-test.js    - a simple nodejs app using built-in require (commonjs format)
node-amd-test.js    - a simple console nodejs app using AMD style requirejs loading
```

to use the nodejs tests either type your local invocation of node such as:

```
node node-cjs-test.js
```

or on POSIX systems you can just run them directly (assuming nodejs is installed)

```
./node-cjs-test.js   // this uses the built-in shebang 
```


### NPM and Publshing
If you wish to make your library available to the NPM universe, install npm and the follow these commands.

```shell
npm init
```

npm will prompt you for several items and create a package.json file.  Once this is complete you can add dependancies using npm commands.  If you do plan on publising your libray be sure to check to make sure you have chosen a unique name in the npm universe.  You can search it as [npmjs](https://www.npmjs.com/).

Now when you are all ready to publish it just use this command and npm will push it to the npm servers and host it.

```shell
npm publish
```

### CDN
npm also provides a free CDN (Content Delivery Network) so you can use your new library.  You can reade more about it here: [unpkg](https://unpkg.com).  

Just including the name like this in your HTML code:

```html
<script src="https://unpkg.com/your-library-name"></src>
```


### Why?

Had issues with finding simple examples for basic bare-bones js library defitions.   This example should work without any reliance on a larger build framework/packer for quick testing.

Goog luck & feedback welcome

-Manu

### License yada yada

BSD 2.0 License (see file in repo)
