(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.bundle = factory());
}(this, (function () { 'use strict';

    var math = {
        sum: function sum() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return args.reduce(function (prev, cur) {
                return prev + cur;
            });
        }
    };

    return math;

})));
