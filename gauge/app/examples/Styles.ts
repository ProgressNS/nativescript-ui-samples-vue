import * as frameModule from 'tns-core-modules/ui/frame';
import {
  TitleStyle,
  SubtitleStyle,
  RadRadialGauge,
  RadialScale,
  BarIndicator,
  RadialNeedle } from 'nativescript-ui-gauge';
import { StyleBindingsModel } from './data';

const description = 'Styles';

export default {
  name: 'Styles',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="*, auto">
      <RadRadialGauge ref="myGauge" class="gauge" row="0"
                      @loaded="onLoaded()"
                      :title="model.title"
                      :subtitle="model.subtitle">
        <TitleStyle v-tkRadialGaugeTitleStyle
                    :textColor="model.titleTextColor"
                    :textSize="model.titleTextSize"
                    :verticalOffset="model.titleVerticalOffset"
                    :horizontalOffset="model.titleHorizontalOffset"></TitleStyle>
        <SubtitleStyle v-tkRadialGaugeSubtitleStyle
                       :textColor="model.subtitleTextColor"
                       :textSize="model.subtitleTextSize"
                       :verticalOffset="model.subtitleVerticalOffset" [horizontalOffset]="model.subtitleHorizontalOffset"></SubtitleStyle>
        <RadialScale ref="myScale" v-tkRadialGaugeScales minimum="0" maximum="180" radius="0.9">
            <ScaleStyle v-tkRadialScaleStyle
                        :majorTicksCount="model.majorTicksCount"
                        :minorTicksCount="model.minorTicksCount"
                        :majorTicksWidth="model.majorTicksWidth"
                        :minorTicksWidth="model.minorTicksWidth"
                        :lineThickness="model.lineThickness"
                        :lineColor="model.lineColor"
                        :labelsColor="model.labelsColor"
                        :labelsCount="model.labelsCount"
                        ios:labelsSize="15" android:labelsSize="60"
                        :labelsVisible="model.labelsVisible"></ScaleStyle>

            <RadialBarIndicator v-tkRadialScaleIndicators minimum="0"
                                :maximum="model.firstPoint" location="0.97">
                <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                   :fillColor="model.firstColor"></BarIndicatorStyle>
            </RadialBarIndicator>

            <RadialBarIndicator v-tkRadialScaleIndicators
                                :minimum="model.firstPoint"
                                :maximum="model.secondPoint"
                                location="0.97">
                <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                   :fillColor="model.secondColor"></BarIndicatorStyle>
            </RadialBarIndicator>

            <RadialBarIndicator v-tkRadialScaleIndicators
                                :minimum="model.secondPoint"
                                maximum="180" location="0.97">
                <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                   fillColor="#A7010E"
                                   :barWidth="model.barWidth"></BarIndicatorStyle>
            </RadialBarIndicator>

            <RadialNeedle v-tkRadialScaleIndicators
                          :value="model.needleValue">
                <NeedleStyle v-tkRadialNeedleStyle
                             :length="model.needleLength"
                             :circleRadius="model.circleRadius"
                             :circleFillColor="model.fillColor"
                             :circleStrokeColor="model.strokeColor"
                             :circleStrokeWidth="model.strokeWidth"
                             :fillColor="model.fillColor"
                             :strokeColor="model.strokeColor"
                             :strokeWidth="model.strokeWidth"
                             :topWidth="model.topWidth"
                             :bottomWidth="model.bottomWidth"></NeedleStyle>
            </RadialNeedle>
        </RadialScale>
      </RadRadialGauge>
      <StackLayout row="1" orientation="horizontal" horizontalAlignment="center">
          <Button text="Update Binding" verticalAlignment="center"
                  marginBottom="10" marginTop="0"
                  @tap="onUpdateModel()" ></Button>
          <Button text="Update Properties"
                  verticalAlignment="center" marginLeft="10" marginBottom="10"
                  @tap="onUpdateProperties()"></Button>
          <Button text="Reset"
                  verticalAlignment="center" marginLeft="10" marginBottom="10"
                  @tap="onReset()"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    let model = new StyleBindingsModel();

    return {
      title: description,
      model: model,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onLoaded() {
      let gauge = this.$refs.myGauge.nativeView as RadRadialGauge;
      this._titleStyle = gauge.titleStyle as TitleStyle;
      this._subtitleStyle = gauge.subtitleStyle as SubtitleStyle;
      let scale = <RadialScale>gauge.scales.getItem(0);
      this._scaleStyle = scale.scaleStyle;
      this._firstIndicatorStyle = (<BarIndicator>scale.indicators.getItem(0)).indicatorStyle;
      this._secondIndicatorStyle = (<BarIndicator>scale.indicators.getItem(1)).indicatorStyle;
      this._needle = <RadialNeedle>scale.indicators.getItem(scale.indicators.length - 1);
      this._needleStyle = this._needle.needleStyle;
    },
    onUpdateProperties() {
      this._needle.value = 136;
      this._titleStyle.textColor = "DarkRed";
      this._subtitleStyle.textColor = "Red";
      this._needleStyle.fillColor = "Red";
      this._needleStyle.circleFillColor = "Red";
      this._needleStyle.strokeColor = "DarkGray";
      this._needleStyle.circleStrokeColor = "DarkGray";
      this._firstIndicatorStyle.fillColor = "LightGray";
      this._secondIndicatorStyle.fillColor = "Black";
      this._scaleStyle.lineColor = "SlateGray";
      this._scaleStyle.labelsColor = "DarkRed";
    },
    onUpdateModel() {
      this.model.onUpdate();
      this._needle.value = 136;
    },
    onReset() {
      this.model.onReset();
      this._needle.value = this.model.needleValue;
      this._titleStyle.textColor = this.model.titleTextColor;
      this._subtitleStyle.textColor = this.model.subtitleTextColor;
      this._needleStyle.fillColor = this.model.fillColor;
      this._needleStyle.circleFillColor = this.model.fillColor;
      this._needleStyle.strokeColor = this.model.strokeColor;
      this._needleStyle.circleStrokeColor = this.model.strokeColor;
      this._firstIndicatorStyle.fillColor = this.model.firstColor;
      this._secondIndicatorStyle.fillColor = this.model.secondColor;
      this._scaleStyle.lineColor = this.model.lineColor;
      this._scaleStyle.labelsColor = this.model.labelsColor;
    },
  },
};
