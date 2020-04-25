<template>
  <span 
    class="tile"
    :data-x="x" 
    :data-y="y"
    @click="($parent.isWin || $parent.isLost || isFlagged) ? null : revealTile(x, y)"
    @contextmenu.prevent="($parent.isWin || $parent.isLost) ? null : colourFlagged(x, y)"
    v-html="displayedContent"
  >
  </span>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    content: String,
    x: Number,
    y: Number
  },
  computed: {
    tileHeight: function () {
      const h = Math.floor(window.innerHeight / (this.$parent.boardHeight) * 0.85);
      const w = Math.floor(window.innerWidth / (this.$parent.boardWidth * 0.85));

      return  Math.min(w, h); 
    },

    isFlagged: function () {
      return this.content === '|';
    },
    isMined: function () {
      return this.content === '*';
    },
    displayedContent: function () {
      if(this.isFlagged){
        return `<img src=${require('../assets/flag.png')} style="width:50%;">`;
      }
      else if (this.isMined){
        return `<img src=${require('../assets/mine.png')} style="width:50%;">`;
      }
      else{
        return this.content;
      }
    }
  },
  methods: {
    getTileDOM: function (x, y) {
      return document.querySelector(`.tile[data-x="${x}"][data-y="${y}"]`);
    },

    getTile: function (x, y) {
      return this.$parent.gameBoard[y][x];
    },

    getSolutionTile: function (x, y) {
      return this.$parent.completedBoard[y][x];
    },

    setTile: function (x, y) {
      const value = this.getSolutionTile(x, y);

      this.$parent.gameBoard[y].splice(x, 1, value);

      if(value === '*'){

        for(let j = 1; j < this.$parent.boardHeight + 1; ++j){
          for(let i = 1; i < this.$parent.boardHeight + 1; ++i){

            const endValue = this.getSolutionTile(i, j);

            if(endValue === '*'){
              this.$parent.gameBoard[j].splice(i, 1, endValue);
            }
          }
        }

      }

      this.colourClicked(x, y);
    },

    colourClicked: function (x, y) {
      const clickedTile = this.getTileDOM(x, y);

      if(!clickedTile.classList.contains('tile--clicked')){
        clickedTile.classList.add('tile--clicked');
      }
    },
    colourFlagged: function (x, y) {
      if(this.content === '' && this.$parent.flags < this.$parent.mines){
        this.$parent.gameBoard[y].splice(x, 1, '|');
        this.$parent.flags += 1;
      }
      else if(this.content === '|'){
        this.$parent.gameBoard[y].splice(x, 1, '');
        this.$parent.flags -= 1;
      }
      else{
        return;
      }
    },

    revealTile: function (x, y) {

      if((x > 0 && x < this.$parent.boardWidth + 1) && (y > 0 && y < this.$parent.boardHeight + 1)){
        this.setTile(x, y);
        this.colourClicked(x, y);

        //revealing whole neighborhood of a '0' tile;

        if(this.getTile(x, y) === ' '){

          for(let i = -1 ; i <= 1; ++i){
            for(let j = -1; j <= 1; ++j){
              if(
                (this.getTile(x + i, y + j) === '' || this.getTile(x + i, y + j) === '|')
                && this.getSolutionTile(x + i, y + j) !== '*'
              ) {

                this.revealTile(x + i, y + j);

              }
            }
            
          }
        }
      }

    },

  },

  mounted(){
    [...document.querySelectorAll('.tile')].forEach(x => {
      x.style.height = this.tileHeight + 'px';
      x.style.width = this.tileHeight + 'px';
    });
  },

  watch: {
    content: function () {
      let colorClass = '';
      let tile = this.getTileDOM(this.x, this.y);

      switch(this.content){
        case '1':
          colorClass = 'one';
          break;
        case '2':
          colorClass = 'two';
          break;
        case '3':
          colorClass = 'three';
          break;
        case '4':
          colorClass = 'four';
          break;
        case '5':
          colorClass = 'five';
          break;
        case '6':
          colorClass = 'six';
          break;
        case '7':
          colorClass = 'seven';
          break;
        case '8':
          colorClass = 'eight';
          break;
        default:
          colorClass = '';
          break;
      }

      if(colorClass !== ''){
        tile.classList.add(colorClass);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tile{
    width: 25px;
    height: 25px;

    margin: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    background-color: rgb(196, 195, 195); 
    border-radius: 20%;

    &:hover{
      background-color: rgb(214, 213, 213); 
    }

    img{
      width: 50%;
    }
  }

  .tile--clicked{
    background-color: rgb(236, 233, 233);
    font-size: 1rem; 

    &:hover{
      background-color: rgb(236, 233, 233); 
    }
  }

  .one{
    background-color: rgb(187, 203, 255);

    &:hover{
      background-color: rgb(187, 203, 255);
    }
  }

  .two{
    background-color: rgb(150, 255, 129);

    &:hover{
      background-color: rgb(150, 255, 129);
    }
  }

  .three{
    background-color: rgb(255, 165, 153);

    &:hover{
      background-color: rgb(255, 165, 153);
    }
  }

  .four{
    background-color: rgb(221, 166, 253);

    &:hover{
       background-color: rgb(221, 166, 253);
    }
  }

  .five{
    background-color: rgb(255, 152, 93);

    &:hover{
      background-color: rgb(255, 152, 93);
    }
  }

  .six{
    background-color: rgb(194, 161, 122);

    &:hover{
      background-color: rgb(194, 161, 122);
    }
  }

  .seven{
    background-color: rgb(124, 175, 136);

    &:hover{
      background-color: rgb(124, 175, 136);
    }
  }

  .eight{
    background-color: rgb(248, 248, 105);

    &:hover{
      background-color: rgb(248, 248, 105);
    }
  }


  
</style>