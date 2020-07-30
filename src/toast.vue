<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span v-if="closeButton" @click="clickClose()">{{closeButton.message}}</span>
  </div>
</template>

<script>
export default {
  name: `LemonToast`,
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default() {
        return {
          message: "关闭",
          callBack: undefined
        };
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.toastClose();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    toastClose() {
      this.$el.remove();
      this.$destroy();
    },
    clickClose() {
      this.toastClose();
      const { closeButton } = this;
      console.log(typeof closeButton.callBack);
      if (closeButton && typeof closeButton.callBack === "function") {
        this.closeButton.callBack(this);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  height: 40px;
  line-height: 1.8;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  > span {
    padding-left: 16px;
  }
  .line {
    height: 100%;
    border: 1px solid #666;
    margin-left: 16px;
  }
}
</style>