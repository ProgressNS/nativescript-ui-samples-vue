import Vue from 'nativescript-vue';
import * as frameModule from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'rxjs/internal/Observable';

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
  props: ['prefix', 'item'],
  created() {
    setTimeout(() => {
      this.$emit('create-item');
    }, 100);
  },
  computed: {
    itemText () {
      return `${this.prefix}: ${this.item}`;
    }
  }
};

export default {
  name: 'Observable',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
      <ActionItem text="Observable items" android.position="popup" @tap="onSelectObservable()"></ActionItem>
      <ActionItem text="Non observable items" android.position="popup" @tap="onSelectNonObservable()"></ActionItem>
    </ActionBar>
    <StackLayout orientation="vertical">
      <GridLayout columns="*, *" rows="auto">
        <Button text="Add item" @tap="addItem" col="0" />
        <Button text="Remove last item" @tap="deleteItem" col="1" />
      </GridLayout>
      <GridLayout columns="*, *" rows="auto">
      <RadListView for="r in currentList" col="0">
        <v-template>
          <RadListItem prefix="Item" :item="r" @create-item="markCreation(r)" />
        </v-template>
      </RadListView>
      <RadListView ref="counterlist" for="r in createsCounter" col="1">
        <v-template>
          <RadListItem prefix="Create counter" :item="r" />
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
    };
  },
  components: { RadListItem },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    addItem() {
      this.currentList.push(this.currentList.length);
    },
    deleteItem() {
      if (this.currentList.length === 0) {
        return;
      }
      const index = this.currentList.length - 1;
      this.currentList.splice(
        this.currentList.length - 1, 1);

      this.createsCounter.splice(
        this.currentList.length - 1, 1);
    },
    markCreation(item) {
      console.log(`mark item creation for ${item}...`);
      while (this.createsCounter.length <= item) {
        this.createsCounter.push(0);
      }
      this.createsCounter[item]++;
      this.$refs.counterlist.refresh();
    },
    onSelectObservable() {
      this.currentList = getObservableList();
      this.createsCounter = [0, 0, 0];
    },
    onSelectNonObservable() {
      this.currentList = getList();
      this.createsCounter = [0, 0, 0];
    },
  }
};
