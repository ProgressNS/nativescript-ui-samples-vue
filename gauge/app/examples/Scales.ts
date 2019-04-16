import * as frameModule from 'tns-core-modules/ui/frame';
// >> gauge-scales-vue
const description = 'Scales';

export default {
  name: 'Scales',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadRadialGauge title="celsius" subtitle="fahrenheit">
      <TitleStyle v-tkRadialGaugeTitleStyle textColor="gray" ios:textSize="12" ios:verticalOffset="30" android:verticalOffset="90"></TitleStyle>
      <SubtitleStyle v-tkRadialGaugeSubtitleStyle textColor="gray"></SubtitleStyle>
        <RadialScale v-tkRadialGaugeScales startAngle="135" sweepAngle="270" minimum="34" maximum="40" radius="0.6">
          <ScaleStyle v-tkRadialScaleStyle majorTicksCount="7" minorTicksCount="9" lineThickness="2" labelsOffset="0.1" lineColor="gray"
                      labelsCount="7" ticksOffset="0"></ScaleStyle>
          <RadialBarIndicator v-tkRadialScaleIndicators minimum="34" maximum="36" location="0.69">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="blue" barWidth="0.08"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="36.05" maximum="40" location="0.69">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="red" barWidth="0.08"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialNeedle v-tkRadialScaleIndicators value="36.5">
            <NeedleStyle v-tkRadialNeedleStyle length="0.5" android:topWidth="8" ios:topWidth="3" android:bottomWidth="8" ios:bottomWidth="3"></NeedleStyle>
          </RadialNeedle>
        </RadialScale>

        <RadialScale v-tkRadialGaugeScales minimum="93.2" maximum="104" radius="0.7">
          <ScaleStyle v-tkRadialScaleStyle majorTicksCount="7" minorTicksCount="20" lineThickness="2" labelsOffset="0.1" lineColor="gray"
                      labelsCount="7" ticksOffset="0" labelsLayoutMode="Outer" ticksLayoutMode="Outer"></ScaleStyle>
        </RadialScale>
    </RadRadialGauge>

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
};
// << gauge-scales-vue