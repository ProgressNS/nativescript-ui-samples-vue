import { getItemList } from '../data';
import { Frame }from 'tns-core-modules/ui/frame';

const description = 'Swipe Actions';
// >> listview-swipeactions-vue
export default {
  name: 'SwipeActions',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout orientation="vertical" rows="auto, *">
      <RadListView ref="listView"
                   for="item in itemList"
                   swipeActions="true"
                   @itemSwipeProgressStarted="onSwipeStarted">
        <v-template>
          <StackLayout class="item p-t-10" orientation="vertical">
            <Label :text="item.name" class="nameLabel"></Label>
            <Label :text="item.description" class="descriptionLabel"></Label>
          </StackLayout>
        </v-template>

        <v-template name="itemswipe">
          <GridLayout columns="auto, *, auto" backgroundColor="White">
            <StackLayout id="mark-view" col="0" class="swipe-item left"
                         orientation="horizontal" @tap="onLeftSwipeClick">
              <Label text="mark" verticalAlignment="center" horizontalAlignment="center"/>
            </StackLayout>
            <StackLayout id="delete-view" col="2" class="swipe-item right"
                         orientation="horizontal" @tap="onRightSwipeClick">
              <Label text="delete" verticalAlignment="center" horizontalAlignment="center" />
            </StackLayout>
          </GridLayout>
        </v-template>
      </RadListView>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      itemList: getItemList(20),
    };
  },

  methods: {
    onSwipeStarted ({ data, object }) {
      console.log(`Swipe started`);
      const swipeLimits = data.swipeLimits;
      const swipeView = object;
      const leftItem = swipeView.getViewById('mark-view');
      const rightItem = swipeView.getViewById('delete-view');
      swipeLimits.left = leftItem.getMeasuredWidth();
      swipeLimits.right = rightItem.getMeasuredWidth();
      swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    },
    onLeftSwipeClick (event) {
      console.log('left action tapped');
      this.$refs.listView.notifySwipeToExecuteFinished();
    },
    onRightSwipeClick ({ object }) {
      console.log('right action tapped');
      // remove item
      this.itemList.splice(this.itemList.indexOf(object.bindingContext), 1);
      this.$refs.listView.notifySwipeToExecuteFinished();
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  }
};
// << listview-swipeactions-vue