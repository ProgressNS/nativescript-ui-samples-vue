import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData, getCountriesData2, getCountriesData3 } from '../../data';

const description = 'Styling Series Selection';

export default {
  name: 'StylingSelection',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart seriesSelectionMode="Multiple">

     <Palette v-tkCartesianPalette seriesName="myLine">
          <PaletteEntry v-tkCartesianPaletteEntry strokeWidth="5" strokeColor="Orange" fillColor="Yellow"></PaletteEntry>
          <PaletteEntry v-tkCartesianPaletteEntry strokeWidth="5" strokeColor="Blue"></PaletteEntry>
          <PaletteEntry v-tkCartesianPaletteEntry strokeWidth="5" strokeColor="Pink"></PaletteEntry>
      </Palette>
      <Palette v-tkCartesianPalette seriesName="myLine" seriesState="Selected">
          <PaletteEntry v-tkCartesianPaletteEntry strokeWidth="10" strokeColor="Yellow"></PaletteEntry>
          <PaletteEntry v-tkCartesianPaletteEntry strokeWidth="10" strokeColor="Red"></PaletteEntry>
          <PaletteEntry v-tkCartesianPaletteEntry strokeWidth="10" strokeColor="Green"></PaletteEntry>
      </Palette>
      <Palette v-tkCartesianPalette seriesName="myBar">
          <PaletteEntry v-tkCartesianPaletteEntry strokeWidth="3" strokeColor="Orange" fillColor="Yellow"></PaletteEntry>
          <PaletteEntry v-tkCartesianPaletteEntry strokeWidth="3" strokeColor="Pink" fillColor="Green"></PaletteEntry>
      </Palette>
      <Palette v-tkCartesianPalette seriesName="myBar" seriesState="Selected">
          <PaletteEntry v-tkCartesianPaletteEntry strokeWidth="5" strokeColor="Yellow" fillColor="Orange"></PaletteEntry>
          <PaletteEntry v-tkCartesianPaletteEntry strokeWidth="5" strokeColor="Green" fillColor="Pink"></PaletteEntry>
      </Palette>

      <CategoricalAxis v-tkCartesianHorizontalAxis lineColor="Red" lineThickness="1"></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis lineColor="Blue" lineThickness="1"></LinearAxis>

      <LineSeries v-tkCartesianSeries seriesName="myLine"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  selectionMode="Series"
                  :items="items">
      </LineSeries>

      <BarSeries v-tkCartesianSeries
                  seriesName="myBar"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  selectionMode="DataPoint"
                  :items="items">
      </BarSeries>

      <LineSeries v-tkCartesianSeries
                  seriesName="myLine"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  selectionMode="Series"
                  :items="items2">
      </LineSeries>

      <BarSeries v-tkCartesianSeries
                  seriesName="myBar"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  selectionMode="DataPointMultiple"
                  :items="items2">
      </BarSeries>

      <LineSeries v-tkCartesianSeries
                  seriesName="myLine"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  selectionMode="Series"
                  :items="items3">
      </LineSeries>

      <RadCartesianChartGrid v-tkCartesianGrid horizontalLinesVisible="true" verticalLinesVisible="false" verticalStripLinesVisible="false"
          horizontalStrokeColor="#e5e5e5" horizontalStripLinesVisible="true" horizontalStripLineColor="#f8f8f8, #00000000"></RadCartesianChartGrid>

    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getCountriesData(),
      items2: getCountriesData2(),
      items3: getCountriesData3(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
