export let myModule = (()=>{

    var myLibraryCode = {};
    myLibraryCode.exportName = "myModule"; // this is the name you give to your library in browser apps.  In nodejs this is not relavant.

    // your code goes here... 
    myLibraryCode.a = function(){return "a"};
    myLibraryCode.b = function(){return "b"};
    myLibraryCode.num = 987654321;
    myLibraryCode.nestObject = {"foo" : "bar", "arr" : [2,4,6,7], obj: {"x" : 42}};
    myLibraryCode.simpleMethod = function(){return "simpleMethod called"};
    myLibraryCode.simplePropArray = [1,2,3,4,5];

    // return your module
    return myLibraryCode;
    
})();
export default myModule