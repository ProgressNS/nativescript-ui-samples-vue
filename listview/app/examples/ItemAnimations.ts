import { getItemList } from "../data";
import { Frame }  from "tns-core-modules/ui/frame";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { ListViewEventData, ListViewItemAnimation } from "nativescript-ui-listview";
import * as dialogs from "tns-core-modules/ui/dialogs";

const description = "Item Animations";

let _itemsCount = 0;
const dataItems = new ObservableArray(getItemList(_itemsCount));

export default {
  name: "Item Animations",
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>

      <ActionItem text="Options" ios.position="right" @tap="onOptionsTapped"></ActionItem>
    </ActionBar>
    <GridLayout orientation="vertical" rows="50, *">
      <StackLayout class="buttonStackLayout">
          <StackLayout row="0" orientation="horizontal" horizontalAlignment="center">
              <Button text="ADD" @tap="onAddItemClick" ios:class="iosButton"></Button>
              <Button text="DEL" @tap="onRemoveItemClick" ios:class="iosButton"></Button>
              <Button text="UPDATE" @tap="onUpdateItemClick" ios:class="iosButton"></Button>
              <Button text="RESET" @tap="onResetClick" ios:class="iosButton"></Button>
          </StackLayout>
      </StackLayout>
      <RadListView  ref="listView" for="item in itemList" :itemInsertAnimation="itemInsertAnimation" :itemDeleteAnimation="itemDeleteAnimation" row="1">
      <v-template>
        <StackLayout class="item" orientation="vertical" @longPress="onItemLongPress({index,item})" @tap="onItemTap({index,item})">
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
      itemList: dataItems,
      itemInsertAnimation: undefined,
      itemDeleteAnimation: undefined,
    };
  },
  methods: {
    onAddItemClick() {
      this.itemList.push(this.createItem());
    },
    createItem() {
      const result = {
        id: _itemsCount,
        name: "This is a new item: " + _itemsCount,
        description: "This is the new item's description."
      };
      _itemsCount++;
      return result;
    },

    onItemTap(args: ListViewEventData) {
      let itemIndex = args.index;
      console.log("onNavigationItemTap", itemIndex);
      this.itemList.splice(itemIndex + 1, 0, this.createItem());
      this.itemList.splice(itemIndex + 3, 0, this.createItem());
    },
    onItemLongPress(args: ListViewEventData) {
      let itemIndex = args.index;
      console.log("onNavigationItemLongPress", itemIndex);
      this.itemList.splice(itemIndex + 1, 1);
      _itemsCount--;
      this.itemList.splice(itemIndex + 2, 1);
      _itemsCount--;
    },

    onResetClick() {
      this.itemList = new ObservableArray(0);
      _itemsCount = 0;
    },

    onUpdateItemClick() {
      console.log(this.itemList.length);
      for (let index = 0; index < this.itemList.length; index++) {
        let item = this.itemList.getItem(index);
        item.name = "This is an updated item";
        item.description = "This is the updated item's description.";
        this.itemList.setItem(index, item);
      }
    },

    onRemoveItemClick() {
      this.itemList.splice(this.itemList.length - 1, 1);
    },

    onOptionsTapped(args: any) {
      dialogs
        .action({
          message: "Animation",
          cancelButtonText: "Cancel",
          actions: [
            ListViewItemAnimation.Default,
            ListViewItemAnimation.Fade,
            ListViewItemAnimation.Scale,
            ListViewItemAnimation.Slide
          ]
        })
        .then(result => {
          this.itemInsertAnimation = result;
          this.itemDeleteAnimation = result;
        });
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    }
  }
};
