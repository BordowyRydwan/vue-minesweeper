<template>
  <div>
    <Tile/>
  </div>
</template>

<script>
import Tile from './Tile.vue';

export default {
  name: 'Tile',
  components: {
    Tile
  },
  data(){
    return{
      boardWidth: 20,
      boardHeight: 20,
    }
  }
}
</script>

<style>

</style>