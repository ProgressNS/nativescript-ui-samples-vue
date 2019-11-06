import { Frame } from 'tns-core-modules/ui/frame';
import { getSalesData } from '../../data';

const description = 'Bar CSS';

export default {
  name: 'Bar CSS',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout class="root" rows="auto, auto, 300, auto" @loaded="onLoaded" @unloaded="onUnloaded">
        <Label class="title" text="Smartphone Shipments"></Label>
        <Label class="subtitle" row="1" text="(in millions)"></Label>
        <RadCartesianChart row="2" allowAnimations="false">
            <RadCartesianChartGrid v-tkCartesianGrid
                horizontalLinesVisible="false"
                verticalLinesVisible="false"
                horizontalStripLinesVisible="false"
                verticalStripLinesVisible="false"
                horizontalStrokeColor="#00000000"
                verticalStrokeColor="#00000000"
                horizontalStripLineColor="#00000000, #00000000">
            </RadCartesianChartGrid>
            <BarSeries v-tkCartesianSeries :items="salesData" categoryProperty="Vendor" valueProperty="Q12018"></BarSeries>
            <BarSeries v-tkCartesianSeries index="1" :items="salesData" categoryProperty="Vendor" valueProperty="Q12019"></BarSeries>
            <LinearAxis v-tkCartesianHorizontalAxis ></LinearAxis>
            <CategoricalAxis v-tkCartesianVerticalAxis></CategoricalAxis>
        </RadCartesianChart>
        <StackLayout class="legend" row="3" orientation="horizontal">
            <StackLayout class="symbol first"></StackLayout>
            <Label text="Q1 2019"></Label>
            <StackLayout class="symbol second"></StackLayout>
            <Label text="Q1 2018"></Label>
        </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      salesData: getSalesData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onUnloaded(args) {
        args.object.css = null;
    },
    onLoaded(args) {
      args.object.css = `
RadCartesianChart {
    margin: 12;
    padding: 12;
}

LinearAxis {
    maximum: 100;
}

CategoricalAxis, LinearAxis {
    line-hidden: true;
    ticks-hidden: true;
}

CategoricalAxis ChartAxisLabel{
    color: #3C4044;
    padding: 6;
    font-family: sans-serif;
}

LinearAxis ChartAxisLabel {
    color: transparent;
}

BarSeries {
    show-labels: true;
    fill-color: #C8A1FF;
    stroke-color: white;
    stroke-width: 4;
}

BarSeries[index=1] {
    fill-color: #6215EE;
}

ChartSeriesLabel {
    margin: 16;
    font-size: 12;
    color: #C8A1FF;
    background-color: transparent;
    border-color: transparent;
    border-width: 2;
    format: "%.1f";
}

BarSeries[index=1] ChartSeriesLabel {
    color: #6215EE;
}

.root {
    background: white;
}

Label.title {
    font-size: 26;
    margin: 12 12 0 12;
    color:#212121;
}

Label.subtitle {
    font-size: 14;
    margin: 0 12 0 12;
    color:#70212121;
}

.legend {
    margin: 12;
    color: #5F6368;
}

.legend .symbol {
    border-radius: 20;
    width: 20;
    height: 20;
}

.legend .symbol.first {
    background: #6215EE;
    margin: 0 8 0 12;
}

.legend .symbol.second {
    background: #C8A1FF;
    margin: 0 8 0 30;
}
      `;
    }
  },
};