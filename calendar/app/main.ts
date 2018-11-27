import Vue from 'nativescript-vue';

import { getExamples } from './examples';
import * as views from './views';

import RadListView from 'nativescript-ui-listview/vue';
import CalendarView from 'nativescript-ui-calendar/vue';

Vue.use(RadListView);
Vue.use(CalendarView);

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
