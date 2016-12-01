//  Set configurations
function setConfiguration(configuration, settings) {
    switch (typeof configuration) {
        //  print || mode
        case 'string':
            switch (configuration.toLowerCase()) {
                //  print
                case 'print':
                    settings.print  =   true;
                    break;
                //  mode
                default:
                    settings.mode = configuration.toLowerCase();
            }
            break;
        //  mode
        case 'number':
            settings.mode = configuration;
            break;
        //  includeTime
        case 'boolean':
            settings.includeTime =  configuration;
            break;
        //  mode && print && includeTime
        case 'object':
            if (configuration && !(configuration instanceof Array) && !(configuration instanceof Date)) {
                settings.mode        =  configuration.mode        || settings.mode;
                settings.print       =  configuration.print       || settings.print;
                settings.includeTime =  configuration.includeTime || settings.includeTime;
            }
            break;
        default:
            //  default values already defined!
    }

    ////////
    return settings;
}


//  Export the module
module.exports =    setConfiguration;
