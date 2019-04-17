import * as frameModule from 'tns-core-modules/ui/frame';
// >> chart-gridline-annotation-vue
import { getScatterData } from '../../data';

const description = 'Grid Line';

export default {
  name: 'GridLine',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <LinearAxis v-tkCartesianHorizontalAxis minimum="0" maximum="80" id="hAxis"></LinearAxis>
      <LinearAxis v-tkCartesianVerticalAxis id="vAxis"></LinearAxis>

      <ScatterSeries v-tkCartesianSeries :items="items" xProperty="Age" yProperty="Savings"></ScatterSeries>
      <ScatterSeries v-tkCartesianSeries :items="items" xProperty="Age" yProperty="Salary"></ScatterSeries>
      <ScatterSeries v-tkCartesianSeries :items="items" xProperty="Age" yProperty="Spendings"></ScatterSeries>

      <ChartGridLineAnnotation v-tkCartesianAnnotations axisId="hAxis" hidden="false" value="50" zPosition="AboveSeries"
        android:strokeWidth="4" ios:strokeWidth="10" strokeColor="#EB916580">
      </ChartGridLineAnnotation>
      <ChartGridLineAnnotation v-tkCartesianAnnotations axisId="vAxis" hidden="false" value="10000" zPosition="AboveSeries"
        android:strokeWidth="4" ios:strokeWidth="10" strokeColor="#DEBFEB80">
      </ChartGridLineAnnotation>
      <ChartPlotBandAnnotation v-tkCartesianAnnotations axisId="hAxis" hidden="false" value="20" zPosition="AboveSeries"
        minValue="60" maxValue="70" fillColor="#A1FAC980" strokeColor="#A1FAC980">
      </ChartPlotBandAnnotation>
      <ChartPlotBandAnnotation v-tkCartesianAnnotations axisId="vAxis" hidden="false" value="20000" zPosition="AboveSeries"
        minValue="2500" maxValue="5000" fillColor="#AC74E880" strokeColor="#AC74E880">
      </ChartPlotBandAnnotation>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getScatterData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
// << chart-gridline-annotation-vue