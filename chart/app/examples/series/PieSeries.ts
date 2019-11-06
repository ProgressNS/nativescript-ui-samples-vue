import { Frame } from 'tns-core-modules/ui/frame';
// >> chart-pieseries-selection-vue
import { getPieData } from '../../data';

const description = 'Pie Series';

export default {
  name: 'PieSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="*, *">
      <RadPieChart allowAnimation="true" row="0">
        <PieSeries v-tkPieSeries
          selectionMode="DataPoint"
          expandRadius="0.4"
          outerRadiusFactor="0.7"
          valueProperty="Amount"
          legendLabel="Brand"
          :items="items" />

        <RadLegendView v-tkPieLegend position="Right" title="Brands" offsetOrigin="TopRight" width="110" enableSelection="true"></RadLegendView>
      </RadPieChart>

      <RadPieChart allowAnimation="true" row="1">
        <DonutSeries v-tkPieSeries
          selectionMode="DataPoint"
          expandRadius="0.4"
          outerRadiusFactor="0.7"
          innerRadiusFactor="0.4"
          valueProperty="Amount"
          legendLabel="Brand"
          :items="items" />

        <RadLegendView v-tkPieLegend position="Right" title="Brands" offsetOrigin="TopRight" width="110" enableSelection="true"></RadLegendView>
      </RadPieChart>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getPieData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  },
};
// << chart-pieseries-selection-vue