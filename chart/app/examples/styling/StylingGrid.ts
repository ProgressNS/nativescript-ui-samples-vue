import { Frame } from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Styling Grid';
// >> chart-grid-style-vue
export default {
  name: 'StylingGrid',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <RadCartesianChartGrid v-tkCartesianGrid
        horizontalLinesVisible="true"
        verticalLinesVisible="true"
        horizontalStripLinesVisible="true"
        verticalStripLinesVisible="true"
        horizontalStrokeColor="#ffffcc80"
        verticalStrokeColor="#804d0026"
        horizontalStrokeWidth="2"
        verticalStrokeWidth="3"
        horizontalStripLineColor="#8059005c, #804d0026">
      </RadCartesianChartGrid>

      <BarSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="Amount"></BarSeries>

      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
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
// << chart-grid-style-vue