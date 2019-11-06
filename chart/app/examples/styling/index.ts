import { Frame } from 'tns-core-modules/ui/frame';
import StylingAxes from './StylingAxes';
import StylingGrid from './StylingGrid';
import StylingLabels from './StylingLabels';
import StylingPieSeries from './StylingPieSeries';
import StylingBarSeries from './StylingBarSeries';
import StylingSelection from './StylingSelection';
import StylingSeries from './StylingSeries';
import StylingTicks from './StylingTicks';

const description = 'Styling';

export default {
  name: 'Styling',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <ListView for="example in examples"
              separatorColor="transparent"
              @itemTap="goToExample">
      <v-template>
        <StackLayout class="item" orientation="vertical">
          <Label :text="example.description" class="titleLabel"></Label>
          <StackLayout height="1" backgroundColor="#EEEEEE"></StackLayout>
        </StackLayout>
      </v-template>
    </ListView>
  </Page>
  `,
  data () {
    return {
      title: description,
      examples: [
        StylingAxes,
        StylingSeries,
        StylingPieSeries,
        StylingBarSeries,
        StylingGrid,
        StylingLabels,
        StylingTicks,
        StylingSelection,
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
