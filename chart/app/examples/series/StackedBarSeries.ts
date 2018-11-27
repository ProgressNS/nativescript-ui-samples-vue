import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Stacked Bar Series';

export default {
  name: 'StackedBarSeriesExample',
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
      <CategoricalAxis v-tkCartesianHorizontalAxis verticalLocation="Bottom" labelSize="11"></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis horizontalLocation="Left" labelSize="11"></LinearAxis>

      <BarSeries v-tkCartesianSeries :items="items" :stackMode="stackMode" categoryProperty="Country" valueProperty="Amount"></BarSeries>
      <BarSeries v-tkCartesianSeries :items="items" :stackMode="stackMode" categoryProperty="Country" valueProperty="Amount"></BarSeries>
      <BarSeries v-tkCartesianSeries :items="items" :stackMode="stackMode" categoryProperty="Country" valueProperty="Amount"></BarSeries>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getCountriesData(),
      stackMode: 'Stack',
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
    },
  }
};
