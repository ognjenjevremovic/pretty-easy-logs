//  Require dependancies
var next             =  require('./checkArgs'),
    setConfiguration =  require('./settings');



//  Logger (called as function || constructor)
function Logger(first_param, second_param) {
    'use strict';


    //  set defaults
    var defaults =  {};
        defaults.mode   =   'information';
        defaults.print  =   false;
        defaults.includeTime =  false;

    //  init
    var message, configuration,
        settings =  defaults;


    //  Called as function
    if (!(this instanceof Logger) && first_param) {
        message  =  first_param; configuration =    second_param;
        if (!configuration) {
            if ((typeof configuration === 'object') && (configuration.mode || configuration.print || configuration.includeTime)) {
                configuration   =   {};
                configuration.mode  =   message.mode    ||  defaults.mode;
                configuration.print =   message.print   ||  defaults.print;
                configuration.includeTime   =   message.includeTime ||  defaults.includeTime;
            }
        }
        settings =  setConfiguration(configuration, settings);

        ////////
        return next(message, settings);
    }

    //  Called as constructor
    if (this instanceof Logger) {
        configuration = first_param;
        this.settings = setConfiguration(configuration, settings);

        //  Constructor instance with default configurations
        switch (this.settings.mode) {
            //  info
            case 'information':
            case 'info':
            case 1:
                return this.constructor.prototype.information.bind(this);
            //  success
            case 'success':
            case 'scs':
            case 2:
                return this.constructor.prototype.success.bind(this);
            //  warning
            case 'warning':
            case 'warn':
            case 3:
                return this.constructor.prototype.warning.bind(this);
            //  error
            case 'error':
            case 'err':
            case 0:
                return this.constructor.prototype.error.bind(this);
            //  default === info
            default:
                return this.constructor.prototype.info.bind(this);
        }
    }
}

//  Log info
Logger.prototype.information =  Logger.prototype.info = function(param) {
    next(param, this.settings);
};
//  Log success
Logger.prototype.success =  Logger.prototype.scs =  function(param) {
    next(param, this.settings);
};
//  Log warnings
Logger.prototype.warning =  Logger.prototype.warn = function(param) {
    next(param, this.settings);
};
//  Log errors
Logger.prototype.error   =  Logger.prototype.err =  function(param) {
    this.settings.print       = true;
    this.settings.includeTime = true;
    next(param, this.settings);
};



// Export the module
module.exports = Logger;
