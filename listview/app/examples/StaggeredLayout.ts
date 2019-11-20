import { Frame }  from "tns-core-modules/ui/frame";

const description = 'Staggered Layout';
// >> listview-staggeredlayout-vue
const words = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

const getRandomString = () => {
  const length = Math.round((Math.random() * 15));
  let result = words[0];
  for (let i = 0; i < length; i++) {
      result += (words[i % words.length] + ' ');
  }
  return result;
};

const getRandomItems = (size: number) => {
  let items = [];

  for (let i = 0 ; i < size ; i++) {
    items.push({
      name: `Item ${i}`,
      description: getRandomString(),
    });
  }
  return items;
};

export default {
  name: 'StaggeredLayoutList',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadListView for="item in itemList"
                   layout="staggered"
                   gridSpanCount="3"
                   @itemTap="onItemTap">
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="item.name" class="nameLabel"></Label>
            <Label :text="item.description" class="descriptionLabel" textWrap="true"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      itemList: getRandomItems(20),
    };
  },
  methods: {
    onItemTap ({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    }
  }
};
// << listview-staggeredlayout-vue