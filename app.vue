<template>
    <div class="app">
        app
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            name: "lph",
            age: 18
        }
    },
    methods: {
        hello() {
            console.log("hello world");
        }
    }
}
</script>

<style lang="stylus">
@import './node_modules/nib/index'

.app
  fixed: top left right bottom
</style>