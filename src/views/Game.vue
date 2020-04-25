<template>
  <div class="game">
    <Board 
      :boardWidth="boardWidth"
      :boardHeight="boardHeight"
      :mines="mines"
      :isPaused="isPaused"
      ref="board"

      @isWin="checkIfWin"
      @isLost="checkIfLost"
      @flags="countFlags"
    />
    <div class="game__panel">
      <div class="game__panel__flags">
        <img :src="require('../assets/flag.png')" alt="Flags" srcset="">
        <p>{{flags}}/{{mines}}</p>
      </div>
      <div class="game__panel__buttons">
        <button @click="resetGame()" :disabled="isPaused">
          Start again
        </button>
        <router-link to="/">
          <button>
            Change difficulty
          </button>
        </router-link>
        <button @click="pause()" :disabled="isLost || isWin">
          Pause
        </button>
      </div>
    </div>

    
  </div>
</template>

<script>
import Board from '../components/Board';

export default {
  name: 'Game',

  components: {
    Board
  },

  props: {
    boardWidth: Number,
    boardHeight: Number,
    mines: Number,
  },

  data () {
    return {
      isPaused: false,
      isWin: false,
      isLost: false,
      flags: 0,
    }
  },

  methods: {
    checkIfLost: function (value) {
      this.isLost = value;
    },

    checkIfWin: function (value) {
      this.isWin = value;
    },

    countFlags: function (value) {
      this.flags = value;
    },

    resetGame: function () {
      return this.$refs.board.resetGame();
    },

    pause: function () {
      this.isPaused = !this.isPaused;
    }

  },

  mounted(){
    if(this.boardWidth === undefined || this.boardHeight === undefined || this.mines === undefined ){
      this.$router.go(-1);
    }
  },

  watch: {
    isWin: function () {
      if(this.isWin){
        let winner = prompt("You have won! Write your name:");
        winner;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .game{
    display: flex;
    flex-direction: row;
    align-items: stretch;

    width: fit-content;
    
  }

  .game__panel{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    padding: 0 20px;
  }

  .game__panel__flags{
    display: flex;
    align-items: center;

    img{
      height: 35px;
    }

    p{
      margin-left: 20px;
    }
  }

  .game__panel__buttons{
    display: flex;
    flex-direction: column;

    button{
      box-shadow: 2px 2px 1px rgba(0, 0, 0, .25);
      background-color: #83df4e;
      color: #000;
      border-radius: 6px;
      padding: 4px 10px;
      margin: 5px 0;
      font-weight: bold;
      font-size: 0.8rem;
      transition-duration: .3s;

      cursor: pointer;

      &:hover{
        transform: scale(0.95);
      }

      &:disabled{
        background-color: #cccccc;
        color: rgb(68, 68, 68);
      }
    }
  }

</style>