<template>
  <div class="menu">
    <h1>MINESWEEPER</h1>
    <h2>LEFT CLICK (tap) - reveal tile, <br/> RIGHT CLICK (long tap) - flag</h2>
    <div class="menu__options">
      <router-link 
      :to="{name: 'Game',
            params: {boardWidth: 8, boardHeight: 8, mines: 10}}"
      >
        <div class="menu__option easy">
          <p>EASY</p>
          <p>8 x 8</p>
          <p>Mines: <b>10</b></p>
        </div>
      </router-link>
      <router-link 
        :to="{name: 'Game',
              params: {boardWidth: 16, boardHeight: 16, mines: 40}}"
      >
        <div class="menu__option medium">
          <p>MEDIUM</p>
          <p>16 x 16</p>
          <p>Mines: <b>40</b></p>
        </div>
      </router-link>
      <router-link
        v-if="maxWidth > 30 && maxHeight > 16"
        :to="{name: 'Game',
              params: {boardWidth: 30, boardHeight: 16, mines: 99}}">
        <div class="menu__option hard" >
          <p>HARD</p>
          <p>30 x 16</p>
          <p>Mines: <b>99</b></p>
        </div>
      </router-link>
      <div class="menu__option hard" v-else>
        <p>HARD</p>
        <p>disabled <br /> on mobiles</p>
      </div>
      <router-link to="/custom">
        <div class="menu__option custom">
          <p>CUSTOM <br/> MODE</p>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data(){
    return{
      maxWidth: Math.floor(((window.innerWidth - 100) / 20) * 0.8) - 1,
      maxHeight: Math.floor(((window.innerHeight - 100) / 20) * 0.8) - 1,
    }
  },
  mounted(){
    window.addEventListener('resize', () => {
      this.maxWidth = Math.floor(((window.innerWidth - 100) / 20) * 0.8) - 1;
      this.maxHeight = Math.floor(((window.innerHeight - 100) / 20) * 0.8) - 1;
    });
  }
}
</script>

<style lang="scss" scoped>
  .menu{
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
      text-align: center;
      font-size: 3.5rem;
      margin-bottom: 1vh;
      text-shadow: 3px 3px 5px gray;
    }

    h2{
      text-align: center;
      font-size: 0.9rem;
      margin-top: -15px;
      margin-bottom: 6vh;
      color: rgb(51, 51, 51);
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

  .menu__options{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:  wrap;
    max-width: 90vw;
    height: 65vh;
  }

  .menu__option{
    height: 28vh;
    width: 28vh;
    border-radius: 10px;
    overflow-wrap: break-word;

    margin: 0 4vh 5vh 4vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgb(219, 219, 219);

    border: 1px rgb(218, 218, 218) solid;
    box-shadow: 4px 5px 2px gray;

    transition-duration: 0.3s; 
    cursor: pointer;

    &:hover{
      transform: scale(0.95);
    }

    p{
      text-align: center;
    }

    p:not(:last-child){
      font-weight: bold;
    }

    p:first-child{
      margin-bottom: 25%;
      font-size: 1.6rem;
      text-shadow: 0px 1px 1px rgb(49, 49, 49);
      text-align: center;
    }
  }

  .easy{
    background-color: rgb(107, 255, 88);
  }

  .medium{
    background-color: rgb(255, 255, 80);
  }

  .hard{
    background-color: rgb(255, 85, 85);
  }

  .custom{
    font-weight: bold;
    background-color: rgb(153, 237, 248);
  }

  @media (max-width: 600px){
    .menu{
      h1{
        text-align: center;
        margin-bottom: 15px;

        font-size: 2.5rem;
        text-shadow: 3px 3px 5px gray;
      }

      h2{
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 400px){
    .menu__option{
      height: 35vw;
      width: 35vw;

      margin: 0 5vw;


      p:first-child{
        margin-bottom: 25%;
        font-size: 1.3rem;
        text-shadow: 0px 1px 1px rgb(49, 49, 49);
        text-align: center;
      }
    }

    
  }

  @media (max-height: 500px){
    .menu__option{
      p:first-child{
        margin-bottom: 25%;
        font-size: 1.3rem;
        text-shadow: 0px 1px 1px rgb(49, 49, 49);
        text-align: center;
      }
    }
  }
</style>