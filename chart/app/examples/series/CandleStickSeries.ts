import * as frameModule from 'tns-core-modules/ui/frame';
// >> chart-candlestick-vue
import { getCandlestickData } from '../../data';

const description = 'Candlestick Series';

export default {
  name: 'CandleStickSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <DateTimeCategoricalAxis v-tkCartesianHorizontalAxis dateFormat="yyyy-MM-dd" verticalLocation="Bottom"></DateTimeCategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
      <CandleStickSeries v-tkCartesianSeries
        categoryProperty="Date"
        openPropertyName="Open"
        highPropertyName="High"
        lowPropertyName="Low"
        closePropertyName="Close"
        :items="items" />
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getCandlestickData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
// << chart-candlestick-vue