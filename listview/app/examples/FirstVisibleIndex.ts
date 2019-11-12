import { getItemList } from '../data';
import { Frame }  from "tns-core-modules/ui/frame";
import { RadListView } from 'nativescript-ui-listview';

const description = 'Get first visible index';
export default {
  name: 'FirstVisibleIndex',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="auto, auto, *">
      <Label margin="10" :text="'First visible item: ' + firstVisibleIndex"></Label>
      <Button margin="10" row="1" text="Get first visible" @tap="getFirstVisiblePosition"></Button>
      <RadListView ref="listView"
                    row="2"
                    for="item in itemList">
        <v-template>
          <StackLayout class="item" orientation="vertical" :backgroundColor="item.id % 2 != 0 ? 'lightgreen' : 'lightblue'">
            <Label :text="item.name" class="nameLabel"></Label>
            <Label :text="item.description" class="descriptionLabel"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </GridLayout>
  </Page>
  `,
  data() {
    return {
      title: description,
      itemList: getItemList(100),
      firstVisibleIndex: 0
    };
  },
  methods: {
    getFirstVisiblePosition() {
      let listView = this.$refs.listView.nativeView as RadListView;
      this.firstVisibleIndex = listView.getFirstVisiblePosition();
      console.log("First visible index:", this.firstVisibleIndex);
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    }
  }
};