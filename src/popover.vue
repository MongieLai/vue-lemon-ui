<template>
  <div class="popover" @click="onClick" ref="popover">
    <span ref="triggerWrapper" style="display:inline-block">
      <slot></slot>
    </span>
    <div
      class="content-wrapper"
      :class="{[`position-${position}`]:true}"
      ref="contentWrapper"
      v-if="visible"
    >
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
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      },
    },
  },

  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    const { popover } = this.$refs;
    if (this.trigger === "click") {
      popover.addEventListener("click", this.onClick);
    } else {
      popover.addEventListener("mouseenter", this.open);
      popover.addEventListener("mouseleave", this.close);
    }
  },
  methods: {
    positionContent() {
      let { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let { width, height, left, top } = triggerWrapper.getBoundingClientRect();
      let { height: height2 } = contentWrapper.getBoundingClientRect();
      const options = {
        top: {
          left: `${left + window.scrollX}px`,
          top: `${top + window.scrollY}px`,
        },
        bottom: {
          left: `${left + window.scrollX}px`,
          top: `${top + height + window.scrollY}px`,
        },
        left: {
          left: `${left + window.scrollX}px`,
          top: `${top + window.scrollY + (height - height2) / 2}px`,
        },
        right: {
          left: `${left + window.scrollX + width}px`,
          top: `${top + window.scrollY + (height - height2) / 2}px`,
        },
      };
      contentWrapper.style.left = options[this.position].left;
      contentWrapper.style.top = options[this.position].top;
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
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
  background: white;
  border-radius: $border-radius;
  padding: 0.5em 1em;
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
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before,
    &::after {
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

  &.position-bottom {
    margin-top: 10px;

    &::before {
      bottom: 100%;
      border-bottom-color: black;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      left: 100%;
      border-left-color: black;
    }
    &::after {
      left: 100%;
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      right: 100%;
      border-right-color: black;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>