import * as frameModule from 'tns-core-modules/ui/frame';
// >> chart-trackball-vue
import { getCandleStickData } from '../../data';

const description = 'Trackball';

export default {
  name: 'TrackballExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="auto, *">
      <Label text="Tap and hold on a given datapoint to display the Trackball. Drag across datapoints to update the Trackball position." textWrap="true"></Label>
      <RadCartesianChart row="1">
        <DateTimeCategoricalAxis v-tkCartesianHorizontalAxis dateFormat="yyyy-MM-dd" verticalLocation="Bottom"></DateTimeCategoricalAxis>
        <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
        <Trackball v-tkCartesianTrackball></Trackball>
        <CandlestickSeries v-tkCartesianSeries
          categoryProperty="Date" :items="items"
          openPropertyName="Open" highPropertyName="High" lowPropertyName="Low" closePropertyName="Close">
        </CandlestickSeries>
      </RadCartesianChart>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getCandleStickData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
// << chart-trackball-vue