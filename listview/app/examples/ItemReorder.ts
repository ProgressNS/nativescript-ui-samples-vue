import { simpleItemList } from '../data';
import { Frame }  from "tns-core-modules/ui/frame";

const description = 'Item Reorder';
// >> listview-itemreorder-vue
export default {
  name: 'ItemReorder',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadListView ref="listView"
                   for="item in itemList"
                   itemReorder="true"
                   @itemReordered="onItemReordered">
        <v-template>
          <StackLayout class="item m-10" orientation="vertical">
            <Label :text="item.name" class="nameLabel"></Label>
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
      selectedItems: [],
    };
  },
  methods: {
    onItemReordered({ index, data, object }) {
      console.log(`Item reordered from index ${index} to ${data.targetIndex}`);
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    }
  }
};
// << listview-itemreorder-vue