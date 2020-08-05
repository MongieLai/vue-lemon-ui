<template>
  <div class="col" :style="colStyle" :class="colClasses">
    <slot></slot>
  </div>
</template>

<script>
let porpsList = ["span", "offset", "phone", "narrow-pc", "pc", "wide-pc"];
const validator = (value) => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach((key) => {
    if (!porpsList.includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name:'LemonCol',
  props: {
    span: { type: [Number, String] },
    offset: { type: [Number, String] },
    phone: { type: Object, validator },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    widePc: { type: Object, validator },
  },
  data() {
    return { gutter: 0 };
  },
  methods: {
    createClasses(obj, str = "") {
      if (!obj) {
        return [];
      }
      let tempArr = [];
      if (obj.span) {
        tempArr.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        tempArr.push(`offset-${str}${obj.offset}`);
      }
      return tempArr;
    },
  },
  computed: {
    colClasses() {
      const { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
      const { createClasses } = this;
      return [
        ...createClasses({ span, offset }),
        ...createClasses(phone, "phone-"),
        ...createClasses(ipad, "ipad-"),
        ...createClasses(narrowPc, "narrow-pc-"),
        ...createClasses(widePc, "wide-pc-"),
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  @for $i from 1 through 24 {
    &-#{$i} {
      width: ($i/24) * 100%;
    }
  }

  @media (min-width: 0px) {
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

  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i/24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }

  @media (min-width: 769px) {
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

  @media (min-width: 993px) {
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