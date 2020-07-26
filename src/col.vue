<template>
  <div class="col" :style="colStyle" :class="colClasses">
    <slot></slot>
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
  },
  computed: {
    colClasses() {
      return [
        this.span && `col-${this.span}`,
        this.offset && `offset-${this.offset}`
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
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