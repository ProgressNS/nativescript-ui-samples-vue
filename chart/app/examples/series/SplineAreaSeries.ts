import * as frameModule from 'tns-core-modules/ui/frame';
// >> chart-spline-area-series
import { getCountriesData } from '../../data';

const description = 'Spline Area Series';

export default {
  name: 'SplineAreaSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
      <SplineAreaSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="Amount" />
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
// << chart-spline-area-series