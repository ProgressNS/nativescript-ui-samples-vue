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
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>

      <BarSeries v-tkCartesianSeries legendTitle="Bar series" selectionMode="DataPoint"
        :items="items" categoryProperty="Name" valueProperty="Sales">
      </BarSeries>

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
