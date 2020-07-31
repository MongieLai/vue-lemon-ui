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
    if (this.$children.length === 0) {
      console && console.log && console.warn("tabs没有子组件，且子组件应该为l-tabs-head和l-tabs-body");
    }
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
</style>