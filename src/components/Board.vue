<template>
  <div class="board">
    <div v-if="isPaused" class="board__pause">
      Game paused
    </div>
    <div v-for="(row, y) in gameBoard.slice(1, boardHeight + 1)" :key="y" class="board__row">
      <tile v-for="(tile, x) in row.slice(1, boardWidth + 1)" :key="x"
        :content="tile.toString()"
        :x="x + 1"
        :y="y + 1"
      />
    </div>
  </div>
</template>

<script>
import Tile from './Tile.vue';

export default {
  name: 'Board',
  components: {
    Tile
  },
  props: {
    boardWidth: Number,
    boardHeight: Number,
    mines: Number,
    isPaused: Boolean,
    isMobile: Boolean,
  },
  data(){
    return{
      gameBoard: [],
      completedBoard: [],
      isLost: false,
      isWin: false,
      flags: 0,
    }
  },

  methods: {

    initializeBoard: function () {
      return [...Array(this.boardHeight + 2)].map(() => Array(this.boardWidth + 2).fill(''));
    },

    initializeCompletedBoard: function () {
      let mines = [];
      let board = [...Array(this.boardHeight + 2)].map(() => Array(this.boardWidth + 2).fill(' '));
      
      const tilesAmount = this.boardWidth * this.boardHeight;

      for(let i = 0; mines.length < this.mines; ++i){
        let position = Math.floor(Math.random() * tilesAmount);

        if(!mines.includes(position)){
          mines.push(position);
        }
      }

      //filling board with mines

      mines.forEach(n => {
        const x = n % this.boardWidth + 1;
        const y = Math.floor(n / this.boardWidth) + 1;

        board[y][x] = '*';
      });

      //checking the neighbourhood of mines for every tile
      for(let y = 1 ; y < this.boardHeight + 1 ; y += 1){
        for(let x = 1 ; x < this.boardWidth + 1 ; x += 1){
          if(board[y][x] !== '*'){
            const conditions = [
              board[y - 1][x - 1] === '*',
              board[y - 1][x] === '*',
              board[y - 1][x + 1] === '*',
              board[y][x - 1] === '*',
              board[y][x + 1] === '*',
              board[y + 1][x - 1] === '*',
              board[y + 1][x] === '*',
              board[y + 1][x + 1] === '*'
            ];

            const counter = conditions
                              .map(x => +x)
                              .reduce((x, y) => x + y, 0);

            board[y][x] = counter === 0 ? ' ' : counter;
          }
        }
      }

      return board;
    },

    colorReset: function () {
      const colourClasses = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight'
      ];

      [...document.querySelectorAll('.tile')].forEach(x => x.classList.remove('tile--clicked', ...colourClasses));
    },

    resetGame: function () {
      this.gameBoard = this.initializeBoard();
      this.completedBoard = this.initializeCompletedBoard();
      this.flags = 0;
      this.$parent.time = 0;
      this.colorReset();

      this.isLost = false;
      this.isWin = false;
    },
  },

  mounted(){
    this.resetGame();
  },

  watch: {
    gameBoard: function () {
      let flagMatches = 0;
      let empties = 0;

      for(let y = 1; y < this.boardHeight + 1; ++y){

        if(this.gameBoard[y].includes('*')){
          this.isLost = true;
        }

        for(let x = 1; x < this.boardWidth + 1; ++x){
          if(this.gameBoard[y][x] === '|' && this.completedBoard[y][x] === '*'){
            flagMatches += 1;
          }

          if(this.gameBoard[y][x] === ''){
            empties += 1;
          }
        }
      }

      if(flagMatches === this.mines && empties === 0){
        this.isWin = true;
      }

      this.$emit("isLost", this.isLost);
      this.$emit("isWin", this.isWin);
      this.$emit('flags', this.flags);
    },

  }
}
</script>

<style lang="scss" scoped>

  .board{
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    position: relative;
    background-color: white;
  }

  .board__row{
    display: flex;
  }

  .board__pause{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    height: 100%;
    width: 100%;

    font-size: 2rem;
    font-weight: bold;

    position: absolute;
    background-color: rgb(179, 179, 179);
  }

</style>