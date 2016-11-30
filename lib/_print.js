//  Dependancies
var setMessage  =   require('./_setMessage'),
    datter      =   require('pretty-easy-dates'),
    fs          =   require('fs');


//  Print to file
function _print(params) {
    //  Set message
    var message =   setMessage('ERROR', params, true).messageBody + "\n\n\n";
    //  Print the message
    fs.readFile('./errors.txt', function(error, data) {
        if (error) {
            //  Create log file first
            if(error.code === 'ENOENT') {
                fs.writeFile('./errors.txt', message);
            }
        }
        //  Log file exist, print to it
        if (!error && data) {
            fs.writeFile('./errors.txt', data + message);
        }
    });
}



//  Export the module
module.exports  =   _print;
