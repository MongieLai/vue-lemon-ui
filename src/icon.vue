<template>
  <svg class="l-icon">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  props: ["name"],
  computed: {
    iconName() {
      return `#l-${this.name}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.l-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>