import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Styling Grid';

export default {
  name: 'StylingGrid',
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
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

      <RadCartesianChartGrid v-tkCartesianGrid
                              horizontalLinesVisible="true"
                              verticalLinesVisible="true"
                              horizontalStripLinesVisible="true"
                              verticalStripLinesVisible="true"
                              verticalStrokeColor="#804d0026"
                              horizontalStrokeColor="#ffffcc80"
                              horizontalStrokeWidth="2"
                              verticalStrokeWidth="3"
                              horizontalStripLineColor="#8059005c, #804d0026"></RadCartesianChartGrid>
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
