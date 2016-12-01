//  Dependancies
var setOutput = require('./setOutput'),
    print     = require('./printToFile'),
    fs        = require('fs'),
    colors    = require('colors');



//  Log to the console
function log(message, settings) {
    var output  =   setOutput(message, settings),
        toPrint =   output.messageHeader + output.messageBody + output.messageFooter;


    ////////
    console.log(colors[settings.mode.style](toPrint));

    //  Print to file
    if (settings.print) {
        print(output.messageBody, (settings.mode.message.toLowerCase() + 'Logs.txt'));
    }
}



//  Export the module
module.exports  =   log;
