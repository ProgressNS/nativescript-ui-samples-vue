import * as frameModule from 'tns-core-modules/ui/frame';
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
      <Palette v-tkCartesianPalette seriesName="Bar">
        <PaletteEntry v-tkCartesianPaletteEntry fillColor="#80FCE49D" strokeColor="#80E2A1F8"></PaletteEntry>
      </Palette>
      <Palette v-tkCartesianPalette seriesName="Area">
        <PaletteEntry v-tkCartesianPaletteEntry fillColor="#8060B3FC" strokeColor="#60B3FC"></PaletteEntry>
      </Palette>
      <Palette v-tkCartesianPalette seriesName="Line">
        <PaletteEntry v-tkCartesianPaletteEntry strokeColor="#FFCF40" strokeWidth="3"></PaletteEntry>
      </Palette>

      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

      <BarSeries v-tkCartesianSeries
                  seriesName="Bar"
                  categoryProperty="Country"
                  valueProperty="SecondVal"
                  stackMode="None"
                  :items="items" />
      <LineSeries v-tkCartesianSeries
                  seriesName="Line"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  stackMode="None"
                  :items="items" />
      <SplineAreaSeries v-tkCartesianSeries
                        seriesName="Area"
                        categoryProperty="Country"
                        valueProperty="ThirdVal"
                        stackMode="None"
                        :items="items" />
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
