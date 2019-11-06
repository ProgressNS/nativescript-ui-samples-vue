import { Frame } from 'tns-core-modules/ui/frame';
import { getUsersData } from '../../data';

const description = 'Area CSS';

export default {
  name: 'Area CSS',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="auto, 300, auto" @loaded="onLoaded" @unloaded="onUnloaded">
        <Label class="title" text="Users in the last month"></Label>
        <RadCartesianChart allowAnimations="false" row="1">
            <RadCartesianChartGrid v-tkCartesianGrid
                horizontalLinesVisible="false"
                verticalLinesVisible="false"
                horizontalStripLinesVisible="false"
                verticalStripLinesVisible="false"
                horizontalStrokeColor="#00000000"
                verticalStrokeColor="#00000000"
                horizontalStripLineColor="#00000000, #00000000">
            </RadCartesianChartGrid>

            <AreaSeries v-tkCartesianSeries index="0" :items="usersData" categoryProperty="Date" valueProperty="CategoryA"></AreaSeries>
            <AreaSeries v-tkCartesianSeries index="1" :items="usersData" categoryProperty="Date" valueProperty="CategoryB"></AreaSeries>
            <AreaSeries v-tkCartesianSeries index="2" :items="usersData" categoryProperty="Date" valueProperty="CategoryC"></AreaSeries>

            <DateTimeContinuousAxis v-tkCartesianHorizontalAxis minimum="04/11/2019" maximum="03/12/2019"></DateTimeContinuousAxis>
            <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

        </RadCartesianChart>

        <Label class="subtitle" row="1" text="Users"></Label>

        <GridLayout class="legend" row="2" columns="auto,*,auto,*,auto,*">
            <StackLayout class="symbol first"></StackLayout>
            <Label text="Category A" column="1"></Label>
            <StackLayout class="symbol second" column="2"></StackLayout>
            <Label text="Category B" column="3"></Label>
            <StackLayout class="symbol third" column="4"></StackLayout>
            <Label text="Category C" column="5"></Label>
        </GridLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      usersData: getUsersData(),
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
    background: white;
    border-color: #5F6368;
    border-width: 2;
    border-radius: 6;
    padding: 46 16 6 26;
}

AreaSeries {
    stack-mode: stack;
    stroke-color: white;
    stroke-width: 4;
}

AreaSeries[index=0] {
    fill-color: #914DF3;
}

AreaSeries[index=1] {
    fill-color: #3CAFA4;
}

AreaSeries[index=2] {
    fill-color: #F5A067;
}

DateTimeContinuousAxis {
    major-step: 6;
    major-step-unit: day;
    plot-mode: on-ticks;
    stroke-color: #9AA0A6;
    line-thickness: 2;
    ticks-color: #9AA0A6;
    ticks-thickness: 2;
    ticks-length: 4;
    ticks-offset: -1;
    label-fit-mode: none;
    date-format: "d/M";
}

LinearAxis {
    horizontal-location: right;
    line-hidden: true;
    ticks-hidden: true;
    label-fit-mode: none;
}

ChartAxisLabel {
    padding: 6;
    font-size: 14;
    color:#5F6368;
}

DateTimeContinuousAxis ChartAxisLabel {
    margin: 6;
}

LinearAxis ChartAxisLabel {
    format: "%.0f";
}

Label.title {
    font-size: 26;
    margin: 12 12 0 12;
    color:#212121;
}

Label.subtitle {
    font-size: 14;
    margin: 24 32 0 12;
    color:#5F6368;
    horizontal-align:right;
    vertical-align: top;
}

.legend {
    margin: 12;
    color: #5F6368;
}

.legend .symbol {
    border-radius: 16;
    width: 16;
    height: 16;
    color: #5F6368;
}

.legend .symbol.first {
    background: #914DF3;
    margin: 0 4;
}

.legend .symbol.second {
    background: #3CAFA4;
    margin: 0 4;
}

.legend .symbol.third {
    background: #F5A067;
    margin: 0 4;
}
      `;
    }
  },
};