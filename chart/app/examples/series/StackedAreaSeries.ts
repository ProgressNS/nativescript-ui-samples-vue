import * as frameModule from 'tns-core-modules/ui/frame';
import { getFirstSeries, getSecondSeries, getThirdSeries } from '../../data';
import { ChartSeriesStackMode } from "nativescript-ui-chart";
import Options from '../Options';

const description = 'Stacked Area Series';

export default {
  name: 'StackedAreaSeriesExample',
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
      <AreaSeries v-tkCartesianSeries :items="firstSeries" :stackMode="stackMode" categoryProperty="Country" valueProperty="Amount"></AreaSeries>
      <AreaSeries v-tkCartesianSeries :items="secondSeries" :stackMode="stackMode" categoryProperty="Country" valueProperty="Amount"></AreaSeries>
      <AreaSeries v-tkCartesianSeries :items="thirdSeries" :stackMode="stackMode" categoryProperty="Country" valueProperty="Amount"></AreaSeries>

      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      stackMode: ChartSeriesStackMode.Stack,
      firstSeries: getFirstSeries(),
      secondSeries: getSecondSeries(),
      thirdSeries: getThirdSeries(),
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
