<template>
  <div class='l-button-group'>
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.l-button-group{
    display: inline-flex;
    vertical-align:middle;
    > .l-button{
        border-radius:0;
        margin-left: -1px;
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
    }
}
</style>