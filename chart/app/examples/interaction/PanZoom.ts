import { Frame } from 'tns-core-modules/ui/frame';
// >> chart-pan-zoom-vue
import { LinearAxis, ChartAxisHorizontalLocation, LogarithmicAxis } from 'nativescript-ui-chart';
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

      <BarSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="SecondVal" :verticalAxis="linearAxisZoomPan">
      </BarSeries>

      <CategoricalAxis v-tkCartesianHorizontalAxis allowPan="false" allowZoom="true"></CategoricalAxis>

      <LineSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="Amount" :verticalAxis="linearAxisZoom">
      </LineSeries>

    </RadCartesianChart>
  </Page>
  `,
  data () {
    let linearAxisZoom = new LinearAxis();
    linearAxisZoom.horizontalLocation = ChartAxisHorizontalLocation.Left;
    linearAxisZoom.allowZoom = true;

    let linearAxisZoomPan = new LinearAxis();
    linearAxisZoomPan.horizontalLocation = ChartAxisHorizontalLocation.Right;
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
      Frame.topmost().goBack();
    },
  },
};
// << chart-pan-zoom-vue