export default {
    sum(...args) {
        return args.reduce((prev, cur) => {
            return prev + cur;
        });
    }
};