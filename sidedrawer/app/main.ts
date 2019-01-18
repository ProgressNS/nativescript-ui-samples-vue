import Vue from 'nativescript-vue';

import { getExamples } from './examples';
import * as views from './views';

import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';

Vue.use(RadSideDrawer);

for (let comp of getExamples()) {
  Vue.component(comp.name, comp);
}

Vue.component(views.Home.name, views.Home);

// Vue.config.silent = false;

new Vue({
  template: `
    <Frame>
      <Home />
    </Frame>
  `
}).$start();
