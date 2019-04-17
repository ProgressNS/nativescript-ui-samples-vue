import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Styling Labels';
// >> chart-styling-vue
export default {
  name: 'StylingLabels',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

      <LineSeries v-tkCartesianSeries
                  legendTitle="Previous Year Sales"
                  showLabels="true"
                  valueProperty="Amount"
                  categoryProperty="Country"
                  :items="items">
          <PointLabelStyle v-tkLineLabelStyle margin="10" fontStyle="Bold" fillColor="#60B3FC" textSize="10" textColor="White"></PointLabelStyle>
      </LineSeries>

      <LineSeries v-tkCartesianSeries
                  legendTitle="Current Year Sales"
                  showLabels="true"
                  valueProperty="SecondVal"
                  categoryProperty="Country"
                  :items="items">
          <PointLabelStyle v-tkLineLabelStyle margin="10" fontStyle="Bold" fillColor="#FC6060" textSize="10" textColor="White"></PointLabelStyle>
      </LineSeries>

      <RadLegendView v-tkCartesianLegend position="Top" height="150"></RadLegendView>
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
// << chart-styling-vue