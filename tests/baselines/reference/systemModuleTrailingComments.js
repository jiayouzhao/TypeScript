//// [systemModuleTrailingComments.ts]
export const test = "TEST";

//some comment

//// [systemModuleTrailingComments.js]
System.register([], function (exports_1, context_1) {
    var test;
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("test", test = "TEST");
            //some comment
        }
    };
});
