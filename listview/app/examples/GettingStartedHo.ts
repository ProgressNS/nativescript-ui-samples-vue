import { simpleItemList } from '../data';
import * as frameModule from "tns-core-modules/ui/frame";

const description = 'Getting Started Horizontal';

export default {
  name: 'GettingStartedHo',
  description: description,
  template: `
    <Page>
      <ActionBar :title="title">
        <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
      </ActionBar>
    <StackLayout>
      <RadListView for="item in itemList"
                   orientation="horizontal"
                   @itemTap="onItemTap">
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
  data() {
    return {
      title: description,
      itemList: simpleItemList,
    };
  },
  methods: {
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    }
  }
};
