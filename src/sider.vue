<template>
  <transition name="fade">
    <div class="sider">
      <slot></slot>
    </div>
    <!-- <div class="sider" v-if="vsible">
      <slot></slot>
      <button @click="vsible=false">X</button>
    </div>-->
  </transition>
</template>

<script>
export default {
  name: "LemonSider",
  data() {
    return {
      // vsible: true,
    };
  },
};
</script>

<style lang="scss" scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to {
  margin-left: -200px;
} */
.sider {
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>