<template>
  <div class="popover" @click.stop="xxx">
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LemonPopover",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    xxx() {
      const { log } = console;
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          let {
            width,
            height,
            left,
            top,
          } = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`;
          this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`;
          let eventHandler = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px red solid;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>