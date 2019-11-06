import { Frame } from 'tns-core-modules/ui/frame';
// >> chart-ohlc-series-vue
import { getOhlcData } from '../../data';

const description = 'Ohlc Series';

export default {
  name: 'OhlcSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <DateTimeCategoricalAxis v-tkCartesianHorizontalAxis dateFormat="yyyy-MM-dd" verticalLocation="Bottom"></DateTimeCategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
      <OhlcSeries v-tkCartesianSeries
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
      items: getOhlcData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  },
};
// << chart-ohlc-series-vue