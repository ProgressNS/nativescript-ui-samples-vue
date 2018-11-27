import * as frameModule from 'tns-core-modules/ui/frame';
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
    <StackLayout>
      <RadPieChart height="300" allowAnimation="true" row="0">
        <PieSeries v-tkPieSeries
                  selectionMode="DataPoint"
                  expandRadius="0.4"
                  outerRadiusFactor="0.7"
                  valueProperty="Amount"
                  legendLabel="Brand"
                  :items="items" />

        <RadLegendView v-tkPieLegend position="Right" title="Brands" offsetOrigin="TopRight" width="110" enableSelection="true"></RadLegendView>
      </RadPieChart>

      <RadPieChart height="300" allowAnimation="true" row="1">
        <DonutSeries v-tkPieSeries selectionMode="DataPoint"
                    outerRadiusFactor="0.9"
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
      frameModule.topmost().goBack();
    },
  },
};
