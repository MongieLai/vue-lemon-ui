<template>
  <div class="wrapper" :class="{error}">
    <input
      @input="$emit('input',$event.target.value)"
      @change="$emit('change',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
      spellcheck="false"
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
    />
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  components: { Icon },
  data() {
    return {};
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgb(0, 0, 0, 0.5);
$error-color: #f1453d;
.wrapper {
  :not(:last-child) {
    margin-right: 0.5em;
  }
  &.error {
    > input {
      border-color: $error-color;
      &:focus {
        box-shadow: inset 0 1px 3px $error-color;
      }
      &:hover {
        border: 1px solid $error-color;
      }
    }
  }
  display: inline-flex;
  align-items: center;
  font-size: $font-size;
  > input {
    font-size: inherit;
    border-radius: $border-radius;
    height: $height;
    padding: 0 8px;
    border: 1px solid $border-color;
    &:hover {
      border: 1px solid $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      color: #bbb;
      border-color: #bbb;
      cursor: not-allowed;
    }
  }
  .icon-error {
    fill: $error-color;
  }
  .error-message {
    color: #f1453d;
  }
}
</style>
