//  Dependancies
var next        =   require('./_log'),
    loggerModes =   require('./modes.json').loggerModes;



//  Check the parameters passed
function checkParams(message, settings) {
    'use strict';


    /*
    *   IncludeTime is provided in original message as :
    *       - property in JS object notation
    *       - array
    *
    */
    if (message instanceof Object) {
        if (!(message instanceof Array) && !(message instanceof Date)) {
            settings.mode        = message.mode        || settings.mode;
            settings.includeTime = message.includeTime || settings.includeTime;
            delete message.includeTime;
            delete message.mode;
        } /*else if (message instanceof Array) {
                //  last item in the array
                if (_index === (message.length - 1)) {
                    switch (typeof message[_index]) {
                        case 'boolean':
                            settings.includeTime =  message[_index];
                            message.pop();
                            break;
                        default:
                            //  do nothing!
                    }
                }
            }*/
    }

    //  Configuration
    switch (settings.mode) {
        case 'info':
        case 'information':
        case 1:
            next(message, {
                mode        :   loggerModes.info,
                includeTime :   settings.includeTime
            });
            break;
        case 'success':
        case 'scs':
        case 2:
            next(message, {
                mode        :   loggerModes.success,
                includeTime :   settings.includeTime
            });
            break;
        case 'warn':
        case 'warning':
        case 3:
            next(message, {
                mode        :   loggerModes.warning,
                includeTime :   settings.includeTime
            });
            break;
        case 'err':
        case 'error':
        case 0:
            next(message, {
                mode        :   loggerModes.error,
                includeTime :   settings.includeTime
            });
            break;
        //  default === info
        default:
            next(message, {
                mode        :   loggerModes.info,
                includeTime :   settings.includeTime
            });
    }

}



//  Export the module
module.exports  =   checkParams;
