import { Frame }  from "tns-core-modules/ui/frame";

const description = 'Template Group';

export default {
  name: 'TemplateGroup',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout orientation="vertical" rows="auto, *">
      <RadListView for="item in itemList" :groupingFunction="getItemGroup">
        <v-template name="group">
          <Label :text="item.category + ' items'" class="green"/>
        </v-template>
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="item.name" class="nameLabel"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </GridLayout>
  </Page>
  `,
  data() {
    return {
      title: description,
      itemList: [
        { name: 'Item 1', group: 'Ready' },
        { name: 'Item 2', group: 'Completed' },
        { name: 'Item 3', group: 'Completed' },
        { name: 'Item 4', group: 'Ready' },
        { name: 'Item 5', group: 'Completed' },
        { name: 'Item 6', group: 'Completed' },
      ],
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    getItemGroup(item) {
      return item.group;
    },
  }
};
