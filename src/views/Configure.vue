<template>
  <div id="app">
    <header>
      <Dropdown />
    </header>
  </div>  
</template>

<script>
import Dropdown from '../components/Dropdown.vue'

export default {
    name: 'App',
    components: {
      Dropdown
    }
  }
</script>

<style lang="scss" scoped>
  :root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  header  {
    width: 900px;
    background-color: #222;
    padding: 15px;
    margin-left: 35px;
    overflow: hidden;
  }
</style>
