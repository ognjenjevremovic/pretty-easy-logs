var logs =  require('./index'),

    ////////
    stringMessage_sim   =   'This is the most simplest message log, with default configurations (default info mode and no time included)',
    objectMessage_sim   =   {
        message   : 'This is the message log',
        trace     : 'That is provided as an JavaScript object literal',
        additions : 'With default info mode and no time included'
    },
    stringMessage_conf  =   'This is the simple mesage log, with configurations',
    objectMessage_conf  =   {
        message   : 'This is the message log',
        trace     : 'That is provided as an JavaScript object literal',
        additions : 'With mode and time included within the same object (as additional properties on the object)',
        'that will not' : 'be printed out',
        mode      : 2,
        includeTime : true
    },
    arrayOfValues = [
        'This is the array of messages\n',
        {message: 'Message from the same array', trace: 'On index position 1', 'with a type of': 'JavaScript object literal'},
        1337
    ];

//  1. One parameter passed (message_to_log<string || object || array>)
return new Promise(function(resolve) {
    setTimeout(function() {
        logs(stringMessage_sim);
    }, 1000);
    setTimeout(function() {
        logs(objectMessage_sim);
    }, 4000);
    setTimeout(function() {
        logs(arrayOfValues);
        return resolve();
    }, 7000);
//  2. Object message (one parameter passed that includes configurations as properties)
}).then(function() {
    return new Promise(promise_cb);

    ////////
    function promise_cb(resolve) {
        setTimeout(function() {
            logs(objectMessage_conf);
            return resolve();
        }, 3000);
    }
//  3. Two parameters passed (first<message_to_log>, second<string || number || object>)
}).then(function() {
    return new Promise(promise_cb);

    ////////
    function promise_cb(resolve) {
        setTimeout(function() {
            stringMessage_sim   =   'This is the simple string message, with mode defined as a string';
            logs(stringMessage_sim, 'warn');
        }, 3000);
        setTimeout(function() {
            stringMessage_sim   =   'This is the simple string message, with mode defined as a number value';
            logs(stringMessage_sim, 2);
        }, 6000);
        setTimeout(function() {
            stringMessage_sim   =   'This is the simple string message, that includes time';
            logs(stringMessage_sim, true);
        }, 9000);
        setTimeout(function() {
            objectMessage_sim.additions =   'With both mode being set and with time included';
            logs(objectMessage_sim, {
                mode    :   'information',
                includeTime :   true
            });
        }, 12000);
        setTimeout(function() {
            stringMessage_sim   =   'This is the simple string message, printed to the file';
            logs(stringMessage_sim, 'print');
        }, 15000);
        setTimeout(function() {
            objectMessage_conf.additions   +=   ' and will be printed to the file';
            objectMessage_conf.print        =   true;
            objectMessage_conf.mode         =   2;
            logs(objectMessage_conf);
            return resolve();
        }, 18000);

    }
//  4. Instance of Constructor with predefined configurations
}).then(function() {
    var warnLog         =   new logs('warn'),
        scsLog_withTime =   new logs({
            mode        :   'success',
            includeTime :   true
        }),
        errLog_all      =   new logs(0);

    return new Promise(promise_cb);

    ////////
    function promise_cb(resolve) {
        setTimeout(function() {
            objectMessage_sim.additions =   'This WARNING message is output with an instance of logger';
            warnLog(objectMessage_sim);
        }, 3000);
        setTimeout(function() {
            objectMessage_sim.additions =   'This SUCCESS message is output with an instance of logger and it includes time';
            scsLog_withTime(objectMessage_sim);
        }, 6000);
        setTimeout(function() {
            objectMessage_sim.additions =   'This ERROR message is output with an instance of logger';
            errLog_all(objectMessage_sim);
        }, 9000);
    }
}).then(function() {
    console.log('\nFinished!.');
});
