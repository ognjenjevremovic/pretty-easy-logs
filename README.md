# **pretty-easy**

### **pretty-easy** is a pack (bundle) of NodeJS modules for common tasks, such as:
  - getting the **dates** [ [**Git repository**](https://github.com/ognjenjevremovic/pretty-easy-dates), [**npm module**](https://www.npmjs.com/package/pretty-easy-dates) ],
  - displaying **logs** to the console (*including writting them to files*) [ [**Git repository**](https://github.com/ognjenjevremovic/pretty-easy-logs), [**npm module** - *to be released!*]() ],
  - setting and reading **environment variables** [(***in development***)],
  - **CRUD operations** using MongoDB database collections [(***in development***)],
  - **Crypting and decrypting** the data [(***planned for the later date***)],
  - easily **sending the mais** [(***planned for the later date***)]

&nbsp;

### *What is pretty-easy-logs?*
***pretty-easy-logs*** *is a simple NodeJS module for printing out the messages to the console in a much nicer looking way, intended to help you debug your code and store the supsicious behavior that would otherwise result in an unhandled error*.
You are encouraged to use it in production mode aswell, as it is more than just a ***fancy*** logger; it has the ability to print the logs to the files (which is always **true** for the error logs).


### *Why use this module?*
First of, understaning the errors and successfuly debugging your NodeJS code is one of the ***must*** *have set of skills* in your toolkit. Errors that are ussualy ouput to the console, as you develop your *Node* applications are most of the time **terrifying** and confusing!
Wouldn't it be nice if you could set those on your own and log them to the console the way you wanted them to be?
And not just it, what if you could capture those nasty bugs that keep occuring and messing with your code in a production mode *(!!!)* and store them in a file with more information (*logs*) for you to debugg and fix with a latter **commit**.

*...well, guess what?*
**Now you can!**

**pretty-easy-logs** is able to log the messages out to the console in a much *fancier* and more *easier to understand* way for you to debug. It is also capable of storing those logs in a file, so you can keep track of bugs that keep messing with your code or you just want to know how many times a certain user typed an incorrect password (*maybe their account has been compromised?*).

### *How to use this module?*
In it's simple use it just logs out the message to the console in an ***info*** type mode (which is the default configuration).
You could also include more information in the message, such as ***date and time*** when the message was written to the console (which is **extremely** useful if you're writting the logs to the files) with just a single (*option*) value.
You can alter the ***color*** and the ***header*** of the output just by changing the **modes.json** file that includes those configurations.

&nbsp;

# Install
This is a [NodeJS](http://www.node.js) module available through the [npm](http://npmjs.org) registry. Installation is done using the **npm install** command:
```sh
$ npm install pretty-easy-logs
```

&nbsp;

# Usage
After installing the module (localy in your project directory), in order to use it in your file you first need to require it.
```javascript
var logs = require('pretty-easy-logs');
```

The module returns a function for you to call and supply it with a **message** (in a type of *string* || *number* || *array* || *JavaScript object notation*) and an optional **configuration** parameter (in a type of *string* || *number* || *boolean* || *JavaScript object notation*), which outputs the message to the console and optionaly write it to the * *Logs.txt* file.
Another use is to instantiate the constructor(aka ***class***) returned by the module and supply it with a **configuration** parameter (in a type of *string* || *number* || *boolean* || *JavaScript object notation*).

Let's stick to the first usage of the module, as a simple *function call*.

#### logs(message[, parameter])
**Message** you pass to the function can be one of the following:
  - ***string*** || ***number*** (that represents a simple message to log),
  - ***Array*** || ***JavaScipt Object*** (that represents a list of messages to log *[arrays could also include objects!]*)

Optional **configuration** parameter to be passed can be one of the following:
  - ***print*** *keyword* (to print the message to the corresponding '* Logs.txt' file),
  - ***number*** (which defines a mode of the output),
  - ***one of the predefined mode*** *keywords* (which defines a mode of the output),
  - ***boolean*** (to include the date and time in the message),
  - ***JavaScript object notation*** (with specific key/value pairs to *set the output mode*, *include the date and time in a message* and *print the message to a file*)

For more information about the parameters, please refer to the examples below.

&nbsp;

## Examples

### 1. Simple usage (message<string>)
The most simple use is to call the function returned by the module by only supplying the message in a *string*, *number*, *object* or *array* format, which will output the message in a console with a default *info* way.
```javascript
logs('Hello word!');
```
**Output:**
```sh
                       **********
                        * INFO *
                       **********

                       = > Hello world

                       - - - END - - -
```

### 2. Simple usage (message<object> that includes configuration)
If you'd like to get the output in another style:
   - such as **success**, **warning** or **error** - that both changes the *header* of the message aswell as the *color* of the output,
   - include *date* and *time* to the message,
   - and print the message to the file

you'll need to supply additional ***key/value*** pairs that *will NOT get output to the console nor written to the file!* (those are just meta information for a module to consume).
```javascript
var messageObject = {};
messageObject.output = "Hello world!"; // this is the message to output to the console/print to the '* Logs.txt' file
// These are the 'meta' (configurations) supplied to the object, that will not get into the output
messageObject.mode = 'scs';
messageObject.print = true;
messageObject.includeTime = true;

logs(messageObject);
```
**Output:**
```sh
                       **********
                       * SUCCESS *
                       **********

                       Date: 1.12.2016 - Time: 17:50:41

                       = > output : Hello word

                       - - - END - - -
```
*This will still only return the initial message which was 'Hello world!' to the console, but in a **success** mode with **date and time** included aswell as **print** it to the 'successLogs.txt' file! (that will get created if it does not exist already or the existing file will be updated with the latest log)*.

### 3. Two parameters supplied
If you'd like to get a simple *string* output to the console or perhaps print multiple messages provided in an **Array** or **Object** (or perhaps an ***Array of Objects***) in a different way or include them in a file, you'll need to include a second *optional* ***configuration*** parameter that can be:
  - ***print*** keyword (to print/store the message to the file)
  - ***number*** (*to define the mode - colors and header message*):
    - *1*,
    - *2*
    - *3*,
    - *0*
  - ***predefined keywords*** (*to define the mode - colors and header of the message*):
    - *'information'* || *'info'*,
    - *'success'* || *'scs'*,
    - *'warning'* || *'warn'*,
    - *'error'* || *'err'*,
  - ***JavaScript object notation*** with predefined *key/value* pairs:
    - ***mode*** propertie with *predefined keyword* or *number* value (default is ***1*** === ***info***),
    - ***print*** propertie with a boolean value (default is ***false***),
    - ***includeTime*** propertie with a boolean vlaue (default is ***false***)

```javascript
// list of messages to output to the console/print to the '* Logs.txt' file
messageArr = [
        { message :   'Hello', index   :   0 },
        { message :   'there', index   :   1 },
        { message :   'world', index   :   2 }
    ],
// Configuration options    
options =   {};
options.mode    =   'wrn';
options.print   =   true;
options.includeTime =   true;

logs(messageArr, options);
```

**Output:**
```sh
                       ***********
                       * WARNING *
                       ***********

                       Date: 1.12.2016 - Time: 18:20:13

                       = > message : Hello
                       = > index : 0

                       = > message : there
                       = > index : 1

                       = > message : world
                       = > index : 2


                       - - - END - - -
```
*This will also print the output to the 'warningLogs.txt' file! (that will get created if it does not exist already or the existing file will be updated with the latest log)*.
&nbsp;

Now let's see how can we use the module as an *instance* of the **constructor**.
If you prefix the module with a ***new*** keyword, you'll be given the new instance of the *Logs* (__*it is a convention, rather than a rule, to name the constructors/classes with pascal case [first letter being uppercased] - if you tend to follow the convention, please name your variable 'Logs' instead of 'logs' in which your require the module, as it is still the same library*__).

Note that if you don't pass the *configuration* object when instantiating the logger, the default options will be used (*INFO* mode, *NOT* priting to logs to file and *NOT* including the date and time to the message).
```javascript
var infoLog = new logs('info'),    // you could also pass the number 1, string 'information' or leave the parameter out (for defaults) for the same result
    succesLog_withTime = new logs({
        mode : 'scs',    // you could also pass the number 2 or string 'success' for the same result
        includeTime : true
    }),
    warnLogs_withTime_andPrint = new logs({
        mode : 'warning',    // you could also pass the number 3 or string 'warn' for the same result
        print : true,
        includeTime : true
    }),
    errorLog = new logs(0);    // you could also pass the string 'err' or 'error' for the same result. Note that error logs ALWAYS include date and time and will be printed to the 'errorLogs.txt' file no matter the configuration!
```
To use the previously **instantied** version of *logger*, you just supply it with a message (that again can be a simple value = *string* || *number* or list of values = *Array* || *Object* || *Array of Objects*);

```js
var errorLog    =   new logs(0),
    ////////
    message =   'No one like bugs (in the code), not even Entomologist!';

errorLog(message);
```
**Output:**
```sh
                       **********
                       * ERROR *
                       **********

                       Date: 1.12.2016 - Time: 21:12:6

                       = > No one like bugs (in the code), not even Entomologist!

                       - - - END - - -
```
*This will also print the output to the 'errorLogs.txt' file! (that will get created if it does not exist already or the existing file will be updated with the latest log)*.

&nbsp;

### Syntax
__Information mode__ (written with * *INFO* * message header and in *cyan* color):
  - null || undefined
  - 'info'<string> || 'information'<string>,
  - 3<number>,
  - {mode : 'warn'} || {mode : 'warning'} || {mdoe : 3}

__Success mode__ (written with * *SUCCESS* * message header and in *green* color):
  - 'scs'<string> || 'success'<string>,
  - 2<number>,
  - {mode : 'scs'} || {mode : 'success'} || {mode : 2}

__Warning mode__ (written with * *WARNING* * message header and in *green* color):
  - 'warn'<string> || 'warning'<string>,
  - 3<number>,
  - {mode : 'warn'} || {mode : 'warning'} || {mode : 3}

__Error mode__ (written with * *ERROR* * message header, in *red* color, including date and time and prited to the 'errorLogs.txt' file):
  - 'err'<string> || 'error'<string>,
  - 0<number>,
  - {mode : 'err'} || {mode : 'error'} || {mode : 0}

__Print the log to file__ (to print the logs to the corresponding "* Logs.txt" file):
  - 'print'<string>,
  - {print : true}

__Include date and time with the message__ (to include the date and time into output):
  - true<boolean>,
  - {includeTime : true}

__**Note that a configuration can be a single value! So if you tend to use warning mode with date and time included and written to the 'warnLogs.txt' file, you'll need to use JavaScipt Object literal syntax.
The configuration for the error outputs is to ALWAYS print date and time and write to the 'errorLogs.txt' file, not matter the configurations that you set.**__

&nbsp;

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-dates) repository!

&nbsp;

### License
Copyright (c) 2016 [Ognjen Jevremović](https://github.com/ognjenjevremovic)

Licensed under the [MIT](https://github.com/ognjenjevremovic/pretty-easy-dates/blob/master/LICENSE) License.
