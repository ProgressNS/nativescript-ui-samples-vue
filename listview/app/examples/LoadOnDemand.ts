import { isIOS } from 'tns-core-modules/platform';
import { RadListView } from 'nativescript-ui-listview';
import { getItemList } from '../data';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

const description = 'Load On Demand';

let allItems = getItemList(2000);
const chunkSize = 20;

const nextItems = () => {
  return allItems.splice(0, chunkSize);
};

const initItems = () => {
  allItems = getItemList(2000);
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
                   loadOnDemandMode="Auto"
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
      itemList: new ObservableArray(initItems()),
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
            const items = nextItems();
            self.itemList.push(...items);
            listView.notifyAppendItemsOnDemandFinished(items.length);
          }, 0);
          args.returnValue = true;
      } else {
          args.returnValue = false;
          listView.notifyAppendItemsOnDemandFinished(0, true);
      }
    },
    onNavigationButtonTap() {
      this.$navigateBack();
    }
  }
};
