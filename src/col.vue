<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String]
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: #333;
  width: 50%;
  border: 1px solid red;
  $class: col-;
  @for $i from 1 through 24 {
    &.#{$class}#{$i} {
      width: ($i/24) * 100%;
    }
  }
}
</style>