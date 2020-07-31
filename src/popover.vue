<template>
  <div class="popover" @click.stop="xxx">
    <slot></slot>
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LemonPopover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    xxx() {
      const { log } = console;
      this.visible = !this.visible;
      log("visible切换了");
      if (this.visible === true) {
        setTimeout(() => {
          log("新增一个doucment的监听器");
          const fn = () => {
            this.visible = false;
            log("删除doucment的监听器");
            document.removeEventListener("click", fn);
          };
          document.addEventListener("click", fn);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px red solid;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  }
}
</style>