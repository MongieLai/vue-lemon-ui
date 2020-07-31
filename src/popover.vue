<template>
  <div class="popover" @click="xxx">
    <slot></slot>
    <div class="content-wrapper" v-if="visible">
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
      this.visible = !this.visible;
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