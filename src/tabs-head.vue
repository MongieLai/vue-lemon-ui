<template>
  <div class="tabs-head" ref="header">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LemonTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      const { width, left } = vm.$el.getBoundingClientRect();
      const { left: left2 } = this.$refs.header.getBoundingClientRect();
      this.$refs.line.style.left = `${left - left2}px`;
      this.$refs.line.style.width = `${width}px`;
    });
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: rgb(217, 179, 0);
.tabs-head {
  position: relative;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  border: 1px solid #ddd;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>