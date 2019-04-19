import * as frameModule from "tns-core-modules/ui/frame";

const description = 'Group with header/footer';

export default {
  name: 'Group with header/footer',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout orientation="vertical" rows="auto, *">
      <StackLayout orientation="horizontal">
        <Button :text="isEnabled ? 'Disable grouping' : 'Enable grouping'" @tap="toggleGrouping"></Button>
      </StackLayout>
      <RadListView row="1" ref="myListView" for="item in itemList" :groupingFunction="getItemGroup">
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="item.name" class="nameLabel"></Label>
          </StackLayout>
        </v-template>
        <v-template name="header">
          <Label text="Header with height auto" backgroundColor="#65a565" fontSize="45"></Label>
        </v-template>
        <v-template name="footer">
          <Label text="Footer with height auto" backgroundColor="#7fff7f"></Label>
        </v-template>
      </RadListView>
    </GridLayout>
  </Page>
  `,
  data() {
    return {
      title: description,
      isEnabled: true,
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
      frameModule.topmost().goBack();
    },
    getItemGroup(item) {
      return item.group;
    },
    toggleGrouping() {
      let listView = this.$refs.myListView.nativeView;
      if (!listView.groupingFunction) {
        listView.groupingFunction = this.getItemGroup;
        this.isEnabled = true;
      } else {
        listView.groupingFunction = undefined;
        this.isEnabled = false;
      }
    }
  }
};
