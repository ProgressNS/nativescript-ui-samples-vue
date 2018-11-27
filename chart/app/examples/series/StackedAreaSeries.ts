import * as frameModule from 'tns-core-modules/ui/frame';
import { getFirstSeries, getSecondSeries, getThirdSeries } from '../../data';

const description = 'Stacked Area Series';

export default {
  name: 'StackedAreaSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
      <ActionItem text="Stack 100" android.position="popup" @tap="onStack100ModeSelected()"></ActionItem>
      <ActionItem text="Stack" android.position="popup" @tap="onStackModeSelected()"></ActionItem>
      <ActionItem text="None" android.position="popup" @tap="onNoneStackModeSelected()"></ActionItem>
    </ActionBar>
    <RadCartesianChart>
      <AreaSeries v-tkCartesianSeries
                  :stackMode="stackMode"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="firstSeries" />

      <AreaSeries v-tkCartesianSeries
                  :stackMode="stackMode"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="secondSeries" />

      <AreaSeries v-tkCartesianSeries
                  :stackMode="stackMode"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="thirdSeries" />

      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      stackMode: 'Stack',
      firstSeries: getFirstSeries(),
      secondSeries: getSecondSeries(),
      thirdSeries: getThirdSeries()
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onStack100ModeSelected () {
      this.stackMode = 'Stack100';
    },
    onStackModeSelected () {
      this.stackMode = 'Stack';
    },
    onNoneStackModeSelected () {
      this.stackMode = 'None';
    }
  }
};
