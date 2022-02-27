<template>
  <todo-page></todo-page>
  <!-- <test-app></test-app> -->
</template>

<script>
import TodoPage from './components/list-resources/TodoPage.vue'
// import TestApp from './components/TestApp.vue'

export default {
  components: {
    TodoPage,
    // TestApp
  },

}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,300;0,400;1,200&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Josefin Sans', sans-serif;
}

body {
  font-size: 14px;
  font-weight: 200;
  /* margin: 0;
  padding: 0;
  height: 100vh; */
}
</style>