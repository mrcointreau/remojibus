<template>
  <div id="app" class="full-height full-width">
    <top-bar class="full-width top-bar" style="position: fixed;"/>
    <router-view/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'app',

  components: {
    TopBar
  }
}
</script>

<style>
@font-face {
  font-family: Acme;
  font-weight: normal;
  src: url('./assets/fonts/Acme-Regular.ttf');
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

img.emoji {
  height: 1em;
  width: 1em;
  vertical-align: middle;
}

input[type='text'] {
  outline: none;
  font-family: Acme;
}

#app {
  font-family: Acme;
  height: 100%;
}

.flex {
  display: flex;
}

.flex-align-items-center {
  align-items: center;
}

.flex-column {
  flex-direction: column;
}

.flex-justify-content-center {
  justify-content: center;
}

.flex-row {
  flex-direction: row;
}

.flex-wrap {
  flex-wrap: wrap;
}

.full-height {
  height: 100%;
}

.full-width {
  width: 100%;
}

.no-list-style {
  list-style-type: none;
}

.no-margin {
  margin: 0;
}

.no-margin-bottom {
  margin-bottom: 0;
}

.no-margin-top {
  margin-top: 0;
}

.no-padding {
  padding: 0;
}

.text-centered {
  text-align: center;
}

.text-right {
  text-align: right;
}

.top-bar {
  background-color: #000;
  box-shadow: 0 0 1em 0 grey;
  color: #fff;
}

.responsive-width {
  font-size: calc(20px + (100 - 20) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
}
</style>
