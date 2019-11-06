import { Frame } from 'tns-core-modules/ui/frame';
// >> chart-bar-series-vue
import { getCountriesData } from '../../data';

const description = 'Bar Series';

export default {
  name: 'BarSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
      <BarSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="Amount"></BarSeries>
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
      Frame.topmost().goBack();
    },
  },
};
// << chart-bar-series-vue