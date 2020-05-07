<template>
  <div id="app">
    <router-view />
  </div>
  
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Prompt&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: 'Prompt', sans-serif;
  }

  #app{
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;

    background: url('assets/bg.png');
  }


</style>
