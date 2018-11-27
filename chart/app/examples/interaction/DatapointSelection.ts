import * as frameModule from 'tns-core-modules/ui/frame';
import { getSourceItems } from '../../data';

const description = 'Datapoint Selection';

export default {
  name: 'DatapointSelection',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <BarSeries v-tkCartesianSeries
                 selectionMode="DataPoint"
                 seriesName="Bars"
                 legendTitle="Bar series"
                 valueProperty="Sales"
                 categoryProperty="Name"
                 :items="items">
      </BarSeries>

      <LinearAxis v-tkCartesianVerticalAxis horizontalLocation="Left" labelTextColor="Green" labelSize="10" lineColor="Red" lineThickness="1"></LinearAxis>
      <CategoricalAxis v-tkCartesianHorizontalAxis verticalLocation="Bottom" labelTextColor="Red" labelSize="10" lineColor="Red" lineThickness="1"></CategoricalAxis>
      <RadLegendView v-tkCartesianLegend position="Top" title="Financial data" height="150"></RadLegendView>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getSourceItems(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
