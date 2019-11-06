import { Frame } from 'tns-core-modules/ui/frame';
import { getRateA, getRateB, getRateC, getTotal } from '../../data';

const description = 'Multiple Axes';

export default {
  name: 'MultipleAxes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <LinearAxis v-tkCartesianVerticalAxis horizontalLocation="Left"></LinearAxis>
      <CategoricalAxis v-tkCartesianHorizontalAxis verticalLocation="Bottom"></CategoricalAxis>

      <BarSeries v-tkCartesianSeries :items="total" categoryProperty="Country" valueProperty="Amount">
        <LinearAxis v-tkBarVerticalAxis horizontalLocation="Right"></LinearAxis>
      </BarSeries>
      <LineSeries v-tkCartesianSeries :items="rateA" categoryProperty="Country" valueProperty="Amount"></LineSeries>
      <LineSeries v-tkCartesianSeries :items="rateB" categoryProperty="Country" valueProperty="Amount"></LineSeries>
      <LineSeries v-tkCartesianSeries :items="rateC" categoryProperty="Country" valueProperty="Amount"></LineSeries>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      rateA: getRateA(),
      rateB: getRateB(),
      rateC: getRateC(),
      total: getTotal(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  },
};
