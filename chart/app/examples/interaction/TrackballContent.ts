import { Frame } from 'tns-core-modules/ui/frame';
import { TrackballCustomContentData } from 'nativescript-ui-chart';
import { getTemperatures, TemperatureData } from '../../data';

const description = 'Trackball Content';

export default {
  name: 'TrackballContent',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="auto, *">
      <Label text="Tap and hold to display the Trackball for the closest category. Drag horizontally to update the Trackball position." textWrap="true"></Label>
      <RadCartesianChart row="1" marginTop="20">
        <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
        <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

        <SplineSeries v-tkCartesianSeries legendTitle="Bangkok" seriesName="Line1"
          :items="items" categoryProperty="Month" valueProperty="Bangkok">
        </SplineSeries>
        <SplineSeries v-tkCartesianSeries legendTitle="Paris" seriesName="Line2"
          :items="items" categoryProperty="Month" valueProperty="Paris">
        </SplineSeries>
        <SplineSeries v-tkCartesianSeries legendTitle="Ulaanbaatar" seriesName="Line3"
          :items="items" categoryProperty="Month" valueProperty="Ulaanbaatar">
        </SplineSeries>

        <Trackball v-tkCartesianTrackball snapMode="AllClosestPoints" showIntersectionPoints="true"
          @trackBallContentRequested="onTrackBallContentRequested">
        </Trackball>

        <RadLegendView v-tkCartesianLegend position="Top" title="Monthly Averages"></RadLegendView>

        <Palette v-tkCartesianPalette seriesName="Line1">
          <PaletteEntry v-tkCartesianPaletteEntry fillColor="#E11B01" strokeColor="#E11B01"></PaletteEntry>
        </Palette>
        <Palette v-tkCartesianPalette seriesName="Line2">
          <PaletteEntry v-tkCartesianPaletteEntry fillColor="#FFBEA7" strokeColor="#FFBEA7"></PaletteEntry>
        </Palette>
        <Palette v-tkCartesianPalette seriesName="Line3">
          <PaletteEntry v-tkCartesianPaletteEntry fillColor="#03A9F4" strokeColor="#03A9F4"></PaletteEntry>
        </Palette>

      </RadCartesianChart>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getTemperatures(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onTrackBallContentRequested(args: TrackballCustomContentData) {
      let selectedItem: TemperatureData = args.pointData;
      switch (args.seriesIndex) {
          case 0: args.content = "Bangkok: " + selectedItem.Bangkok; break;
          case 1: args.content = "Paris: " + selectedItem.Paris; break;
          case 2: args.content = "Ulaanbaatar: " + selectedItem.Ulaanbaatar; break;
      }
    },
  },
};
