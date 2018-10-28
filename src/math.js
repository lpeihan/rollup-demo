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
    }
};