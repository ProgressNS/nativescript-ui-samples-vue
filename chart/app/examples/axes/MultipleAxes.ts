import * as frameModule from 'tns-core-modules/ui/frame';
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
      <CategoricalAxis v-tkCartesianHorizontalAxis verticalLocation="Down"></CategoricalAxis>

      <LineSeries v-tkCartesianSeries
                  seriesName="RateA"
                  stackMode="Stack"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="rateA">
      </LineSeries>
      <LineSeries v-tkCartesianSeries
                  seriesName="RateB"
                  stackMode="Stack"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="rateB">
      </LineSeries>
      <LineSeries v-tkCartesianSeries
                  seriesName="RateC"
                  stackMode="Stack"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="rateC">
      </LineSeries>
      <BarSeries v-tkCartesianSeries
                 seriesName="Total"
                 stackMode="Stack"
                 categoryProperty="Country"
                 valueProperty="Amount"
                 :items="total">
          <LinearAxis v-tkBarVerticalAxis horizontalLocation="Right"></LinearAxis>
      </BarSeries>
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
      frameModule.topmost().goBack();
    },
  },
};
