import { Frame } from 'tns-core-modules/ui/frame';
// >> chart-area-series-vue
import { getCountriesData } from '../../data';

const description = 'Area Series';

export default {
  name: 'AreaSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
      <AreaSeries v-tkCartesianSeries
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
      Frame.topmost().goBack();
    },
  },
};
// << chart-area-series-vue