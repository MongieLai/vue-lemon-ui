<template>
  <div class="tabs" @click="clickTab">
    <slot></slot>
    <div>wwwwwwwww</div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0 ? true : false;
      }
    }
  },
  methods: {
    clickTab() {
      this.$emit("update:selected", "heihei");
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>