import * as frameModule from 'tns-core-modules/ui/frame';
import { getFinantialData } from '../../data';

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
      <OhlcSeries v-tkCartesianSeries
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
      items: getFinantialData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
