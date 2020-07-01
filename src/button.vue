 <template>
  <button class="l-button" @click="$emit('click')" :class="{[`icon-${iconPosition}`]:true}">
    <l-icon class="loading icon" v-if="loading" name="loading"></l-icon>
    <l-icon class="icon" v-if="icon&&!loading" :name="icon"></l-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>
 
 <script>
import Vue from "vue";
import Icon from './icon'
Vue.component('l-icon',Icon)
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconName() {
      return `#l-${this.icon}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes fuck {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading {
  animation: fuck 1s infinite linear;
}
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
  vertical-align: middle;
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
    z-index: 1;
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