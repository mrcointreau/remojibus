<template>
  <div id="app" class="full-height">
    <home class="centered full-height"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
}

.centered {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.full-height {
  height: 100%;
}
</style>
