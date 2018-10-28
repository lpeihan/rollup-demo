module.exports = {
    sum(...args) {
        return args.reduce((prev, cur) => {
            return prev + cur;
        });
    },
    mul(...args) {
        return args.reduce((prev, cur) => {
            return prev * cur;
        });
    },
    min(a, b) {
        if (a <= b) {
            return a;
        } else {
            return b;
        }
    }
};