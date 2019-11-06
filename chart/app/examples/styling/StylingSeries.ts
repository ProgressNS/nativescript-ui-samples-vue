import { Frame } from 'tns-core-modules/ui/frame';
// >> chart-styling-vue
import { getCountriesData } from '../../data';

const description = 'Styling Series';

export default {
  name: 'StylingSeries',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <BarSeries v-tkCartesianSeries seriesName="Bar" :items="items" categoryProperty="Country" valueProperty="SecondVal" />
      <LineSeries v-tkCartesianSeries seriesName="Line" :items="items" categoryProperty="Country" valueProperty="Amount"/>
      <SplineAreaSeries v-tkCartesianSeries seriesName="Area" :items="items" categoryProperty="Country" valueProperty="ThirdVal" />

      <Palette v-tkCartesianPalette seriesName="Bar">
        <PaletteEntry v-tkCartesianPaletteEntry fillColor="#80FCE49D" strokeColor="#80E2A1F8"></PaletteEntry>
      </Palette>
      <Palette v-tkCartesianPalette seriesName="Line">
        <PaletteEntry v-tkCartesianPaletteEntry strokeColor="#FFCF40" strokeWidth="3"></PaletteEntry>
      </Palette>
      <Palette v-tkCartesianPalette seriesName="Area">
        <PaletteEntry v-tkCartesianPaletteEntry fillColor="#8060B3FC" strokeColor="#60B3FC"></PaletteEntry>
      </Palette>

      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
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
      Frame.topmost().goBack();
    },
  },
};
// << chart-styling-vue