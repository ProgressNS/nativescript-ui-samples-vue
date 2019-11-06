import { Frame } from 'tns-core-modules/ui/frame';
// >> chart-scatter-vue
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
      <LinearAxis v-tkCartesianHorizontalAxis></LinearAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

      <ScatterSeries v-tkCartesianSeries :items="items" xProperty="Age" yProperty="Salary"></ScatterSeries>
      <ScatterSeries v-tkCartesianSeries :items="items" xProperty="Age" yProperty="Spendings"></ScatterSeries>
      <ScatterSeries v-tkCartesianSeries :items="items" xProperty="Age" yProperty="Savings"></ScatterSeries>
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
      Frame.topmost().goBack();
    },
  },
};
// << chart-scatter-vue