<template>
  <div id="home">
    <nav-bar>
      <h2 slot="left">xxx</h2>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "Home",
    components: {
     NavBar
    }
  }
</script>
<style scoped>
</style>