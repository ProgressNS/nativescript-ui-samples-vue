import * as frameModule from 'tns-core-modules/ui/frame';
// >> chart-getting-started-vue
import { getCountriesData } from '../../data';

const description = 'Line Series';

export default {
  name: 'LineSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
      <LineSeries v-tkCartesianSeries
                  :items="items"
                  categoryProperty="Country"
                  valueProperty="Amount" />
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getCountriesData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
// << chart-getting-started-vue