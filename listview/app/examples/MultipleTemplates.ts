import { Frame }  from "tns-core-modules/ui/frame";

const description = 'Multiple Templates';
// >> listview-multipletemplates-itemselector-vue
export default {
  name: 'MultipleTemplates',
  description: 'Multiple Templates',
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <TabView>
      <TabViewItem title="template selector">
        <GridLayout orientation="vertical" rows="auto, *">
          <RadListView for="item in itemList"
                       :itemTemplateSelector="templateSelector">
            <v-template name="red">
              <StackLayout class="item red" orientation="vertical">
                <Label :text="item.name + ' selector'" class="nameLabel"></Label>
                <Label :text="item.type" class="nameLabel"></Label>
              </StackLayout>
            </v-template>
            <v-template name="green">
              <StackLayout class="item green" orientation="vertical">
                <Label :text="item.name + ' selector'" class="nameLabel"></Label>
                <Label :text="item.type" class="nameLabel"></Label>
              </StackLayout>
            </v-template>
            <v-template name="blue">
              <StackLayout class="item blue" orientation="vertical">
                <Label :text="item.name + ' selector'" class="nameLabel"></Label>
                <Label :text="item.type" class="nameLabel"></Label>
              </StackLayout>
            </v-template>
          </RadListView>
        </GridLayout>
      </TabViewItem>
      <TabViewItem title="v-template if">
        <GridLayout orientation="vertical" rows="auto, *">
          <RadListView for="item in itemList">
            <v-template name="red" if="item.type === 'red'">
              <StackLayout class="item red" orientation="vertical">
                <Label :text="item.name + ' if template'" class="nameLabel"></Label>
                <Label :text="item.type" class="nameLabel"></Label>
              </StackLayout>
            </v-template>
            <v-template name="green" if="item.type === 'green'">
              <StackLayout class="item green" orientation="vertical">
                <Label :text="item.name + ' if template'" class="nameLabel"></Label>
                <Label :text="item.type" class="nameLabel"></Label>
              </StackLayout>
            </v-template>
            <v-template name="blue" if="item.type === 'blue'">
              <StackLayout class="item blue" orientation="vertical">
                <Label :text="item.name + ' if template'" class="nameLabel"></Label>
                <Label :text="item.type" class="nameLabel"></Label>
              </StackLayout>
            </v-template>
          </RadListView>
        </GridLayout>
      </TabViewItem>
    </TabView>
  </Page>
  `,
  data() {
    return {
      title: description,
      itemList: [
        { name: 'Item 1', type: 'red' },
        { name: 'Item 2', type: 'green' },
        { name: 'Item 3', type: 'blue' },
        { name: 'Item 4', type: 'red' },
        { name: 'Item 5', type: 'green' },
        { name: 'Item 6', type: 'blue' },
      ],
    };
  },

  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    templateSelector(item, index, items) {
      return {
        red: 'red',
        green: 'green',
        blue: 'blue',
      }[item.type];
    },
  }
};
// << listview-multipletemplates-itemselector-vue