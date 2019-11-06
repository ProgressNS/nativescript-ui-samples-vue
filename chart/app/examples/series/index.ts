import { Frame } from 'tns-core-modules/ui/frame';
import AreaSeries from './AreaSeries';
import BarSeries from './BarSeries';
import BubbleSeries from './BubbleSeries';
import CandleStickSeries from './CandleStickSeries';
import LineSeries from './LineSeries';
import OhlcSeries from './OhlcSeries';
import PieSeries from './PieSeries';
import RangeBarSeries from './RangeBarSeries';
import ScatterBubbleSeries from './ScatterBubbleSeries';
import ScatterSeries from './ScatterSeries';
import SplineSeries from './SplineSeries';
import SplineAreaSeries from './SplineAreaSeries';
import StackedAreaSeries from './StackedAreaSeries';
import StackedBarSeries from './StackedBarSeries';

const description = 'Series';

export default {
  name: 'Series',
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
        BarSeries,
        RangeBarSeries,
        StackedBarSeries,
        AreaSeries,
        StackedAreaSeries,
        LineSeries,
        SplineSeries,
        SplineAreaSeries,
        BubbleSeries,
        ScatterBubbleSeries,
        CandleStickSeries,
        OhlcSeries,
        PieSeries,
        ScatterSeries,
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
