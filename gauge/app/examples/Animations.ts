import * as frameModule from 'tns-core-modules/ui/frame';

const description = 'Animations';

export default {
  name: 'Animations',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="*, auto">
      <RadRadialGauge id="gaugeView" title="km/h" row="0" margin="10">
        <TitleStyle v-tkRadialGaugeTitleStyle textColor="black" ios:verticalOffset="20" android:verticalOffset="50"></TitleStyle>

        <RadialScale v-tkRadialGaugeScales minimum="0" maximum="180" radius="0.98">
          <ScaleStyle v-tkRadialScaleStyle lineThickness="0" labelsCount="10" majorTicksCount="19" minorTicksCount="1" ticksOffset="0.1"
                      majorTicksStrokeWidth="2" majorTicksStrokeColor="rgb(132, 132, 132)"></ScaleStyle>
          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="60">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="rgb(132, 132, 132)" barWidth="0.02"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="61" maximum="120">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="rgb(54, 54, 54)" barWidth="0.02"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="121" maximum="180">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="rgb(198, 85, 90)" barWidth="0.02"></BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialNeedle ref="needle" v-tkRadialScaleIndicators isAnimated="true" animationDuration="500">
            <NeedleStyle v-tkRadialNeedleStyle length="0.8" android:topWidth="8" android:bottomWidth="8" ios:topWidth="2" ios:bottomWidth="2"></NeedleStyle>
          </RadialNeedle>
        </RadialScale>
      </RadRadialGauge>

      <StackLayout row="1" orientation="horizontal" horizontalAlignment="center">
          <Button v-for="value of values"
                  verticalAlignment="center"
                  :text="value"
                  @tap="onValueChange(value)"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      values: [60, 80, 120, 160],
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onValueChange(value: number) {
      this.$refs.needle.nativeView.value = value;
    }
  },
};
