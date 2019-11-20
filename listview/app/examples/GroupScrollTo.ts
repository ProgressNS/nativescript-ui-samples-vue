import { Frame }  from "tns-core-modules/ui/frame";
import { ObservableArray } from "tns-core-modules/data/observable-array";


export class DataItem {
  public id: number;
  public name: string;
  public description: string;
  public category: string;

  constructor(id: number, name: string, description: string, category: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
  }
}

const description = 'Grouping with Scroll to Index';
let items = [];
for (let i = 0; i < 50; i++) {
  items.push(new DataItem(i, "item " + i, "description " + i, i % 2 === 0 ? "Group 1" : "Group 2"));
}
let dataItems = new ObservableArray<DataItem>(items);

export default {
  name: 'GroupScrollTo',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="auto, *" rows="auto, *">
      <Button text="Scroll to 1 index" @tap="onScrollTo"></Button>
      <RadListView row="1" ref="myListView" for="item in itemList" :groupingFunction="getItemGroup">
        <v-template>
          <StackLayout>
            <Label fontSize="20" :text="item.name"/>
            <Label fontSize="14" :text="item.description"/>
          </StackLayout>
        </v-template>
        <v-template name="group">
          <GridLayout ios:height="50">
              <Label :text="item.category" backgroundColor="lightblue" padding="15"/>
          </GridLayout>
        </v-template>
      </RadListView>
    </GridLayout>
  </Page>
  `,
  data() {
    return {
      title: description,
      itemList: dataItems,
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    getItemGroup(item) {
      return item.category;
    },
    onScrollTo() {
      this.$refs.myListView.nativeView.scrollToIndex(1);
    }
  }
};