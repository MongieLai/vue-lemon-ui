<template>
  <div class="l-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name:'LemonButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `l-button-group的子元素应使用l-button，而你却使用了${name}`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.l-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .l-button {
    border-radius: 0;
    &:not(first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>