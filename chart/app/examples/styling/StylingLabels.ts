import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Styling Labels';

export default {
  name: 'StylingLabels',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis verticalLocation="Bottom" labelSize="10" lineColor="Red" lineThickness="3"></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis horizontalLocation="Left" labelSize="10" lineColor="Red" lineThickness="3"></LinearAxis>

      <LineSeries v-tkCartesianSeries
                  legendTitle="Financial data"
                  showLabels="true"
                  seriesName="Bar"
                  valueProperty="Amount"
                  categoryProperty="Country"
                  :items="items">
          <PointLabelStyle v-tkLineLabelStyle margin="10" fontStyle="Bold" fillColor="#60B3FC" textSize="10" textColor="White"></PointLabelStyle>
      </LineSeries>

      <LineSeries v-tkCartesianSeries
                  legendTitle="Financial data"
                  showLabels="true"
                  seriesName="Bar"
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
