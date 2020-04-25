import Vue from 'vue';
import Router from 'vue-router';
import Game from './views/Game.vue';
import MainMenu from './views/MainMenu.vue';
import CustomSettings from './views/CustomSettings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/game',
      name: 'Game',
      component: Game,
      props: true
    },
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    },
    {
      path: '/custom',
      name: 'Custom',
      component: CustomSettings
    }
  ]
});