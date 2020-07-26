<template>
  <div class="col" :style="colStyle" :class="colClasses">
    <slot></slot>
  </div>
</template>

<script>
let porpsList = ["span", "offset", "phone", "narrow-pc", "pc", "wide-pc"];
const validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!porpsList.includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  props: {
    span: { type: [Number, String] },
    offset: { type: [Number, String] },
    phone: { type: Object, validator },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    widePc: { type: Object, validator }
  },
  data() {
    return { gutter: 0 };
  },
  computed: {
    colClasses() {
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone ? [`col-phone-${phone.span}`]:[]),
        ...(ipad? [`col-ipad-${ipad.span}`]:[]),
        ...(narrowPc  ?[`col-narrow-pc-${narrowPc.span}`]:[]),
        ...(widePc ? [`col-wide-pc-${widePc.span}`]:[])
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
    border:1px solid red;
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
  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i/24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: col-ipad-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i/24) * 100%;
      }
    }
    $class-prefix: offset-pad-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: col-narrow-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i/24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }

  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i/24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }
}
</style>