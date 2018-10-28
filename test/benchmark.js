const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;


suite
    .add('Reg#test', () => {
        /o/.test('hello world');
    })
    .add('String#indexOf', () => {
        'hello world'.indexOf('o') > -1;
    })
    .add('String#match', () => {
        !!'hello world'.match(/o/);
    })
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ async: true });