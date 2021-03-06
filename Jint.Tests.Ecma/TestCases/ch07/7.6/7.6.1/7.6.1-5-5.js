/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch07/7.6/7.6.1/7.6.1-5-5.js
 * @description Allow reserved words as property names at object initialization, accessed via indexing: finally, return, void
 */


function testcase() {
        var tokenCodes  = { 
            finally: 0,
            return: 1,
            void: 2
        };
        var arr = [ 
            'finally', 
            'return', 
            'void'
        ];  
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
