/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-9-b-26.js
 * @description Array.prototype.reduceRight - deleting own property with prototype property causes prototype index property to be visited on an Array
 */


function testcase() {

        var testResult = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1 && curVal === 1) {
                testResult = true;
            }
        }
        var arr = [0, 111];

        Object.defineProperty(arr, "2", {
            get: function () {
                delete arr[1];
                return 0;
            },
            configurable: true
        });

        try {
            Array.prototype[1] = 1;
            arr.reduceRight(callbackfn, "initialValue");
            return testResult;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
