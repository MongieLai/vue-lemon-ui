<template>
  <div class="wrapper" :class="postionClass">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default"></div>
      </div>

      <div class="line" ref="line"></div>
      <span v-if="closeButton" @click="clickClose()">{{closeButton.message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: `LemonToast`,
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 1,
      validator(value){
          return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          message: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    this.execAutoClose();
    this.updateStyles();
  },
  computed: {
    postionClass() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.toastClose();
        }, this.autoClose * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    toastClose() {
      this.$el.remove();
      this.$emit("beforeClose");
      this.$destroy();
    },
    clickClose() {
      this.toastClose();
      const { closeButton } = this;
      if (closeButton && typeof closeButton.callBack === "function") {
        this.closeButton.callBack(this);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$line-color: #777;
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
$animation-delay: 500ms;

.wrapper {
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  &.position-top {
    top: 0;
    .toast {
      animation: slide-up $animation-delay;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: slide-in $animation-delay;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-down $animation-delay;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  .toast {
    font-size: $font-size;
    min-height: $toast-min-height;
    line-height: 1.8;
    display: flex;
    align-items: center;
    padding: 0 16px;
    color: white;
    background-color: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;

    > span {
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line {
      height: 100%;
      border: 1px solid $line-color;
      margin-left: 16px;
    }
    .message {
      padding: 8px 0;
    }
  }
}
</style>