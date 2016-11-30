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
        'This is the array of messages',
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
    }, 3000);
    setTimeout(function() {
        logs(arrayOfValues);
        return resolve();
    }, 5000);
//  2. Object message (one parameter passed that includes configurations as properties)
}).then(function() {
    return new Promise(promise_cb);
    function promise_cb(resolve) {
        setTimeout(function() {
            logs(objectMessage_conf);
            return resolve();
        }, 3000);
    }
//  3. Two parameters passed (first<message_to_log>, second<string || number || object>)
}).then(function() {
    return new Promise(promise_cb);
    function promise_cb(resolve) {
        setTimeout(function() {
            stringMessage_sim   =   'This is the simple string message, with mode defined as a string';
            logs(stringMessage_sim, 'warn');
        }, 3000);
        setTimeout(function() {
            stringMessage_sim   =   'This is the simple string message, with mode defined as a number value';
            logs(stringMessage_sim, 2);
        }, 5000);
        setTimeout(function() {
            objectMessage_sim.additions =   'With both mode being set and with time included';
            logs(objectMessage_sim, {
                mode    :   'information',
                includeTime :   true
            });
            return resolve();
        }, 7000);
    }
//  4. Instace of Constructor (simple)
}).then(function() {
    var log = new logs();
    ////////
    return new Promise(promise_cb);
    function promise_cb(resolve) {
        setTimeout(function() {
            stringMessage_sim   =   'This is the SUCCESS message, logged out by using the method on a new instance of a logger';
            log.scs(stringMessage_sim);
        }, 3000);
        setTimeout(function() {
            stringMessage_sim   =   'This is the WARNING message, logged out by using the method on a new instance of a logger';
            log.warning(stringMessage_sim);
            return resolve();
        }, 5000);
    }
//  5. Instance of Constructor with predefined configurations
}).then(function() {
    var warnLog = new logs(3),
        scsLog  = new logs({
            mode        :   'success',
            includeTime :   true
        });
    ////////
    return new Promise(promise_cb);
    function promise_cb(resolve) {
        setTimeout(function() {
            objectMessage_sim.additions =   'Constructed with an instance of logger, with predefined configurations (including mode and time)';
            scsLog(objectMessage_sim);
        }, 3000);
        setTimeout(function() {
            objectMessage_sim.additions =   'Constructed with an instance of logger, with predefined configurations';
            warnLog(objectMessage_sim);
        }, 5000);
    }
});
