import { Frame } from 'tns-core-modules/ui/frame';
import { getSourceItems } from '../../data';

const description = 'Pie Selection';

export default {
  name: 'PieSelection',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadPieChart>
      <PieSeries v-tkPieSeries
          selectionMode="DataPoint"
          outerRadiusFactor="0.8"
          expandRadius="0.2"
          showLabels="true"
          :items="items"
          valueProperty="Sales">
          <PointLabelStyle v-tkPieLabelStyle margin="15"></PointLabelStyle>
      </PieSeries>
      <RadLegendView v-tkPieLegend position="Top" title="My pie data"></RadLegendView>
    </RadPieChart>
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
      Frame.topmost().goBack();
    },
  },
};
