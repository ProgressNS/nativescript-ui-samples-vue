import Vue from 'nativescript-vue';

import { getExamples } from './examples';
import * as views from './views';

import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';
import { View } from 'tns-core-modules/ui/page/page';

Vue.use(RadSideDrawer);

for (let comp of getExamples()) {
  Vue.component(comp.name, comp);
}

Vue.component(views.Home.name, views.Home);

// Vue.config.silent = false;

new Vue({
  template: `
  <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent>
      <GridLayout rows="auto, *" class="root-drawer-content">
        <StackLayout row="0">
          <Label text="SideDrawerRoot" class="h1 text-center"></Label>
        </StackLayout>
        <ListView row="1" ref="listView" class="root-drawer-content"
          for="example in examples"
          @itemTap="goToExample">
          <v-template>
            <GridLayout class="sidedrawer-list-item" orientation="vertical">
              <Label :text="example.description" class="titleLabel" margin="0 0 0 10"></Label>
            </GridLayout>
          </v-template>
        </ListView>
      </GridLayout>
      </StackLayout>
      <StackLayout ~mainContent>
        <Frame>
          <Home />
        </Frame>
      </StackLayout>
    </RadSideDrawer>
  `,
  data () {
    return {
      examples: getExamples(),
    };
  },
  methods: {
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer();
    },
    goToExample (event) {
      event.object.eachChildView(childView => {
        this._toggleItemSelected(childView, false);
      });

      // select tapped item
      this._toggleItemSelected(event.view, true);

      this.onCloseDrawerTap();
      this.$navigateTo(event.item);
    },
    _toggleItemSelected(view: View, isSelected: boolean): any {
      view.className = isSelected ? "sidedrawer-list-item active" : "sidedrawer-list-item";
    },
  },
}).$start();
