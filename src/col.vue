<template>
  <div
    class="col"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
    :class="span && [`col-${span}`,offset && `offset-${offset}`]"
  >
    <div style="border:1px solid red;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return { gutter: 0 };
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
  $class-prefix: col-;
  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      width: ($i/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      margin-left: ($i/24) * 100%;
    }
  }
}
</style>