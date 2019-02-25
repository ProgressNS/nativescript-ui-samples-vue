import * as frameModule from 'tns-core-modules/ui/frame';
import { LinearAxis } from 'nativescript-ui-chart';
import { getCountriesData } from '../../data';

const description = 'Pan & Zoom';

export default {
  name: 'PanZoom',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <BarSeries v-tkCartesianSeries
                  seriesName="Bar"
                  stackMode="Stack"
                  categoryProperty="Country"
                  valueProperty="SecondVal"
                  :items="items"
                  :verticalAxis="linearAxisZoomPan">
      </BarSeries>

      <CategoricalAxis v-tkCartesianHorizontalAxis allowPan="true" allowZoom="true"></CategoricalAxis>

      <LineSeries v-tkCartesianSeries
                  seriesName="Line"
                  stackMode="Stack"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="items"
                  :verticalAxis="linearAxisZoom">
      </LineSeries>

    </RadCartesianChart>
  </Page>
  `,
  data () {
    let linearAxisZoom = new LinearAxis();
    linearAxisZoom.horizontalLocation = 'Left';
    linearAxisZoom.allowZoom = true;

    let linearAxisZoomPan = new LinearAxis();
    linearAxisZoomPan.horizontalLocation = "Right";
    linearAxisZoomPan.allowZoom = true;
    linearAxisZoomPan.allowPan = true;

    return {
      title: description,
      items: getCountriesData(),
      linearAxisZoom: linearAxisZoom,
      linearAxisZoomPan: linearAxisZoomPan,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
