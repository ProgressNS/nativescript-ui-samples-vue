import { Frame } from 'tns-core-modules/ui/frame';
// >> chart-datetimecontinuous-vue
import { getDateTimeData } from '../../data';

const description = 'DateTime Axis';

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
        minimum="01/02/2015" maximum="01/10/2015"
        majorStep="1" majorStepUnit="Month" dateFormat="MMM-dd"
        labelFitMode="Rotate" labelRotationAngle="1.2">
      </DateTimeContinuousAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

      <LineSeries v-tkCartesianSeries :items="items" categoryProperty="TimeStamp" valueProperty="Amount"></LineSeries>
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
      Frame.topmost().goBack();
    },
  },
};
// << chart-datetimecontinuous-vue