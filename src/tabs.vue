<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
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
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  methods: {},
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "LemonTabsHead") {
        vm.$children.forEach(item => {
          if (
            item.$options.name === "LemoTabsItem" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>