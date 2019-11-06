import { Frame } from 'tns-core-modules/ui/frame';
import { getPlayersRealMadridData, getPlayersBarcelonaData } from '../../data';

const description = 'Scatter CSS';

export default {
  name: 'Scatter CSS',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="auto, auto, 300, auto, auto" @loaded="onLoaded" @unloaded="onUnloaded">
        <Label class="title" text="Players Stats"></Label>
        <Label class="weight" row="1" text="Weight (kg)"></Label>
        <RadCartesianChart row="2" allowAnimations="false">
            <RadCartesianChartGrid v-tkCartesianGrid
                horizontalLinesVisible="true"
                verticalLinesVisible="true"
                horizontalStrokeWidth="1"
                verticalStrokeWidth="1"
                horizontalStripLinesVisible="false"
                verticalStripLinesVisible="false"
                horizontalStrokeColor="#E8EAED"
                verticalStrokeColor="#E8EAED"
                horizontalStripLineColor="#00000000, #00000000">
            </RadCartesianChartGrid>

            <ScatterSeries v-tkCartesianSeries :items="playersRealMadridData" xProperty="Height" yProperty="Weight"></ScatterSeries>
            <ScatterSeries v-tkCartesianSeries index="1" :items="playersBarcelonaData" xProperty="Height" yProperty="Weight"></ScatterSeries>

            <LinearAxis v-tkCartesianHorizontalAxis class="horizontal"></LinearAxis>
            <LinearAxis v-tkCartesianVerticalAxis class="vertical"></LinearAxis>
        </RadCartesianChart>
        <Label class="height" row="3" text="Height (cm)"></Label>
        <GridLayout class="legend" row="4" columns="auto, *" rows="auto,auto">
            <Label class="symbol first"></Label>
            <Label column="1" text="Real Madrid Starting XI"></Label>
            <Label row="1" class="symbol second"></Label>
            <Label row="1" column="1" text="Barcelona Starting XI"></Label>
        </GridLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      playersRealMadridData: getPlayersRealMadridData(),
      playersBarcelonaData: getPlayersBarcelonaData(),
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
    margin: 12 16;
    color:#212121;
}

Label.weight {
    font-size: 14;
    margin: 0 16;
    color: #3C4044;
}

Label.height {
    font-size: 14;
    margin: 0 40;
    color: #3C4044;
}

RadCartesianChart {
    margin: 0 12;
}

LinearAxis {
    ticks-hidden: true;
    line-hidden: false;
    line-thickness: 2;
}

LinearAxis.horizontal {
    minimum: 160;
    maximum: 205;
    major-step: 15;
}

LinearAxis.vertical {
    minimum: 60;
    maximum: 100;
    major-step: 10;
}

ChartAxisLabel {
    color: #3C4044;
    format: "%.0f";
    margin: 12;
    layout-mode: outer;
}

ScatterSeries {
    fill-color: #6215EE;
    stroke-color: white;
    stroke-width: 1;
}

ScatterSeries[index=1] {
    fill-color: #26A69A;
}

.legend {
    color: #5F6368;
    margin: 12;
}

.legend .symbol {
    border-radius: 10;
    width: 10;
    height: 10;
}

.legend .symbol.first {
    background: #6215EE;
    margin: 0 4 0 30;
}

.legend .symbol.second {
    background: #26A69A;
    margin: 0 4 0 30;
}
      `;
    }
  },
};