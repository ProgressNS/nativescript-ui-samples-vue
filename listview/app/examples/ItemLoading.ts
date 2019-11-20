import { simpleItemList } from '../data';
import { Color } from 'tns-core-modules/color';
import { Frame }  from "tns-core-modules/ui/frame";

const description = 'Item Loading';

export default {
  name: 'ItemLoading',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadListView for="item in itemList"
                   @itemLoading="onItemLoading">
        <v-template>
          <StackLayout class="item p-10" orientation="vertical">
            <Label id="label" :text="item.name" class="nameLabel m-t-10"></Label>
            <Label id="label" :text="item.description" class="descriptionLabel"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      itemList: simpleItemList,
    };
  },
  methods: {
    onItemLoading ({ index, view }) {
      if (index % 2 === 0) {
        view.backgroundColor = new Color('#b3ecff');
        let label = view.getViewById('label');
        label.fontSize = 30;
      } else {
        view.backgroundColor = new Color('#ccf2ff');
        let label = view.getViewById('label');
        label.fontSize = 20;
      }
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    }
  }
};
