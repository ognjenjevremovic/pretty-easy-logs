//  Dependancies
var next        =   require('./logToConsole'),
    loggerModes =   require('./modes.json').loggerModes;



//  Check the parameters passed
function checkArguments(message, settings) {
    'use strict';


    //  mode, includeTime and print configurations are provided in original message (as properties in JS object notation)
    if (message instanceof Object) {
        if (!(message instanceof Array) && !(message instanceof Date)) {
            settings.mode        =  message.mode        || settings.mode;
            settings.print       =  message.print       || settings.print;
            settings.includeTime =  message.includeTime || settings.includeTime;
            delete message.print;
            delete message.includeTime;
            delete message.mode;
        }
    }

    //  Configuration
    switch (settings.mode) {
        case 'information':
        case 'info':
        case 1:
            next(message, {
                mode        :   loggerModes.info,
                includeTime :   settings.includeTime,
                print       :   settings.print
            });
            break;
        case 'success':
        case 'scs':
        case 2:
            next(message, {
                mode        :   loggerModes.success,
                includeTime :   settings.includeTime,
                print       :   settings.print
            });
            break;
        case 'warning':
        case 'warn':
        case 3:
            next(message, {
                mode        :   loggerModes.warning,
                includeTime :   settings.includeTime,
                print       :   settings.print
            });
            break;
        case 'err':
        case 'error':
        case 0:
            next(message, {
                mode        :   loggerModes.error,
                includeTime :   settings.includeTime,
                print       :   settings.print
            });
            break;
        //  default === info
        default:
            next(message, {
                mode        :   loggerModes.info,
                includeTime :   settings.includeTime,
                print       :   settings.print
            });
    }

}



//  Export the module
module.exports  =   checkArguments;
