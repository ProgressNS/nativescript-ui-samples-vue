import * as frameModule from 'tns-core-modules/ui/frame';
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
      <LinearAxis v-tkCartesianVerticalAxis horizontalLocation="Right" allowPan="true"></LinearAxis>
      <CategoricalAxis v-tkCartesianHorizontalAxis allowPan="true" allowZoom="true"></CategoricalAxis>

      <BarSeries v-tkCartesianSeries
                 selectionMode="Series"
                 seriesName="Bar"
                 stackMode="Stack"
                 categoryProperty="Country"
                 valueProperty="Impact"
                 :items="bubbleItems">
      </BarSeries>

      <LineSeries v-tkCartesianSeries
                 selectionMode="Series"
                 showLabels="true"
                 seriesName="Line"
                 categoryProperty="Country"
                 valueProperty="Amount"
                 stackMode="Stack"
                 :items="items">
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
