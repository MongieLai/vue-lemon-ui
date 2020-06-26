 <template>
  <button class="l-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="iconName" />
    </svg>
    <div class="content">
      <slot />
    </div>
  </button>
</template>
 
 <script>
export default {
  props: ["icon", "iconPosition"],
  computed: {
    iconName() {
      return `#l-${this.icon}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.l-button {
  font-size: var(--font-sizeƒ);
  height: var(--button--height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align:middle;
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}
</style>