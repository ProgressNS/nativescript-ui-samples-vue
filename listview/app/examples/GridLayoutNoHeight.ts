import { simpleItemList100 } from '../data';
import { Frame }  from "tns-core-modules/ui/frame";

const description = 'Grid without item height';
export default {
  name: 'GridLayoutWithFixedHeight',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout>
      <RadListView for="item in itemList"
                   layout="grid"
                   @itemTap="onItemTap">
        <v-template>
          <GridLayout rows="auto, auto" :backgroundColor="item.id % 2 != 0 ? 'lightgreen' : 'lightblue'">
            <Label row="0" :text="item.name"></Label>
            <Label row="1" :text="item.description"></Label>
          <GridLayout>
        </v-template>
      </RadListView>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      itemList: simpleItemList100,
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