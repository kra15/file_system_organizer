let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
// console.log(inputArr);
// node main.js tree""directoryPath"
//node main.js organize " directoryPath"
// node main.js help
let command = inputArr[0];
switch(command){
    case "tree":
        treefn(inputArr[1]);
        break;
    case "organize":
        organizefn(inputArr[1]);
         break;
    case "help":
        helpfn();
         break;
    default:
                    console.log("Please input right command ");
        break;
}
function treefn(dirPath){
    console.log("Tree command implemented for", dirPath);

}
function organizefn(dirPath){
    //console.log("organize command implemented for", dirPath);
// 1. input -> directory path given 
// 2. create -> organized files -> directory
if(dirPath==undefined){
    console.log("Kindly enter the path");
    return;

}
else{
    let doeseexist = fs.existsSync(dirPath);
    if(doeseexist){
let destPth = path.join(dirPath,"organized files");
if(fs.existsSync(destPth)==false){
    fs.mkdirSync(destPth);
}
    }
    else{
        console.log("Kindly enter the valid path");
        return;
    }
}
//3. identify categories of all the files present in that input directory->
//4. copy/cut files to that organized directory 
}
//function helpfn(dirPath){
    //console.log("
       // List of all the commands:
           //    node main.js tree "directoryPath"
             //  node main.js organize "directoryPath"
               //node main.js help
        
   // ");

