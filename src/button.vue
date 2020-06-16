 <template>
  <button class="l-button">按钮</button>
</template>
 
 <script>
export default {
  template: `
        
    `
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