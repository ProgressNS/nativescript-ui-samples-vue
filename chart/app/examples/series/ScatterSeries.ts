import * as frameModule from 'tns-core-modules/ui/frame';
import { getScatterData } from '../../data';

const description = 'Scatter Series';

export default {
  name: 'ScatterSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>

      <ScatterSeries v-tkCartesianSeries :items="items" xProperty="Age" yProperty="Salary" bubbleSizeProperty="Impact"></ScatterSeries>
      <ScatterSeries v-tkCartesianSeries :items="items" xProperty="Age" yProperty="Spendings" bubbleSizeProperty="Impact"></ScatterSeries>
      <ScatterSeries v-tkCartesianSeries :items="items" xProperty="Age" yProperty="Savings" bubbleSizeProperty="Impact"></ScatterSeries>

      <LinearAxis v-tkCartesianHorizontalAxis></LinearAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getScatterData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
