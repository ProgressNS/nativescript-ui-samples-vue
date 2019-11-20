import { Frame } from 'tns-core-modules/ui/frame';
import GridLayoutForm from './GridLayoutForm';
import StackLayoutForm from './StackLayoutForm';

const description = 'Layouts';

export default {
  name: 'Layouts',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout class="page">
      <ListView for="example in examples"
                class="list"
                @itemTap="goToExample">
        <v-template>
          <StackLayout class="item" orientation="vertical" style="margin-top: 20">
            <Label :text="example.description">
            </Label>
          </StackLayout>
        </v-template>
      </ListView>
  </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      examples: [
        StackLayoutForm,
        GridLayoutForm,
      ],
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    goToExample ({ item }) {
      this.$navigateTo(item);
    },
  },
};
