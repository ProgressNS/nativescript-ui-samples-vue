import { Frame } from 'tns-core-modules/ui/frame';
import AreaCss from './AreaCss';
import BarCss from './BarCss';
import CandlestickScc from './CandlestickCss';
import DonutCss from './DonutCss';
import LineCss from './LineCss';
import ScatterCss from './ScatterCss';

const description = 'CSS';

export default {
  name: 'CSS',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout class="page">
      <ListView for="example in examples"
                class="list"
                separatorColor="transparent"
                @itemTap="goToExample">
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="example.description" class="titleLabel"></Label>
            <StackLayout height="1" backgroundColor="#EEEEEE"></StackLayout>
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
        BarCss,
        LineCss,
        AreaCss,
        ScatterCss,
        CandlestickScc,
        DonutCss,
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
