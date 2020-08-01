<template>
  <div class="popover" @click="onClick" ref="popover">
    <span ref="triggerWrapper" style="display:inline-block">
      <slot></slot>
    </span>
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LemonPopover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      },
    },
  },

  data() {
    return {
      visible: false,
    };
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        width,
        height,
        left,
        top,
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`;
      this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`;
    },
    onClickDocument(e) {
      if (this.$refs.popover && this.$refs.popover.contains(e.target)) {
        return;
      }
      if (
        this.$refs.contentWrapper &&
        this.$refs.contentWrapper.contains(e.target)
      ) {
        return;
      }
      this.close();
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px $border-color solid;
  /* box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5); */
  filter:drop-shadow( 0 0 1px rgba(0, 0, 0, 0.5));
  background: white;
  transform: translateY(-100%);
  border-radius: $border-radius;
  padding: 0.5em 1em;
  margin-top: -10px;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px transparent solid;
    height: 0;
    width: 0;
    position: absolute;
    left: 10px;
  }
  &::before {
    top: 100%;
    border-top-color: black;
  }
  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>