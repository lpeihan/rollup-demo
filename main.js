import { foo } from './foo';
import Vue from 'vue';

export default () => {
    console.log(foo);
    new Vue();
}