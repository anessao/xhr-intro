//JSON doesn't like comments and everything MUST be in quotes.. in JSON files
//the "new" tag is a constructor.  It's an object that has properties. xmlr has a bunch of stuff and the new tag will create a "copy" of that then names it as a new variable. Then you can use your variable name to access the information.
var myRequest = new XMLHttpRequest();

//add using dot notation

function executeThisCodeAfterFileLoaded(){
	console.log("it works!");
}
function executeThisCodeAfterFileFails(){
	console.log("booooo");
}

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);

//now we do something to the things || 2 things... GET/POST/PUT/DELETE..etc.. SECOND IS WHERE DO I GET IT FROM?
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
console.log("myRequest", myRequest);