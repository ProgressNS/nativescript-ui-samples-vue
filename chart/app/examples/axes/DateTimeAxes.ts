import * as frameModule from 'tns-core-modules/ui/frame';
import { getDateTimeData } from '../../data';

const description = 'DateTime axes';

export default {
  name: 'DateTimeAxes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <DateTimeContinuousAxis v-tkCartesianHorizontalAxis
                              minimum="01/02/2015"
                              maximum="01/10/2015"
                              majorStep="Month"
                              dateFormat="MMM-dd"
                              labelFitMode="Rotate"
                              labelRotationAngle="1.2">
      </DateTimeContinuousAxis>

      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
      <LineSeries v-tkCartesianSeries
                  categoryProperty="TimeStamp"
                  valueProperty="Amount"
                  :items="items">
      </LineSeries>

    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getDateTimeData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
