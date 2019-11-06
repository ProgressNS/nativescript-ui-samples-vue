import { Frame } from 'tns-core-modules/ui/frame';
import { getCampaignData } from '../../data';

const description = 'Line CSS';

export default {
  name: 'Line CSS',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout tkExampleTitle tkToggleNavButton rows="auto, 300, auto" @loaded="onLoaded" @unloaded="onUnloaded">
        <Label class="title" text="Campaigns in June"></Label>
        <RadCartesianChart row="1" allowAnimations="false">
            <RadCartesianChartGrid v-tkCartesianGrid
                horizontalLinesVisible="true"
                verticalLinesVisible="false"
                horizontalStrokeWidth="1"
                horizontalStripLinesVisible="false"
                verticalStripLinesVisible="false"
                horizontalStrokeColor="#E8EAED"
                verticalStrokeColor="#00000000"
                horizontalStripLineColor="#00000000, #00000000">
            </RadCartesianChartGrid>

            <LineSeries v-tkCartesianSeries :items="campaignData" categoryProperty="Date" valueProperty="Impressions"></LineSeries>
            <LineSeries v-tkCartesianSeries index="1" :items="campaignData" categoryProperty="Date" valueProperty="Clicks"></LineSeries>

            <DateTimeContinuousAxis v-tkCartesianHorizontalAxis minimum="01/06/2019" maximum="30/06/2019"></DateTimeContinuousAxis>
            <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
        </RadCartesianChart>
        <StackLayout row="2" class="legend" orientation="horizontal">
            <StackLayout class="symbol first"></StackLayout>
            <Label text="Impressions"></Label>
            <StackLayout class="symbol second"></StackLayout>
            <Label text="Clicks"></Label>
        </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      campaignData: getCampaignData(),
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
}

DateTimeContinuousAxis {
    date-format: "d";
    plot-mode: on-ticks;
    line-color: #DADCE0;
    ticks-color: #DADCE0;
    line-thickness: 2;
    ticks-thickness: 2;
    ticks-length: 4;
    ticks-offset: -1;
    major-step: 7;
    major-step-unit: day;
}

LinearAxis {
    line-hidden: true;
    ticks-hidden: true;
    label-layout-mode: outer;
    major-step: 250;
    horizontal-location: right;
}

ChartAxisLabel {
    color: #3C4044;
}

LinearAxis ChartAxisLabel {
    format: "%.0f";
    padding: 12;
}

LineSeries {
    stroke-width: 2;
    stroke-color: #6215EE;
}

LineSeries[index=1] {
    stroke-color: #26A69A;
}

Label.title {
    font-size: 26;
    margin: 12 12 0 24;
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
    width: 20;
    height: 2;
    color: #5F6368;
}

.legend .symbol.first {
    background: #6215EE;
    margin: 0 8;
}

.legend .symbol.second {
    background: #26A69A;
    margin: 0 8 0 30;
}
      `;
    }
  },
};