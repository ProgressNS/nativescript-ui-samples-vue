import * as frameModule from 'tns-core-modules/ui/frame';
import { RadialScale, RadialBarIndicator } from "nativescript-ui-gauge";

const description = 'Customization';

export default {
  name: 'Customization',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout>
      <RadRadialGauge class="gauge">
        <RadialScale ref="myScale" v-tkRadialGaugeScales startAngle="0" sweepAngle="360" minimum="0" maximum="100" radius="0.9">
          <ScaleStyle v-tkRadialScaleStyle ticksVisible="false" labelsVisible="false" lineThickness="0"></ScaleStyle>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="100" location="0.5">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="rgba(224,151,36,0.5)" barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="0" location="0.5" isAnimated="true">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle cap="Round" fillColor="rgba(224,151,36,1)" barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="100" location="0.75">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="rgba(196,241,57,0.5)" barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="0" location="0.75" isAnimated="true">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle cap="Round" fillColor="rgba(196,241,57,1)" barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="100" location="1">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="rgba(132,235,247,0.5)" barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="0" location="1" isAnimated="true">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle cap="Round" fillColor="rgba(132,235,247,1)" barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>
        </RadialScale>
      </RadRadialGauge>.
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
  mounted () {
    let scale = this.$refs.myScale.nativeView as RadialScale;
    for (let i = 0; i < scale.indicators.length; i++) {
        let barIndicator = scale.indicators.getItem(i) as RadialBarIndicator;
        if (barIndicator.maximum === 0) {
            barIndicator.maximum = i * 15;
        }
    }
  },
};
