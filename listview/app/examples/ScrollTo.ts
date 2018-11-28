import { getItemList } from '../data';
import * as frameModule from "tns-core-modules/ui/frame";

const description = 'Scroll To Item';

export default {
  name: 'ScrollTo',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <Label class="big header" :text="scrollText"></Label>
      <RadListView ref="listView"
                   for="item in itemList"
                   @itemTap="onItemTap"
                   @loaded="onLoaded"
                   @scrolled="onScrolled">
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label class="big" :text="item.name"></Label>
            <Label :text="item.description"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      scrollOffset: 0,
      itemList: getItemList(100),
    };
  },
  computed: {
    scrollText () {
      return `Scrolled to ${this.scrollOffset} offset`;
    },
  },
  methods: {
    onItemTap ({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
    onLoaded () {
      setTimeout(() => {
        console.log('Programatic scrolling...');
        this.$refs.listView.scrollToIndex(50);
      }, 500);
    },
    onScrolled ({ scrollOffset }) {
      this.scrollOffset = scrollOffset;
    },
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    }
  }
};
