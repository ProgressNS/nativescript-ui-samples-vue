import { Frame } from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Plot Band';
// >> chart-plotband-annotation-vue
export default {
  name: 'PlotBand',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis id="verBarAxis"></LinearAxis>

      <BarSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="Amount"></BarSeries>

      <ChartPlotBandAnnotation v-tkCartesianAnnotations axisId="verBarAxis" minValue="2" maxValue="4" zPosition="AboveSeries"
        strokeWidth="2" fillColor="#DDFFFF00" strokeColor="Red" strokeDashPattern="3,3,5,5">
      </ChartPlotBandAnnotation>
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
      Frame.topmost().goBack();
    },
  },
};
// << chart-plotband-annotation-vue