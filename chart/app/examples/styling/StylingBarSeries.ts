import { Frame } from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Styling Bar Series';

export default {
  name: 'StylingBarSeries',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

      <BarSeries v-tkCartesianSeries paletteMode="Item" :items="items" categoryProperty="Country" valueProperty="Amount" />

      <Palette v-tkCartesianPalette>
        <PaletteEntry v-tkCartesianPaletteEntry strokeColor="#2CACE1" fillColor="#2CACE1"></PaletteEntry>
        <PaletteEntry v-tkCartesianPaletteEntry strokeColor="#A05BC5" fillColor="#A05BC5"></PaletteEntry>
        <PaletteEntry v-tkCartesianPaletteEntry strokeColor="#8FC502" fillColor="#8FC502"></PaletteEntry>
        <PaletteEntry v-tkCartesianPaletteEntry strokeColor="#FF3B3C" fillColor="#FF3B3C"></PaletteEntry>
        <PaletteEntry v-tkCartesianPaletteEntry strokeColor="#476BEF" fillColor="#476BEF"></PaletteEntry>
      </Palette>

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
