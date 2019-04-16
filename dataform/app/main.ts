// >> dataform-imports-vue
import Vue from 'nativescript-vue';
// >> (hide)
import { getExamples } from './examples';
import * as views from './views';
// << (hide)
import RadDataForm from 'nativescript-ui-dataform/vue';

Vue.use(RadDataForm);
// << dataform-imports-vue
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
