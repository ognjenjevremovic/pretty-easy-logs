//  Dependancy
var dates = require('pretty-easy-dates');



//  Construct the message
function setMessage(message, settings) {
    'use strict';


    var messageHeader, messageBody, messageFooter;
    messageHeader = messageBody = messageFooter = '';

    //  Header
    messageHeader += '                       **********\n';
    messageHeader += '                       * ' + settings.mode.message + ' *\n';
    messageHeader += '                       **********\n\n';

    //  Body
    if (settings.includeTime) {
        messageBody +=  '                       ';
        messageBody +=  dates().now + "\n\n";
    }
    //  Type of message
    switch (typeof message) {
        case 'string':
        case 'number':
            messageBody +=  '                       = > ' + message;
            messageBody +=  '\n';
            break;
        case 'object':
            //  JS object notation
            if (!(message instanceof Array) && !(message instanceof Date)) {
                for (var _prop in message) {
                    messageBody +=  '                       = > ' +   _prop + " : " + message[_prop];
                    messageBody +=  '\n';
                }
            //  Array
            } else if (message instanceof Array) {
                for (var _index = 0; _index < message.length; _index++) {
                    switch (typeof message[_index]) {
                        case 'string':
                        case 'number':
                            messageBody +=  '                       = > ' + message[_index];
                            messageBody +=  '\n';
                            break;
                        case 'object':
                            for (var _propertie in message[_index]) {
                                messageBody +=  '                       = > ' + _propertie + ' : ' + message[_index][_propertie];
                                messageBody +=  '\n';
                            }
                            messageBody +=  '\n';
                            break;
                        default:
                            messageBody +=  '                       = > ' + message[_index];
                            messageBody +=  '\n';
                    }
                }
            }
            break;
        default:
            messageBody +='                       = > ' + message;
    }

    //  Footer
    messageFooter   =  '\n                       - - - END - - -\n';

    ////////
    return {
        messageHeader   :   messageHeader,
        messageBody     :   messageBody,
        messageFooter   :   messageFooter
    };
}



//  Export the module
module.exports  =   setMessage;
