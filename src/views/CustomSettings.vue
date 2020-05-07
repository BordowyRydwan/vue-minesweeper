<template>
  <div class="custom">
    <h2>CUSTOM SETTINGS</h2>
    <div class="custom__option">
      <label for="width">Width: </label>
      <input type="number" name="width" id="width" min="5" :max="maxWidth" v-model.number="width">
    </div>

    <div class="custom__option">
      <label for="height">Height: </label>
      <input type="number" name="heigth" id="height" min="5" :max="maxHeight" v-model.number="height">
    </div>

    <div class="custom__option">
      <label for="mines">Mines: </label>
      <input type="number" name="mines" id="mines" min="5" :max="width * height - 1" v-model.number="mines">
    </div>
  
    <div class="custom__buttons">
      <router-link 
        :to="{name: 'Game',
              params: {boardWidth: parseInt(width), boardHeight: parseInt(height), mines: parseInt(mines)}}"
      >
        <button>
          Start a game
        </button>
      </router-link>
      <router-link to="/">
        <button>
          Cancel
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSettings',
  data(){
    return{
      width: 5,
      height: 5,
      mines: 5,

      maxWidth: Math.floor(((window.innerWidth - 100) / 20) * 0.8) - 1,
      maxHeight: Math.floor(((window.innerHeight - 100) / 20) * 0.8) - 1,
    }
  }
}
</script>

<style lang="scss" scoped>
  .custom{
    display: flex;
    flex-direction: column;

    h2{
      margin-bottom: 5vh;
      font-size: 2rem;
      text-shadow: 2px 2px 1px gray;
    }

    a{
      &:hover,
      &:link,
      &:active,
      &:visited{
        text-decoration: none;
        color: black;
      }
    }
  }

  .custom__option{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;

    input{
      width: 60px;
      height: 30px;
    }

    label{
      font-weight: bold;
    }
  }

  .custom__buttons{
    button{
      display: block;
      width: 100%;
      margin-top: 10px;

      box-shadow: 2px 2px 1px rgba(0, 0, 0, .25);
      background-color: #f7e543;
      color: #000;
      border-radius: 10%;
      padding: 6px 0;
      margin: 10px 0;
      font-weight: bolder;
      font-size: 1.1rem;
      transition-duration: .3s;

      &:hover{
        transform: scale(.95)
      }
    }

    a:first-child button {
      background-color: #31ff31;
    }

    a:nth-child(2) button{
      background-color: #f1f1f1;
      font-weight: normal;
    }
  }

</style>