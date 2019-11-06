import { Frame } from 'tns-core-modules/ui/frame';
import { getStockData } from '../../data';

const description = 'Candlestick CSS';

export default {
  name: 'Candlestick CSS',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="auto, auto, *" @loaded="onLoaded" @unloaded="onUnloaded">
        <Label class="title" text="DIS Stock Price (USD)"></Label>
        <Label class="subtitle" row="1" text="The Walt Disney Company"></Label>
        <RadCartesianChart row="2" allowAnimations="false">
            <RadCartesianChartGrid v-tkCartesianGrid
                horizontalLinesVisible="true"
                verticalLinesVisible="true"
                horizontalStripLinesVisible="false"
                verticalStripLinesVisible="false"
                horizontalStrokeWidth="1"
                horizontalStrokeColor="#EEEEEE"
                verticalStrokeColor="#F8F8F8"
                horizontalStripLineColor="#00000000, #00000000"
                verticalStripLineColor="#00000000, #00000000">
            </RadCartesianChartGrid>

            <CandlestickSeries v-tkCartesianSeries :items="stockData" categoryProperty="Date"
                openPropertyName="Open" highPropertyName="High" lowPropertyName="Low" closePropertyName="Close">
            </CandlestickSeries>

            <DateTimeCategoricalAxis v-tkCartesianHorizontalAxis></DateTimeCategoricalAxis>
            <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
        </RadCartesianChart>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      stockData: getStockData(),
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

RadCartesianChart {
    margin: 12;
}

LinearAxis {
    label-format: "%.1f";
    minimum: 125;
    maximum: 137.5;
    major-step: 2.5;
    line-color: #C6C9CC;
    ticks-color: #C6C9CC;
    line-thickness: 1;
    ticks-thickness: 1;
    ticks-length: 4;
    ticks-hidden: false;
    line-hidden: false;
}

DateTimeCategoricalAxis {
    date-format: "MMM dd";
    line-color: #C6C9CC;
    ticks-color: #C6C9CC;
    line-thickness: 1;
    ticks-thickness: 1;
    ticks-length: 4;
    ticks-hidden: false;
    line-hidden: false;
    plot-mode: on-ticks;
}

ChartAxisLabel {
    margin: 8;
}

DateTimeCategoricalAxis ChartAxisLabel {
    fit-mode: rotate;
    rotation-angle: 4.71;
}

CandlestickSeries {
    stroke-width: 1;
    stroke-colors: #464D57,#464D57;
    fill-colors: #00B061,#FF3030;
}
      `;
    }
  },
};