// >> listview-vue-import
import Vue from 'nativescript-vue';
// >> (hide)
import { getExamples } from './examples';
import * as views from './views';
// << (hide)
import RadListView from 'nativescript-ui-listview/vue';

Vue.use(RadListView);
// << listview-vue-import
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
