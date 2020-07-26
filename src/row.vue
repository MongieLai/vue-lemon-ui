<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>