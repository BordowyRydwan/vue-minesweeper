<template>
  <div class="menu">
    <h1>MINESWEEPER</h1>

    <div class="menu__options">
      <router-link 
      :to="{name: 'Game',
            params: {boardWidth: 8, boardHeight: 8, mines: 10}}"
      >
        <div class="menu__option easy">
          <p>EASY</p>
          <p>8 x 8</p>
          <p>Mines: <b>8</b></p>
        </div>
      </router-link>
      <router-link 
        :to="{name: 'Game',
              params: {boardWidth: 20, boardHeight: 20, mines: 40}}"
      >
        <div class="menu__option medium">
          <p>MEDIUM</p>
          <p>16 x 16</p>
          <p>Mines: <b>40</b></p>
        </div>
      </router-link>
      <router-link 
        :to="{name: 'Game',
              params: {boardWidth: 30, boardHeight: 16, mines: 99}}">
        <div class="menu__option hard">
          <p>HARD</p>
          <p>30 x 16</p>
          <p>Mines: <b>99</b></p>
        </div>
      </router-link>
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
  name: 'MainMenu'
}
</script>

<style lang="scss" scoped>
  .menu{

    h1{
      text-align: center;
      margin-bottom: 10vh;

      font-size: 3.5rem;
      text-shadow: 3px 3px 5px gray;
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
  }

  .menu__option{
    height: 30vh;
    width: 30vh;
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
</style>