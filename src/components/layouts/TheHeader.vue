<template>
<div>
<h1>todo</h1>
<img :src="require('../../assets/' + imageSource)" alt="theme change icon"
 @click="setNewTheme">
<!-- :src="imageSource" -->
<!-- src="../../assets/icon-moon.svg" -->
</div>
</template>

<script>
export default {
  data() {
      return {
          imageSource: 'icon-moon.svg',
        //   theme: 'light-theme'
      }
  },
//   provide() {
//     return {
//       themeClass: this.theme
//     }
//   },
  emits: ['change-theme'],
  methods: {
      setNewTheme() {
          if (this.imageSource === 'icon-sun.svg') {
            this.imageSource = 'icon-moon.svg';
            // this.theme = 'light-theme';
          } else if (this.imageSource === 'icon-moon.svg') {
              this.imageSource = 'icon-sun.svg';
            //   this.theme = 'dark-theme';
          }
        this.$emit('change-theme');
      }
  }
}
</script>

<style scoped>
div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 2.2rem auto;
}

h1 {
    text-transform: uppercase;
    color: hsl(0, 0%, 98%);
    letter-spacing: 11px;
}

@media screen and (min-width: 769px) {
  div {
      width: 40%;
  }
}
</style>