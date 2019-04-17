import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Styling Ticks';

export default {
  name: 'StylingTicks',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <RadCartesianChartGrid v-tkCartesianGrid
        horizontalLinesVisible="true" verticalLinesVisible="true"
        horizontalStripLinesVisible="false" verticalStripLinesVisible="false"
        horizontalStrokeColor="#8BC34A" verticalStrokeColor="#8BC34A"
        horizontalStrokeWidth="1" verticalStrokeWidth="1"
        horizontalStripLineColor="#00000000">
      </RadCartesianChartGrid>

      <CategoricalAxis v-tkCartesianHorizontalAxis verticalLocation="Bottom"
        lineThickness="1" lineHidden="true" lineColor="#8BC34A"
        labelLayoutMode="Outer" labelMargin="10" labelTextColor="#536DFE"
        ticksHidden="false" ticksLength="30" ticksThickness="3" ticksColor="#536DFE" ticksOffset="-15">
      </CategoricalAxis>

      <LinearAxis v-tkCartesianVerticalAxis horizontalLocation="Right"
        lineThickness="1" lineHidden="true" lineColor="#8BC34A"
        labelLayoutMode="Outer" labelMargin="10" labelTextColor="#536DFE" labelFormat="%.2f"
        ticksHidden="false" ticksLength="30" ticksThickness="3" ticksColor="#536DFE" ticksOffset="-15">
      </LinearAxis>

      <LineSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="Amount"></LineSeries>

      <Palette v-tkCartesianPalette>
          <PaletteEntry tkCartesianPaletteEntry strokeColor="#536DFE" ios:strokeWidth="2" android:strokeWidth="4"></PaletteEntry>
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
      frameModule.topmost().goBack();
    },
  },
};
