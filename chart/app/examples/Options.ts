import * as frameModule from 'tns-core-modules/ui/frame';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { NavigatedData } from "tns-core-modules/ui/page";

const description = '';

export default {
  name: 'Options',
  description: description,
  template: `
  <Page @navigatingTo="onNavigatingTo" @navigatedTo="onNavigatedTo">
    <ActionBar :title="title">
        <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <ListView @loaded="onListLoaded" for="item in items" ref="listView" @itemTap="onItemTap">
        <v-template>
            <Label :text="item" class="titleLabel"></Label>
        </v-template>
    </ListView>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: undefined,
      index: undefined,
      context: undefined,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onNavigatingTo(args: NavigatedData) {
      this.context = args.context.optionsInfo;
      this.items = this.context.values;
      this.index = this.context.index;
    },
    onNavigatedTo(args: NavigatedData) {
      this.$refs.listView.nativeView.ios.selectRowAtIndexPathAnimatedScrollPosition(NSIndexPath.indexPathForItemInSection(this.index, 0), false, 0);
    },
    onItemTap(args: ItemEventData) {
      this.context.index = args.index;
      frameModule.topmost().goBack();
    }
  },
};
