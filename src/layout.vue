<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  created() {},
  mounted() {
    console.log(this.$children);
    this.$children.forEach(vm => {
      if (vm.$options.name === "lemon-sider") {
        this.layoutClass.hasSider = true;
        console.log(`this.layoutClass`);
        console.log(this.layoutClass);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.layout {
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>