<template>
  <div class="tabs-item" @click="clickItem" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LemoTabsItem",
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
      // const { width, left } = vm.$el.getBoundingClientRect();
      // this.$refs.line.style.width = `${width}px`;
    });
  },
  inject: ["eventBus"],
  methods: {
    clickItem() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: blue;
.tabs-item {
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>