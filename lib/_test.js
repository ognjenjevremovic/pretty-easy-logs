//  Dependancies
var express     =   require('express'),
    logger      =   require('./index'),
    fs          =   require('fs');


var app =   express();


app.listen(3000, function() {
    console.log('Testing the logger\n');


    //  messages
    var simpleString    =   'This is the string message, logged out to the console',
        simpleObject    =   {
            message :   'This is the message.',
            trace   :   'It is provided by a JavaScript object literal.'
        },
        objectWithTime  =   {
            message     :   'This is the message',
            trace       :   'It is provided by a JavaScript object literal and includes a date',
            includeTime :   true
        },
        simpleArray     =   ['This is array of messages', 'Each should be logged to the console'],
        arrayWithTime   =   ['This is array of messages', 'Each should be logged to the console', 'And it should include time', true],
        arrayOfObjects  =   [
            {
                message :   'This is the first message in array',
                trace   :   'It is provided by a JavaScript object literal - first parameter of an array.'
            },
            {
                message :   'This is the second message in array',
                trace   :   'It is provided by a JavaScript object literal - second parameter of an array'
            },
            {
                message :   'This is the third message in array',
                trace   :   'It is provided by a JavaScript object literal - third parameter of an array'
            },
        ],
        arrayOfObjectsWithTime  =   [
            {
                message     :   'This is the first message in array',
                trace       :   'It is provided by a JavaScript object literal - first parameter of an array. And it should include time.',
                includeTime :   true
            },
            {
                message     :   'This is the second message in array',
                trace       :   'It is provided by a JavaScript object literal - second parameter of an array. And it should include time.',
                includeTime :   true
            },
            {
                message     :   'This is the third message in array',
                trace       :   'It is provided by a JavaScript object literal - third parameter of an array. And it should include time.',
                includeTime :   true
            },
        ],

        messages    =   [
            simpleString,
            simpleObject,
            objectWithTime,
            simpleArray,
            arrayOfObjects,
            arrayOfObjectsWithTime
        ],

        //  Message to log
        messageToLog    =   messages[1];



    setTimeout(function() {
        /*
        *   Info log :
        *       1.  JS object notation
        *       2.  'string'
        *       3.  shortcut
        *       4.  number
        */
        logger({
            mode        :   'info',
            includeTime :   true
        }, messageToLog);
        logger('information', messageToLog);
        logger(1, messageToLog);

        /*
        *   Success log :
        *       1.  JS object notation
        *       2.  'string'
        *       3.  shortcut
        *       4.  number
        */
        logger({
            mode        :   2,
            includeTime :   true
        }, messageToLog);
        logger('success', messageToLog);
        logger('scs', messageToLog);

        /*
        *   Warning log :
        *       1.  JS object notation
        *       2.  'string'
        *       3.  shortcut
        *       4.  number
        */
        logger({
            mode        :   'warning',
            includeTime :   true
        }, messageToLog);
        logger('warn', messageToLog);
        logger(3, messageToLog);

        /*
        *   Error log :
        *       1.  JS object notation
        *       2.  'string'
        *       3.  shortcut
        *       4.  number
        */
        logger({
            mode        :   'error',
            includeTime :   true
        }, messageToLog);
        logger('err', messageToLog);
        logger(0, messageToLog);

    }, 1000);

    setTimeout(function() {
        console.log('\n\n\nUsing as method on instance of \'Logger\'!\n');

        //  New logger instance
        var log     = new logger({
            includeTime :   true
        });

        //  Info log
        log.info(messageToLog);
        log.information(messageToLog);

        //  Success log
        log.success(messageToLog);
        log.scs(messageToLog);

        //  Warning log
        log.warn(messageToLog);
        log.warning(messageToLog);

        //  Error log
        log.err(messageToLog);
        log.error(messageToLog);
    }, 9000);

    setTimeout(function() {
        console.log('\n\n\nUsing as custom instance of \'Logger\'!\n');

        //  Instances of loggers
        var infoLog1    =   new logger({
            mode        :   'information',
            includeTime :   true
            }),
            infoLog2    =   new logger('info'),
            infoLog3    =   new logger(1),

            successLog1 =   new logger('success'),
            successLog2 =   new logger('scs'),
            successLog3 =   new logger({
                mode        :   2,
                includeTime :   false
            }),

            warnLog1    =   new logger('warning'),
            warnLog2    =   new logger({
                mode        :   'warn',
                includeTime :   true
            }),
            warnLog3    =   new logger(3),

            errLog1     =   new logger({
                mode        :   'error',
                includeTime :   false
            }),
            errLog2     =   new logger('err'),
            errLog3     =   new logger(0);

        //  Info log
        infoLog1(messageToLog);
        infoLog2(messageToLog);
        infoLog3(messageToLog);

        //  Warn log
        warnLog1(messageToLog);
        warnLog2(messageToLog);
        warnLog3(messageToLog);

        //  Success log
        successLog1(messageToLog);
        successLog2(messageToLog);
        successLog3(messageToLog);

        //  Error log
        errLog1(messageToLog);
        errLog2(messageToLog);
        errLog3(messageToLog);

        return;

    }, 13500);



});
