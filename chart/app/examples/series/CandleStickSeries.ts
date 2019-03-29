import * as frameModule from 'tns-core-modules/ui/frame';
import { getFinancialData } from '../../data';

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
      <CandleStickSeries v-tkCartesianSeries
                          categoryProperty="Date"
                          openPropertyName="Open"
                          closePropertyName="Close"
                          highPropertyName="High"
                          lowPropertyName="Low"
                          :items="items" />
      <DateTimeCategoricalAxis v-tkCartesianHorizontalAxis dateFormat="yyyy-MM-dd" verticalLocation="Bottom"></DateTimeCategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getFinancialData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
