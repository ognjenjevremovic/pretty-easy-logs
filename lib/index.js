//  Require dependancies
var next =  require('./_checkParams');



//  Logger (called as function || constructor)
function Logger(first_param, second_param) {
    'use strict';


    //  defaults
    var defaults =  {};
        defaults.mode = 'information';
        defaults.includeTime =  false;
    //  init
    var message,
        settings =  defaults;


    //  Called as function
    if (!(this instanceof Logger) && first_param) {
        message =   first_param;
        //  Configuration
        if (first_param && (second_param || second_param === 0)) {
            switch (typeof second_param) {
                case 'string':
                    settings.mode = second_param.toLowerCase();
                    break;
                case 'number':
                    settings.mode = second_param;
                    break;
                case 'object':
                    if (second_param && !(second_param instanceof Array) && !(second_param instanceof Date)) {
                        settings.mode        =  second_param.mode        ||  defaults.mode;
                        settings.includeTime =  second_param.includeTime ||  defaults.includeTime;
                    }
                    break;
                default:
                    settings.mode = defaults.mode;
            }
        }

        ////////
        return next(message, settings);
    }

    //  Called as constructor
    if (this instanceof Logger) {
        var configuration       =   first_param,
            configurationPassed =   configuration || configuration === 0;
        // init
        this.settings   =   settings;

        //  Constructor instance with default configurations
        if (configurationPassed) {
            switch (typeof configuration) {
                case 'string':
                case 'number':
                    this.settings.mode = configuration;
                    break;
                case 'object':
                    if (!(configuration instanceof Array) && !(configuration instanceof Date)) {
                        this.settings.mode        =  configuration.mode        ||  defaults.mode;
                        this.settings.includeTime =  configuration.includeTime ||  defaults.includeTime;
                    }
                    break;
                default:
                    //  defaults already set!
            }

            ////////
            switch (this.settings.mode) {
                //  info
                case 'info':
                case 'information':
                case 1:
                    return this.constructor.prototype.information.bind(this);
                //  success
                case 'success':
                case 'scs':
                case 2:
                    return this.constructor.prototype.success.bind(this);
                //  warning
                case 'warn':
                case 'warning':
                case 3:
                    return this.constructor.prototype.warning.bind(this);
                //  error
                case 'err':
                case 'error':
                case 0:
                    return this.constructor.prototype.error.bind(this);
                //  default === info
                default:
                    return this.constructor.prototype.info.bind(this);
            }
        }
    }

}

//  Log info
Logger.prototype.information    =   function(param) {
    this.settings.mode =    'information';
    next(param, this.settings);
};
//  Log success
Logger.prototype.success        =   function(param) {
    console.log(this.settings);
    this.settings.mode =    'success';
    next(param, this.settings);
};
//  Log warnings
Logger.prototype.warning        =   function(param) {
    this.settings.mode =    'warning';
    next(param, this.settings);
};
//  Log errors
Logger.prototype.error          =   function(param) {
    this.settings.mode =    'error';
    next(param, this.settings);
};

//  Alternatives
Logger.prototype.info   =   Logger.prototype.information;
Logger.prototype.scs    =   Logger.prototype.success;
Logger.prototype.err    =   Logger.prototype.error;
Logger.prototype.warn   =   Logger.prototype.warning;



// Export the module
module.exports = Logger;
