import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../data';

const description = 'Legend';

export default {
  name: 'Legend',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart seriesSelectionMode="Single">
      <Palette v-tkCartesianPalette seriesName="Bar">
        <PaletteEntry v-tkCartesianPaletteEntry fillColor="#ff6699" strokeColor="#ff6699"></PaletteEntry>
      </Palette>

      <Palette v-tkCartesianPalette seriesName="Line">
        <PaletteEntry v-tkCartesianPaletteEntry fillColor="#4d88ff" strokeColor="#4d88ff"></PaletteEntry>
      </Palette>

      <Palette v-tkCartesianPalette seriesName="Area">
        <PaletteEntry v-tkCartesianPaletteEntry fillColor="#8033cc33" strokeColor="#33cc33"></PaletteEntry>
      </Palette>

      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis maximum="50"></LinearAxis>

      <BarSeries v-tkCartesianSeries
                  seriesName="Bar"
                  legendTitle="Bar series"
                  categoryProperty="Country"
                  valueProperty="ThirdVal"
                  legendLabel="Series type"
                  :items="items">
      </BarSeries>

      <LineSeries v-tkCartesianSeries
                  seriesName="Line"
                  legendTitle="Line series"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  legendLabel="Series type"
                  :items="items">
      </LineSeries>

      <AreaSeries v-tkCartesianSeries
                  seriesName="Area"
                  legendTitle="Area series"
                  categoryProperty="Country"
                  valueProperty="SecondVal"
                  legendLabel="Series type"
                  :items="items">
      </AreaSeries>

      <RadLegendView v-tkCartesianLegend position="Top" title="Series type" height="150" enableSelection="true"></RadLegendView>

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
