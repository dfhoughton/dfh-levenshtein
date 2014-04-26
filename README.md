dfh-levenshtein
===============

javascript implementation of the Levenshtein distance algorithm

There are probably many implementations of this algorithm in Javascript. Here's
another. It puts two functions in the dfh namespace: levenshtein and lev. These
are just different names for the same function, which expects two defined 
arguments. It will stringify these and return the Levenshtein distance between
them.

Example using node.js:

    $ node
    > var vm = require('vm');
    undefined
    > var fs = require('fs');
    undefined
    > var data = fs.readFileSync('./dfh-levenshtein.js');
    undefined
    > vm.runInThisContext(data);
    [Function: lev]
    > dfh.levenshtein('cat','dog');
    3
    > dfh.lev('cat','dog');
    3
    > dfh.lev('cat','cat');
    0
    > dfh.lev('cat','at');
    1
    > dfh.lev('at','cat');
    1
    > dfh.lev(12,1);
    1
    > dfh.lev('cat');
    Error: Levenshtein distance algorithm expects two arguments
        at Object.lev (evalmachine.<anonymous>:6:13)
        at repl:1:5
        at REPLServer.self.eval (repl.js:110:21)
        at repl.js:249:20
        at REPLServer.self.eval (repl.js:122:7)
        at Interface.<anonymous> (repl.js:239:12)
        at Interface.EventEmitter.emit (events.js:95:17)
        at Interface._onLine (readline.js:202:10)
        at Interface._line (readline.js:531:8)
        at Interface._ttyWrite (readline.js:760:14)
    > 
