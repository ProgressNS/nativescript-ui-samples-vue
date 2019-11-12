import { simpleItemList } from '../data';
import { Frame }  from "tns-core-modules/ui/frame";

const description = 'Grid with item height';
// >> listvue-gridlayout-vue
export default {
  name: 'GridLayoutList',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadListView for="item in itemList"
                   layout="grid"
                   itemHeight="100"
                   @itemTap="onItemTap">
        <v-template>
          <StackLayout class="grid-item" orientation="vertical">
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
      itemList: simpleItemList,
    };
  },
  methods: {
    onItemTap ({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    }
  }
};
// << listvue-gridlayout-vue