import * as frameModule from 'tns-core-modules/ui/frame';
// >> chart-seriesselection-vue
import { getCountriesData, getBubbleCategoricalData } from '../../data';

const description = 'Series Selection';

export default {
  name: 'SeriesSelection',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <LinearAxis v-tkCartesianVerticalAxis horizontalLocation="Right"></LinearAxis>
      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>

      <BarSeries v-tkCartesianSeries selectionMode="Series"
        :items="bubbleItems" categoryProperty="Country" valueProperty="Impact">
      </BarSeries>

      <LineSeries v-tkCartesianSeries selectionMode="Series" showLabels="true"
        :items="items" categoryProperty="Country" valueProperty="Amount">
      </LineSeries>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getCountriesData(),
      bubbleItems: getBubbleCategoricalData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
// << chart-seriesselection-vue