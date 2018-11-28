import { getItemList } from '../data';
import * as frameModule from "tns-core-modules/ui/frame";

import { ObservableArray } from 'tns-core-modules/data/observable-array';

const description = 'Item Selection';

export default {
  name: 'ItemSelection',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadListView ref="listView"
                   for="item in itemList"
                   selectionBehavior="Press"
                   :multipleSelection="true"
                   @itemSelected="onItemSelected"
                   @itemDeselected="onItemDeselected">
        <v-template>
          <StackLayout class="item" :class="item.class" orientation="vertical">
            <Label class="big" :text="item.name"></Label>
            <Label :text="item.description"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data () {
    let items = getItemList(20);
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.class = '';
    }
    return {
      title: description,
      itemList: new ObservableArray(items),
    };
  },
  methods: {
    onItemSelected({ index, object }) {
      const itemSelected = this.itemList.getItem(index);
      console.log(`Item selected: ${itemSelected.name}`);
      itemSelected.class = 'selected';
      this.itemList.setItem(index, itemSelected);
    },
    onItemDeselected({ index, object }) {
      let itemSelected = this.itemList.getItem(index);
      console.log(`Item deselected ${itemSelected.name}`);
      itemSelected.class = '';
    },
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    }
  }
};
