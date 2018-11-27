import Vue from 'nativescript-vue';

import { getExamples } from './examples';
import * as views from './views';

import RadChart from 'nativescript-ui-chart/vue';

Vue.use(RadChart);

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
