//  Dependancies
var setMessage  =   require('./setOutput'),
    fs          =   require('fs');


//  Print to file
function printToFile(message, fileName) {
    message +=  "\n\n\n";

    //  Print to file
    fs.readFile(fileName, function(error, data) {
        if (error && (error.code === 'ENOENT')) {
            fs.writeFile(fileName, message);
        }

        if (!error && data) {
            fs.writeFile(fileName, data + message);
        }
    });
}



//  Export the module
module.exports  =   printToFile;
