import { Frame } from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

const description = 'Observable items';

const getObservableList = () => {
  return new ObservableArray([
    0,
    1,
    2,
  ]);
};

const getList = () => {
  return [
    0,
    1,
    2,
  ];
};


const RadListItem = {
  name: 'RadListItem',
  template: `
    <Label class="p-10"
           :text="itemText"
           col="0" textWrap="true" verticalAlignment="center"/>
  `,
  props: ['item'],
  created() {
    this.$emit('create-item');
  },
  computed: {
    itemText() {
      return `Item: ${this.item}`;
    }
  },
  watch: {
    item (value, oldValue) {
      this.$emit('update-item', {
        old: oldValue,
        new: value
      });
    },
  },
};

export default {
  name: 'Observable',
  description: description,
  template: `
  <Page>
    <ActionBar>
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
      <ActionItem text="Observable" android.position="popup" @tap="onSelectObservable()"></ActionItem>
      <ActionItem text="Non observable" android.position="popup" @tap="onSelectNonObservable()"></ActionItem>
    </ActionBar>
    <StackLayout orientation="vertical">
      <GridLayout columns="*, *" rows="auto">
        <Button text="Add item" @tap="addItem" col="0" />
        <Button text="Remove last item" @tap="deleteItem" col="1" />
      </GridLayout>
      <GridLayout columns="*, *" rows="auto">
        <RadListView for="r in currentList" col="0"
                     @itemTap="onItemTap">
          <v-template>
            <RadListItem :item="r"
                         @create-item="markCreation(r)"
                         @update-item="markUpdate" />
          </v-template>
        </RadListView>
        <RadListView ref="counterlist" for="r in createsCounter" col="1">
          <v-template>
            <Label :text="'Create counter: ' + r"></Label>
          </v-template>
        </RadListView>
      </GridLayout>
    </StackLayout>
  </Page>
  `,
  data() {
    return {
      title: description,
      currentList: getObservableList(),
      createsCounter: [0, 0, 0],
      useObservable: true,
      biggestDeletedItem: 0,
    };
  },
  components: { RadListItem },
  computed: {
    lastItem () {
      return !this.useObservable ?
        this.currentList[this.currentList.length - 1]
        : this.currentList.getItem(this.currentList.length - 1);
    },
    nextItem () {
      return this.currentList.length;
    },
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    addItem() {
      console.log(`Push ${this.nextItem}`);
      const next = this.nextItem;
      this.currentList.push(this.nextItem);
      if (this.createsCounter.length < this.currentList.length && next <= this.biggestDeletedItem) {
        this.createsCounter.push(1);
      }
    },
    deleteItem() {
      console.log(`Delete ${this.lastItem}`);
      if (this.currentList.length === 0) {
        if (this.useObservable) {
          this.currentList = new ObservableArray(0);
          this.createsCounter = [];
        }
        return;
      }
      if (this.biggestDeletedItem < this.lastItem) {
        this.biggestDeletedItem = this.lastItem;
      }
      this.deletedItems.push(this.lastItem);

      const index = this.currentList.length - 1;
      this.currentList.splice(index, 1);
      this.createsCounter.splice(index, 1);

      if (this.currentList.length === 0) {
        if (this.useObservable) {
          this.currentList = new ObservableArray(0);
          this.createsCounter = [];
        }
      }
    },
    markCreation(item) {
      console.log(`Mark item creation for ${item}...`);
      if (this.createsCounter.length < this.currentList.length) {
        this.createsCounter.push(1);
      } else {
        this.createsCounter[item]++;
      }
      this.$refs.counterlist.refresh();
    },
    markUpdate(data) {
      const index = this.deletedItems.indexOf(data.old);
      if (index !== -1) {
        console.log(`Old item ${data.old} reused for the new ${data.new} value`);
      }
    },
    onSelectObservable() {
      this.useObservable = true;
      this.currentList = getObservableList();
      this.createsCounter = [0, 0, 0];
      this.biggestDeletedItem = 0;
    },
    onSelectNonObservable() {
      this.useObservable = false;
      this.currentList = getList();
      this.createsCounter = [0, 0, 0];
      this.biggestDeletedItem = 0;
    },
    onItemTap ({ item }) {
      console.log(`Item tapped: ${item}`);
    },
  },
  created () {
    this.deletedItems = [];
  },
};
