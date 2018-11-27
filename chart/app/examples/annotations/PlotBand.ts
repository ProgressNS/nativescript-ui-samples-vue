import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Plot band';

export default {
  name: 'PlotBand',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>

      <BarSeries v-tkCartesianSeries
                 categoryProperty="Country"
                 valueProperty="Amount"
                 :items="items"></BarSeries>

      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis id="verBarAxis"></LinearAxis>

      <ChartPlotBandAnnotation
          v-tkCartesianAnnotations
          axisId="verBarAxis"
          minValue="2" maxValue="4"
          zPosition="AboveSeries" strokeWidth="2"
          fillColor="#DDFFFF00" strokeColor="Red"
          strokeDashPattern="3,3,5,5"></ChartPlotBandAnnotation>

    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getCountriesData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
