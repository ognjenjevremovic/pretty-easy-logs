//  Dependancies
var setOutput = require('./_setMessage'),
    fs        = require('fs'),
    colors    = require('colors');



//  Log to the console
function log(message, settings) {
    var output  =   setOutput(message, settings),
        toPrint =   output.messageHeader + output.messageBody + output.messageFooter;

    ////////
    console.log(colors[settings.mode.style](toPrint));

    //  Errors print
    switch (settings.mode) {
        case 'err':
        case 'error':
        case 0:
            printIt(output.messageBody);
            break;
        default:
            //  do nothing!
    }
}



//  Export the module
module.exports  =   log;
