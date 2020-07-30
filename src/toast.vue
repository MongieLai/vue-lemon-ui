<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: `LemonToast`
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
  background-color: rgba(0, 0, 0, .75);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
}
</style>