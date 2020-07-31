<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  border: 1px red solid;
  justify-content: flex-start;
  align-items: center;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>