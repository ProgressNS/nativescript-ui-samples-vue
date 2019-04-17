import * as frameModule from 'tns-core-modules/ui/frame';
// >> chart-stacked-bar-series-vue
import { getCountriesData } from '../../data';
import { ChartSeriesStackMode } from "nativescript-ui-chart";
import Options from '../Options';

const description = 'Stacked Bar Series';

export default {
  name: 'StackedBarSeriesExample',
  description: description,
  template: `
  <Page @navigatedTo="onNavigatedTo">
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>

      <ActionItem text="Stack" android.position="popup" @tap="onStackModeSelected" ios:visibility="hidden"></ActionItem>
      <ActionItem text="Stack 100" android.position="popup" @tap="onStack100ModeSelected" ios:visibility="hidden"></ActionItem>
      <ActionItem text="None" android.position="popup" @tap="onNoneStackModeSelected" ios:visibility="hidden"></ActionItem>

      <ActionItem text="Options" ios.position="right" @tap="onOptionsTapped" android:visibility="hidden"></ActionItem>
    </ActionBar>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

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
      stackMode: ChartSeriesStackMode.Stack,
      optionsInfo: {
        values: ["Stack", "Stack100", "None"],
        index: 0
      }
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onStack100ModeSelected () {
      this.stackMode = ChartSeriesStackMode.Stack100;
    },
    onStackModeSelected () {
      this.stackMode = ChartSeriesStackMode.Stack;
    },
    onNoneStackModeSelected () {
      this.stackMode = ChartSeriesStackMode.None;
    },
    onNavigatedTo (args) {
      switch (this.optionsInfo.index) {
        case 0: this.onStackModeSelected(); break;
        case 1: this.onStack100ModeSelected(); break;
        case 2: this.onNoneStackModeSelected(); break;
      }
    },
    onOptionsTapped () {
      this.$navigateTo(Options, {
        context: {
          optionsInfo: this.optionsInfo
        }
      });
    }
  }
};
// << chart-stacked-bar-series-vue