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
.tour
  $arrowWidth = (200px / 4)
  $arrowHeight = (260px / 4)
  & &-overlay
    fixed: top 0 bottom 0 left 0 right 0
    z-index: 999
  & &-overlap
    position: fixed
    transition: all .3s
    box-shadow: 0 0 0 9999px rgba(#000, .8)
  & &-arrow
    absolute: left 50%
    size: $arrowWidth $arrowHeight
    margin-left: ($arrowWidth / -2)
  & &-text
    position: absolute
    margin: ($arrowHeight - 8px) 5px
    padding: .5em
    border: 1px solid #fff
    border-radius: 1.5em
    color: #fff
    font-size: 18px
    white-space: nowrap
    &.top
      bottom: 100%
      .tour-arrow
        bottom: (0 - $arrowHeight + 8px)
        transform: rotate(180deg)
    &.bottom
      top: 100%
      .tour-arrow
        top: (0 - $arrowHeight + 8px)
    &.left
      left: 0
      .tour-arrow
        left: 0
        margin: 0
    &.right
      right: 0
      .tour-arrow
        left: auto
        margin: 0
        right: 0
  & &-cancel
    absolute: bottom 1em left 50%
    width: 30%
    margin-left: -15%
    &.top
      top: 1em
      bottom: auto
    &-btn
      display: block
      width: 100%
</style>