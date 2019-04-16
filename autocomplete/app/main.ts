// >> autocomplete-import-vue
import Vue from 'nativescript-vue';
// >> (hide)
import { getExamples } from './examples';
import * as views from './views';
// << (hide)
import RadAutoComplete from 'nativescript-ui-autocomplete/vue';
// >> (hide)
import { setCssFileName } from "tns-core-modules/application";
setCssFileName("app.css");
// << (hide)
Vue.use(RadAutoComplete);
// << autocomplete-import-vue
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
