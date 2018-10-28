'use strict';

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

module.exports = math;
