import { Frame } from 'tns-core-modules/ui/frame';
import { getPhoneStorageData } from '../../data';

const description = 'Donut CSS';

export default {
  name: 'Donut CSS',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout class="root" rows="auto, *, auto" @loaded="onLoaded" @unloaded="onUnloaded">
        <Label class="title" text="Phone storage"></Label>
        <WrapLayout class="legend" row="2" orientation="horizontal">
            <StackLayout orientation="horizontal">
                <Label class="symbol first"></Label>
                <Label text="Photos & Videos"></Label>
            </StackLayout>
            <StackLayout orientation="horizontal">
                <Label class="symbol second"></Label>
                <Label text="Music & Audio"></Label>
            </StackLayout>
            <StackLayout orientation="horizontal">
                <Label class="symbol third"></Label>
                <Label text="Games"></Label>
            </StackLayout>
            <StackLayout orientation="horizontal">
                <Label class="symbol fourth"></Label>
                <Label text="Movies & TV"></Label>
            </StackLayout>
            <StackLayout orientation="horizontal">
                <Label class="symbol fifth"></Label>
                <Label text="Other apps"></Label>
            </StackLayout>
        </WrapLayout>
        <RadPieChart row="1" allowAnimations="false">
            <DonutSeries v-tkPieSeries startAngle="-90" endAngle="270" valueProperty="Value" :items="phoneStorageData"></DonutSeries>
        </RadPieChart>
        <StackLayout row="1" class="chart-label">
            <Label class="chart-title" text="84 %"></Label>
            <Label class="chart-subtitle" text="used"></Label>
        </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      phoneStorageData: getPhoneStorageData(),
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
.root {
    background: white;
}

Label.title {
    font-size: 26;
    margin: 12 12 0 18;
    color:#212121;
}


DonutSeries {
    fill-colors: #3A15EA,#9926AE,#D01A5D,#FF9802,#C0CA33,#D7D7D7;
    stroke-colors: white,white,white,white,white,white;
    stroke-width: 2;
    inner-radius-factor: 0.8;
    outer-radius-factor: 0.7;
}

.chart-label {
    vertical-align: center;
}

.chart-title {
    horizontal-align: center;
    color: #313337;
    font-size: 24;
}

.chart-subtitle {
    horizontal-align: center;
    color: #787E83;
    font-size: 16;
}

.legend {
    color: #5F6368;
    margin: 24 12;
}

.legend StackLayout {
    margin: 6;
}

.legend .symbol {
    border-radius: 12;
    width: 12;
    height: 12;
    margin: 0 6;
}

.legend .first {
    background: #3A15EA;
}

.legend .second {
    background: #9926AE;
}

.legend .third {
    background: #D01A5D;
}

.legend .fourth {
    background: #FF9802;
}

.legend .fifth {
    background: #C0CA33;
}
      `;
    }
  },
};