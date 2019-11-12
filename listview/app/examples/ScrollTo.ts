import { getItemList } from '../data';
import { Frame }  from "tns-core-modules/ui/frame";
import { ListViewItemSnapMode } from "nativescript-ui-listview";

const description = 'Scroll To Item';
// >> listview-scrolling-vue
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
            <Label :text="item.name" class="nameLabel"></Label>
            <Label :text="item.description" class="descriptionLabel"></Label>
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
      // in order to avoid race conditions (only on iOS),
      // in which the UI may not be completely updated here
      // we use this.$nextTick call
      this.$nextTick(() => {
        const indexToScroll = 49;
        console.log('Programmatic scrolling to ' + this.itemList[indexToScroll].name + '... ');
        this.$refs.listView.scrollToIndex(indexToScroll, false, ListViewItemSnapMode.Start);
      });
    },
    onScrolled ({ scrollOffset }) {
      this.scrollOffset = scrollOffset;
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    }
  }
};
// << listview-scrolling-vue