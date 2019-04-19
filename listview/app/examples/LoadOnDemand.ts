import { isIOS } from 'tns-core-modules/platform';
import { RadListView } from 'nativescript-ui-listview';
import { getItemList } from '../data';

const description = 'Load On Demand';

let allItems = getItemList(20);
const chunkSize = 6;

const nextItems = () => {
  return allItems.splice(0, chunkSize);
};

const initItems = () => {
  allItems = getItemList(20);
  return allItems.splice(0, chunkSize);
};

export default {
  name: 'LoadOnDemand',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadListView for="item in itemList"
                   loadOnDemandMode="Manual"
                   @loadMoreDataRequested="onLoadMoreItemsRequested">
        <v-template>
          <StackLayout class="item p-10" orientation="vertical">
            <Label id="label" :text="item.name" class="nameLabel m-t-10"></Label>
            <Label id="label" :text="item.description" class="descriptionLabel"></Label>
          </StackLayout>
        </v-template>
        <v-template v-if="isIOS" name="loadondemand">
          <GridLayout style="background-color: white">
            <Label text="Load more" horizontalAlignment="center" verticalAlignment="center"></Label>
          </GridLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      itemList: initItems(),
      isIOS: isIOS,
    };
  },
  methods: {
    onLoadMoreItemsRequested(args) {
      const listView: RadListView = args.object;
      let self = this;
      if (allItems.length > 0) {
          setTimeout(function () {
            console.log('Loading more items...');
            nextItems().forEach(item => {
              self.itemList.push(item);
            });
            listView.notifyLoadOnDemandFinished();
          }, 1500);
          args.returnValue = true;
      } else {
          args.returnValue = false;
          listView.notifyLoadOnDemandFinished(true);
      }
    },
    onNavigationButtonTap() {
      this.$navigateBack();
    }
  }
};
