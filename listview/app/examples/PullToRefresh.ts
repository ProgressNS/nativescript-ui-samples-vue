import * as frameModule from "tns-core-modules/ui/frame";

const description = 'Pull To Refresh';

export default {
  name: 'PullToRefresh',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadListView ref="listView"
                   for="fruit in fruitList"
                   pullToRefresh="true"
                   @itemTap="onItemTap"
                   @pullToRefreshInitiated="onPullToRefreshInitiated">
        <v-template name="header">
          <StackLayout class="header">
            <Label text="Pull to refresh"></Label>
          </StackLayout>
        </v-template>

        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="fruit.name">
            </Label>
          </StackLayout>
        </v-template>

        <v-template name="footer">
          <StackLayout class="footer">
            <Label :text="footerText"></Label>
          </StackLayout>
        </v-template>

    </RadListView>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      fruitList: [
        {
          name: 'Apple',
        },
        {
          name: 'Orange',
        },
        {
          name: 'Tomato',
        }
      ],
    };
  },
  computed: {
    footerText () {
      return `List with ${this.fruitList.length} items`;
    },
  },
  methods: {
    onPullToRefreshInitiated ({ object }) {
      console.log('Pulling...');
      setTimeout(() => {
        this.fruitList.push({
          name: 'Berry',
        });
        object.notifyPullToRefreshFinished();
      });
    },
    onItemTap ({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    }
  }
};
